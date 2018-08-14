import $ from "jquery";

import Utils from './Utils';
import EventEmitter from './EventEmitter';
import EventManager from './EventManager';

import './style.css';

const TAIL_SIDE_LENGTH = 5;
const DISTANCE_FROM_TAIL_TO_REL_ELEMENT = 7;
const MODULE_PREFIX = "pe";

const ORIGIN_OFFSET = 2;


class PoppedElement extends EventEmitter {
	constructor(options = {}) {
		super();

		let instance = this;

		instance.options = Utils.extend(instance._getDefaultOptions(), options);
		instance.element = instance._createElement();
		instance.eventManager = new EventManager();
		instance.metaData = {
			isVisible: false,
			prevTargetElement: null,
			instanceId: Utils._generateUniqueId(MODULE_PREFIX),
			contentSlotId: null,
		};

		// console.log(instance.options)

		instance.options.parentElement.append(instance.element);
		instance._addEventListeners();

		instance.emit(`${MODULE_PREFIX}-created`, instance);
	}


	getElement() {
		let instance = this;
		return instance.element;
	}


	getContentWrapperElement() {
		let instance = this;
		return instance.getElement().find(".js-content-block");
	}


	getTailElement() {
		let instance = this;
		return instance.getElement().find(".js-tail-block");
	}


	getContent() {
		let instance = this;
		return instance.getContentWrapperElement().children();
	}


	setOffsets(offsetsObject) {
		let instance = this;
		instance.options.behaviour.offset = $.extend(instance.options.behaviour.offset, offsetsObject);
		return instance;
	}


	show(relativeElement) {
		let instance = this;

		instance.element.show();
		instance.metaData.isVisible = true;
		
		if(relativeElement) {
			instance.metaData.prevTargetElement = relativeElement;
		}

		instance.emit(`${MODULE_PREFIX}-show`, instance, instance.metaData.prevTargetElement);
		instance.setPosition(instance.metaData.prevTargetElement);

		if(relativeElement) {
			instance.metaData.prevTargetElement = relativeElement;
		}

		return instance;
	}


	hide() {
		let instance = this;

		instance.emit(`${MODULE_PREFIX}-hide`, instance, instance.metaData.prevTargetElement);

		instance.element.hide();
		instance.metaData.isVisible = false;
		instance.metaData.prevTargetElement = null;

		return instance;
	}


	isVisible() {
		let instance = this;
		return instance.metaData.isVisible;
	}


	setContent(content) {
		let instance = this;
		let element = instance.element;

		instance.releaseContent();
		instance.getContentWrapperElement().empty().append(content);

		return instance;
	}


	setHTMLContent(content) {
		let instance = this;
		let element = instance.element;
		let contentElement = $(content);

		instance.releaseContent();

		if(contentElement.closest("body").length) {
			contentElement.replaceWith(instance._getContentSlotHTML());
		}

		instance.getContentWrapperElement().empty().append(contentElement);

		return instance;
	}


	releaseContent() {
		let instance = this;
		let currentContent = instance.getContent();

		if(currentContent.length) {
			let contentSlotElement = $(`#${instance.metaData.instanceId}-slot`);
			contentSlotElement.replaceWith(currentContent.hide());
		}

		return instance;
	}


	setPosition(relativeElement) {
		let instance = this;

		if(!relativeElement) {
			instance.hide();
			return;
		}

		let element = instance.getElement();
		let measurementObject = instance._getElementsMeasurements(relativeElement);

		instance._resetElementClasses();

		let positionWasFound = false;

		instance.options.appearance.positions.forEach((positionName, index) => {
			if(positionWasFound) {
				return;
			}

			let positionData = 
				instance[`_setAt${Utils.capitalizeString(positionName)}`]
					.call(instance, relativeElement, measurementObject);

			if(positionData.isFitted) {
				let translateString = Utils.getTranslateString(positionData.positionObject.x, positionData.positionObject.y);

				element
					.css("transform", translateString)
					.addClass(`at-${positionName}`);

				if(instance.options.behaviour.useTail) {
					let tailElement = instance.getTailElement();
					tailElement.removeAttr("style").css(positionData.tailPosition);
				}

				positionWasFound = true;
			}
		});

		return instance;

	}


