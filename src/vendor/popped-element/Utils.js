import $ from 'jquery';

export default {
	extend(destObject, ...sourceObjects) {
		return $.extend(true, destObject, ...sourceObjects);
	},

	getTranslateString(xValue = 0, yValue = 0) {
		return `translate(${xValue}px, ${yValue}px)`;
	},

	_generateUniqueId(idPrefix = "") {
		let id = Math.floor(Math.random() * 100000);
		return idPrefix + id;
	},

	_getNamespacedEventWrapFunction(eventNamespace) {
		return (eventName) => `${eventName}.${eventNamespace}`;
	},

	isTouchDevice() {
		return (
			'orientation' in window || 
			'orientation' in document.documentElement
		);
	},

	capitalizeString(stringToCapitalize) {
		return stringToCapitalize[0].toUpperCase() + stringToCapitalize.substr(1);
	}
}