'use strict';

window.Model = function (options) {
	var resourceName = options.resourceName;
	return {
		init: function init() {
			var APP_ID = '',
			    APP_KEY = '';
			AV.init({ appId: APP_ID, appKey: APP_KEY });
		},
		fetch: function fetch() {
			var query = new AV.Query(resourceName);
			return query.find();
		},
		save: function save() {
			var x = AV.Obeject.extend(resourceName);
			var x = new x();
			return x.save(obeject);
		}
	};
};