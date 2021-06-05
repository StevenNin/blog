"use strict";

window.Controller = function (options) {
	var _init = options.init;
	this.bindEvents = options.bindEvents;
	return {
		view: null,
		model: null,
		init: function init(view, model) {
			this.view = view;
			this.model = model;
			this.model.init();
			this.bindEvents();
			_init.call(this, view, model);
		},
		bindEvents: function bindEvents() {}
	};
};