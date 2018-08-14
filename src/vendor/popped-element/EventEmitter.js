class EventEmitter {
	constructor() {
		let instance = this;
		instance.storage = {};
	}


	emit(eventName, callbackThis, ...eventData) {
		let instance = this;
		let callbacksArray = instance.storage[eventName];

		if(!callbacksArray) {
			return;
		}

		callbacksArray.forEach((eventHandler, index) => {
			eventHandler.apply(callbackThis, eventData);
		});
	}


	on(eventName, callback) {
		let instance = this;
		let storage = instance.storage;

		if(!storage[eventName]) {
			storage[eventName] = [];
		}

		if(typeof callback === "function") {
			storage[eventName].push(callback);
		}
	}
}


export default EventEmitter;