	setPrevPosition() {
		let instance = this;

		if(instance.metaData.prevTargetElement && instance.isVisible()) {
			instance.setPosition(instance.metaData.prevTargetElement)
		}
	}


	destroy() {
		let instance = this;

		instance.releaseContent();
		instance.element.remove();
		instance.eventManager.removeAllRegisteredEvents();

		instance.emit(`${MODULE_PREFIX}-destroy`, instance);
	}


	_setAtTop(relativeElement, measurementObject) {
		let instance = this;

		let translateXValue = measurementObject.relative.left + measurementObject.relative.width / 2 - measurementObject.element.width / 2;
		translateXValue = instance._getNormalizedXValue(translateXValue, measurementObject);
		
		let translateYValue = measurementObject.relative.top - measurementObject.element.height - instance.options.behaviour.offset.v;

		let topOriginOffset = instance.options.topOriginOffset || 0;

		return {
			isFitted: translateYValue >= $(window).scrollTop(),
			positionObject: {
				x: translateXValue,
				y: translateYValue,
			},
			tailPosition: instance._getTailCoordsForHorizontalPositions(translateXValue, measurementObject),
		}
	}


	_setAtBottom(relativeElement, measurementObject) {
		let instance = this;
		
		let translateXValue = measurementObject.relative.left + measurementObject.relative.width / 2 - measurementObject.element.width / 2;
		translateXValue = instance._getNormalizedXValue(translateXValue, measurementObject);

		let translateYValue = measurementObject.relative.top + measurementObject.relative.height + instance.options.behaviour.offset.v;
		
		return {
			isFitted: translateYValue <= $(window).height() + $(window).scrollTop(),
			positionObject: {
				x: translateXValue,
				y: translateYValue,
			},
			tailPosition: instance._getTailCoordsForHorizontalPositions(translateXValue, measurementObject),
		}
	}


	_getNormalizedXValue(initialValue, measurementObject) {
		if(initialValue + measurementObject.element.width >= measurementObject.window.width) {
			initialValue = measurementObject.window.width - measurementObject.element.width - ORIGIN_OFFSET;
		}

		// if(initialValue + measurementObject.element.width >= $(window).width()) {
		// 	initialValue = $(window).width() - measurementObject.element.width - ORIGIN_OFFSET;
		// }

		if(initialValue <= 0) {
			initialValue = ORIGIN_OFFSET;
		}

		return initialValue;
	}


	_getTailCoordsForHorizontalPositions(elementXValue, measurementObject) {
		let instance = this;

		// TODO
		let leftPosition = measurementObject.relative.left + measurementObject.relative.width / 2 - elementXValue - TAIL_SIDE_LENGTH;

		return { left: leftPosition };
	}


	// _setAtRight(relativeElement, measurementObject) {
	// 	let instance = this;
	// 	let element = instance.getElement();

	// 	let translateYValue = measurementObject.relative.top + measurementObject.relative.height / 2 - measurementObject.element.height / 2;
	// 	translateYValue = instance._getNormalizedYValue(translateYValue, measurementObject);

	// 	let translateXValue = measurementObject.relative.left + measurementObject.relative.width + instance.options.behaviour.offset.h;

	// 	return {
	// 		isFitted: translateXValue <= measurementObject.window.width,
	// 		positionObject: {
	// 			x: translateXValue,
	// 			y: translateYValue,
	// 		},
	// 		tailPosition: instance._getTailCoordsForVerticalPositions(translateYValue, measurementObject),
	// 	}
	// }


	// _setAtLeft(relativeElement, measurementObject) {
	// 	let instance = this;
	// 	let element = instance.getElement();

	// 	let translateYValue = measurementObject.relative.top + measurementObject.relative.height / 2 - measurementObject.element.height / 2;
	// 	translateYValue = instance._getNormalizedYValue(translateYValue, measurementObject);

	// 	let translateXValue = measurementObject.relative.left - measurementObject.element.width - instance.options.behaviour.offset.h;

	// 	return {
	// 		isFitted: translateXValue >= 0,
	// 		positionObject: {
	// 			x: translateXValue,
	// 			y: translateYValue,
	// 		},
	// 		tailPosition: instance._getTailCoordsForVerticalPositions(translateYValue, measurementObject),
	// 	}
	// }


