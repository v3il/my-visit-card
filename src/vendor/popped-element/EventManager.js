import $ from "jquery";

class EventManager {
	constructor() {
		let instance = this;
		instance.storage = new Map();
	}


	registerEvents(element, eventNames, eventHandler, eventTargetSelector) {
		let instance = this;
		let storage = instance.storage;

		if(!storage.get(element)) {
			storage.set(element, []);
		}

		if(eventTargetSelector) {
			element.on(eventNames.join(" "), eventTargetSelector, eventHandler);
		} else {
			element.on(eventNames.join(" "), eventHandler);
		}
		
		storage.get(element).push(...eventNames);
	}


	removeAllRegisteredEvents() {
		let instance = this;

		instance.storage.forEach((elementEvents, element) => {
			elementEvents.forEach((eventName, index) => {
				element.off(eventName);
			});
		});
	}
}


export default EventManager;