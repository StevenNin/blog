"use strict";

!function () {
  var model = {
    init: function init() {
      var APP_ID = "euE2p5cOiI76a2HNil724Qqn-MdYXbMMI";
      var APP_KEY = "i0Uci98oEDC5e15OH6lIFhEG";
      AV.init({ appId: APP_ID, appKey: APP_KEY });
    },
    fetch: function fetch() {
      var query = new AV.Query('message');
      return query.find();
    },
    save: function save(name, content) {
      var Message = AV.Object.extend('message');
      var message = new Message();
      return message.save({
        'name': name,
        'content': content
      });
    }
  };
  var view = document.querySelector('section.messageBox');

  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function init(view, model) {
      this.view = view;
      this.model = model;

      this.messageList = view.querySelector('#messageList');
      this.form = view.querySelector('form');
      this.model.init();
      this.loadMessage();
      this.bindEvents();
    },
    loadMessage: function loadMessage() {
      var _this = this;

      this.model.fetch().then(function (messages) {
        var array = messages.map(function (item) {
          return item.attributes;
        });
        array.forEach(function (item) {
          var li = document.createElement('li');
          li.innerText = item.name + ":" + (item.words ? item.words : item.content);
          _this.messageList.append(li);
        });
      });
    },
    bindEvents: function bindEvents() {
      var _this2 = this;

      this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        // console.log(this,"指向")
        _this2.saveMessage();
      });
    },
    saveMessage: function saveMessage() {
      var myForm = this.form;
      var name = myForm.querySelector('input[name =name').value;
      var content = myForm.querySelector('input[name=content]').value;
      this.model.save(name, content).then(function (object) {
        var li = document.createElement('li');
        li.innerText = object.attributes.name + ":" + (object.attributes.words ? object.attributes.words : object.attributes.content);
        var messagesList = document.querySelector('#messageList');
        messageList.append(li);
        myForm.querySelector('input[name=content]').value = '';
      });
    }
  };
  controller.init(view, model);
}.call();