	// _getTailCoordsForVerticalPositions(elementYValue, measurementObject) {
	// 	let instance = this;

	// 	// TODO
	// 	let topPosition = measurementObject.element.height / 2 - TAIL_SIDE_LENGTH;

	// 	return { top: topPosition };
	// }


	_getNormalizedYValue(initialValue, measurementObject) {
		if(initialValue <= 0) {
			initialValue = ORIGIN_OFFSET;
		}

		if(initialValue + measurementObject.element.height >= measurementObject.window.height) {
			initialValue = measurementObject.window.height - measurementObject.element.height - ORIGIN_OFFSET;
		}

		return initialValue;
	}


	_getElementsMeasurements(relativeElement) {
		let instance = this;
		let element = instance.getElement();

		element.removeClass("popped-element--fixed");

		let parentElement = instance.options.parentElement;
		let parentTopOffset = parentElement.offset().top;
		let parentLeftOffset = parentElement.offset().left;

		/** If relativeElement is inside iframe, fix its position */
		if(parentElement.is(":hidden")) {
			parentElement = $(window);
			parentTopOffset = 0;
			parentLeftOffset = 0;

			element.addClass("popped-element--fixed");
		}

		let relativeElementTopOffset = relativeElement.offset().top;
		let relativeElementLeftOffset = relativeElement.offset().left;

		let relativeElementWidth = relativeElement.outerWidth();
		let relativeElementHeight = relativeElement.outerHeight();

		return {
			element: {
				width: element.outerWidth(),
				height: element.outerHeight(),
			},

			window: {
				width: parentElement.width(),
				height: parentElement.height(),
			},

			relative: {
				top: relativeElementTopOffset - parentTopOffset,
				left: relativeElementLeftOffset - parentLeftOffset,
				right: relativeElementLeftOffset - parentLeftOffset + relativeElementWidth,
				bottom: relativeElementTopOffset - parentTopOffset + relativeElementHeight,
				width: relativeElementWidth,
				height: relativeElementHeight,
			}
		}
	}


	_resetElementClasses() {
		let instance = this;
		let classesToRemove = [
			"at-top",
			"at-bottom",
			"at-right",
			"at-left",
		];

		instance.getElement().removeClass(classesToRemove.join(" "));
	}


	_addRepositionSupport() {
		let instance = this;
		let options = instance.options;
		let metaData = instance.metaData;
		let eventManager = instance.eventManager;

		let generateNamespacedEventName = Utils._getNamespacedEventWrapFunction(metaData.instanceId);

		let $window = $(window);

		eventManager.registerEvents(
			$window,
			[
				generateNamespacedEventName("resize"), 
				generateNamespacedEventName("scroll"), 
				generateNamespacedEventName("orientationchange")
			],
			(event) => instance.setPrevPosition()
		);

		eventManager.registerEvents(
			instance.getElement(),
			["resize"],
			(event) => instance.setPrevPosition()
		);
	}


	_addOutsideClickSupport() {
		let instance = this;
		let options = instance.options;
		let metaData = instance.metaData;
		let eventManager = instance.eventManager;

		let generateNamespacedEventName = Utils._getNamespacedEventWrapFunction(metaData.instanceId);
		let $document = $(document);

		// let eventName = Utils.isTouchDevice() ? "touchend" : "click";

		if(options.behaviour.trackOutsideClick) {
			eventManager.registerEvents(
				$document,
				[generateNamespacedEventName("click")],
				(event) => {
					let eventTarget = $(event.target);
					let isOutsideClick = (
						   !eventTarget.closest(metaData.prevTargetElement).length
						&& !eventTarget.closest(instance.getElement()).length
					);

					if(isOutsideClick && instance.isVisible()) {
						instance.hide();
					}
				}
			);
		}
	}


	_getDefaultOptions() {
		const DEFAULT_OFFSET_VALUE = 7;

		return {
			appearance: {
				eventName: "",
				targetElementsSelectors: {
					show: "",
					hide: "",
				},
				positions: ["top", "bottom"/*, "right", "left"*/],
			},

			behaviour: {
				useTail: true,
				trackOutsideClick: true,
				themeClass: "",
				offset: {
					h: DEFAULT_OFFSET_VALUE,
					v: DEFAULT_OFFSET_VALUE,
				}
			},

			parentElement: $("body"),
		}
	}


