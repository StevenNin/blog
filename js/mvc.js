!function(){
	var view = document.querySelector('#topNavBar')

	var controller = {
		view:null,
		init:function(){
			this.view;
			this.bindEvents()
		},
		bindEvents:function(){
			var view = this.view;
			window.addEventListener('scroll',(x)=>{
				if(window.scrollY > 0 ){
					this.active()
				}else{
					this.deactive()
				}
			})
			// 箭头函数没有this，因为箭头的函数的内外的this是不变的
		},
		active:function(){
			this.view.classList.add('sticky')
		},
		deactive:function(){
			this.view.classList.remove('sticky')
		}
	}
	controller.init(view)
}.call()

