window.Model = function(options){
	let resourceName = options.resourceName
	return {
		init:function(){
			var APP_ID = '',
				APP_KEY = ''
			AV.init({appId: APP_ID, appKey:APP_KEY })
		},
		fetch: function(){
			var query = new AV.Query(resourceName);
			return query.find()
		},
		save: function(){
			var x  = AV.Obeject.extend(resourceName);
			var x  =  new x();
			return x.save(obeject)
		}
	}
}

