'use strict';

!function () {
	var view = document.querySelector('#topNavBar');

	var controller = {
		view: null,
		init: function init() {
			this.view;
			this.bindEvents();
		},
		bindEvents: function bindEvents() {
			var _this = this;

			var view = this.view;
			window.addEventListener('scroll', function (x) {
				if (window.scrollY > 0) {
					_this.active();
				} else {
					_this.deactive();
				}
			});
			// 箭头函数没有this，因为箭头的函数的内外的this是不变的
		},
		active: function active() {
			this.view.classList.add('sticky');
		},
		deactive: function deactive() {
			this.view.classList.remove('sticky');
		}
	};
	controller.init(view);
}.call();