!function(){
  var model = {
    init: function(){
      var  APP_ID  = "euE2p5cOiI76a2HNil724Qqn-MdYXbMMI";
      var  APP_KEY  = "i0Uci98oEDC5e15OH6lIFhEG";
      AV.init({appId: APP_ID,appKey: APP_KEY,});
    },
    fetch: function(){
      var query = new AV.Query('message');
      return query.find()
    },
    save: function(name,content){
      var Message = AV.Object.extend('message');
      var message = new Message();
      return message.save({
        'name':name,
        'content':content
      })
    }
  }
  var view  = document.querySelector('section.messageBox')

  var controller = {
    view: null,
    model: null,
    messageList: null,
    init:function(view,model){
      this.view = view
      this.model  = model

      this.messageList  = view.querySelector('#messageList')
      this.form = view.querySelector('form')
      this.model.init()
      this.loadMessage()
      this.bindEvents()
    },
    loadMessage:function(){
      this.model.fetch().then(messages=>{
        let array = messages.map(item=>item.attributes)
        array.forEach(item=>{
          let li = document.createElement('li')
          li.innerText = `${item.name}:${item.words?item.words:item.content}`;
          this.messageList.append(li)
        })
      })
    },
    bindEvents:function(){
      this.form.addEventListener('submit',(e)=>{
        e.preventDefault()
        // console.log(this,"指向")
        this.saveMessage()
      })
    },
    saveMessage:function(){
      let myForm  = this.form
      let name  = myForm.querySelector('input[name =name').value
      let content = myForm.querySelector('input[name=content]').value
      this.model.save(name,content).then(function(object){
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.words?object.attributes.words:object.attributes.content}`;
        let messagesList = document.querySelector('#messageList')
        messageList.append(li)
        myForm.querySelector('input[name=content]').value= ''
      })
    }
  }
  controller.init(view,model)
}.call()





