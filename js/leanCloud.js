


var  APP_ID  = "3fcpVOyCiMnw9lHqjIutSpnP-gzGzoHsz";
var  APP_KEY  = "Da75g8J7LWpAgXY2GwGNobKe";
// var SERVER_URL = "http://10.10.106.155:8080/1.1/date"


AV.init({
    appId: "euE2p5cOiI76a2HNil724Qqn-MdYXbMMI",
    appKey: "i0Uci98oEDC5e15OH6lIFhEG",
    // serverURL: SERVER_URL
  });

  
// // 数据api存储接口
// const TestObject = AV.Object.extend('message');
// const testObject = new TestObject();
// testObject.set('words', 'Hello world!');
// testObject.save().then((testObject) => {
//   console.log('第二条数据')
// })

var query = new AV.Query('message');
query.find().then(function(messages){
  // 成功之后的操作
  console.log(messages)
  let array = messages.map(item=>item.attributes)
  array.forEach(item=>{
    let li = document.createElement('li')
    li.innerText = `${item.name}:${item.words?item.words:item.content}`;
    messageList.append(li)
  })
}),function(error){
  // 异常处理
}

let  myForm  = document.querySelector('#messageForm')

myForm.addEventListener('submit',function(e){
  e.preventDefault()

  let name  = myForm.querySelector('input[name =name').value
  let content = myForm.querySelector('input[name=content]').value
  var Message = AV.Object.extend('message');
  var message = new Message();
  message.save({
    'content':content,
    'name':name
  }).then(function(object){
    let li = document.createElement('li')
    li.innerText = `${object.attributes.name}:${object.attributes.words?object.attributes.words:object.attributes.content}`;
    messageList.append(li)
    let content = myForm.querySelector('input[name=content]').value= ''
  })
})