	_createElement() {
		let instance = this;
		let options = instance.options;

		let themeClass = options.behaviour.themeClass;

		let defaultPoppedElementHTML = (`
			<div class="popped-element ${themeClass}">
				<div class="content js-content-block"></div>
				<div class="tail js-tail-block"></div>
			</div>
		`);

		let element = $(defaultPoppedElementHTML).hide();

		if(!options.behaviour.useTail) {
			element.find(".js-tail-block").hide();
		}

		return element;
	}


	_addEventListeners() {
		let instance = this;
		let options = instance.options;
		let metaData = instance.metaData;
		let eventManager = instance.eventManager;

		let generateNamespacedEventName = Utils._getNamespacedEventWrapFunction(metaData.instanceId);

		let $document = $(document);
		let $window = $(window);

		switch(options.appearance.eventName) {
			case "click":
				eventManager.registerEvents(
					$document,
					[generateNamespacedEventName("click")],
					(event) => {
						let eventTarget = $(event.target);
						let targetElement = eventTarget.closest(options.appearance.targetElementsSelectors.show).eq(0);

						if(!targetElement.length) {
							return;
						}

						if(metaData.prevTargetElement && targetElement.is(metaData.prevTargetElement)) {
							instance.hide();
							event.stopPropagation();
						} else {
							if(metaData.prevTargetElement) {
								instance.hide();
							}

							instance.show(targetElement);
						}
					},
					options.appearance.targetElementsSelectors.show,
				);


				instance._addOutsideClickSupport();
				instance._addRepositionSupport();

				break;

			case "hover":
				if(Utils.isTouchDevice()) {
					eventManager.registerEvents(
						$document,
						[generateNamespacedEventName("touchstart")],
						(event) => {
							// console.log("touchstart");
							hoverShowHandler(event);
						},
						options.appearance.targetElementsSelectors.show
					);


					eventManager.registerEvents(
						$document,
						[generateNamespacedEventName("touchmove")],
						(event) => {
							instance.hide();
						}
					);


					eventManager.registerEvents(
						$window,
						[generateNamespacedEventName("contextmenu")],
						(event) => {
							event.preventDefault();
							return false;
						}
					);


					eventManager.registerEvents(
						$document,
						[generateNamespacedEventName("touchend")],
						(event) => {
							hoverHideHandler(event);
						},
						options.appearance.targetElementsSelectors.hide
					);
				} else {
					eventManager.registerEvents(
						$document,
						[generateNamespacedEventName("mouseenter")],
						(event) => {
							// console.log("mouseenter");
							hoverShowHandler(event);
						},
						options.appearance.targetElementsSelectors.show
					);


					eventManager.registerEvents(
						$document,
						[generateNamespacedEventName("click")],
						(event) => {
							if(instance.isVisible()) {
								instance.hide();
							}
						},
						`${options.appearance.targetElementsSelectors.show}, ${options.appearance.targetElementsSelectors.hide}`
					);


					eventManager.registerEvents(
						$document,
						[generateNamespacedEventName("mouseleave")],
						(event) => {
							// console.log("mouseleave");
							hoverHideHandler(event);
						},
						options.appearance.targetElementsSelectors.hide
					);
				}

				break;

			case "manual":
				instance._addOutsideClickSupport();
				break;
		}


		function hoverShowHandler(event) {
			let eventTarget = $(event.target);
			let targetElement = eventTarget.closest(options.appearance.targetElementsSelectors.show).eq(0);

			if(!targetElement.length) {
				return;
			}

			instance.show(targetElement);
		}


		function hoverHideHandler(event) {
			let eventTarget = $(event.target);
			let targetElement = eventTarget.closest(options.appearance.targetElementsSelectors.hide).eq(0);

			if(!targetElement.length) {
				return;
			}

			instance.hide();
		}
	}


	_getContentSlotHTML() {
		let instance = this;
		return `<div id="${instance.metaData.instanceId}-slot" style="display: none"></div>`;
	}
}


export default PoppedElement;	