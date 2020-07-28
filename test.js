// var c = (a,b)=>{
//   console.log(this,"===",arguments);
// }
// c(1,2);
// function foo() {
//   setTimeout(() => {
//     console.log('id:', this.id);
//   }, 100);
// }

// var id = 21;
// foo();

// foo.call({ id: 42 });
// id: 42
// let a = [1,3,5];
// let b = [2,4,6,7];

// function merge(a,b){
//   var arr = [];
//   if(a==0||b==0||a.length==0||b.length==0)return[];
//   for(var i =0;i<a.length;i++){
//         arr.push(a[i]);
//   }
//   for(var j =0;j<b.length;j++){
//     arr.push(b[j]);
// }
// console.log(arr.sort());
// }
// merge(a,b)
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//   console.log(i);
//   }, 5);
//   }

// var name = 'bytedance';
// function A() {
// this.name = '123';
// }
// A.prototype.getA = function () {
// console.log("====",this);
// return this.name + 1;
// }
// let a = new A();
// let funcA = a.getA;
// funcA()
// a.getA()

// ==== Object [global] {
//   global: [Circular],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(util.promisify.custom)]: [Function]
//   }
// }
// ==== A { name: '123' }

// function text(){
//   var a = 10+Math.floor(Math.random()*290)
//   return a;
// }
// console.log(text());

//订阅者模式
//   const listen = function (key, fn) {
//       if ( !clientList[key] ) {
//           clientList[key] = []
//       }
//       clientList[key].push( fn )
//   }

//   const trigger= (...rest) => {
//     let key=rest.shift(),
//         fns=clientList[key];
//     if(!fns||fns.length===0){
//         return false;
//     }
//     fns.forEach(function (val,index) {
//         val.apply(this,rest);
//     });
// }
//   const remove = function (key, fn) {
//       const fns = clientList[key]
//       if (!fns || fns.length === 0) {
//           return
//       }
//       const index = fns.indexOf(fn)
//       if (index !== -1) {
//           fns.splice(index, 1)
//       }
//   }

//   return {
//       listen,
//       trigger,
//       remove
//   }
// })()
// function onMessage1() {
//   console.log('message 1')
// }
// function onMessage2() {
//   console.log('message 2')
// }

// Event.listen('message', onMessage1)
// Event.listen('message', onMessage2)

// Event.trigger('message')
// // message 1
// // message 2

// Event.remove('message', onMessage1)
// Event.trigger('message')
// // message 2

// function findMaxDuplicateChar(str) {
// let str1 = str.replace(/\s*/g,"");
// let maxChar = '';
// let maxValue = 1;
// let obj={};
// 补全代码.....

//字符串去重
//  for(var i=0;i<str1.length;i++){
//      if(!obj[str1[i]]){
//         obj[str1[i]]="abc"
//         arr.push(str1[i]);
//      }
// }

// for(var i=0;i<str1.length;i++){
//     var item = str1.charAt(i);
//    if(obj[item]){
//        obj[item]++;
//    }else{
//        obj[item] = 1;
//    }
// }

// let max = 0;
// for(prop in obj){
//     if(max<obj[prop]){
//         max = obj[prop];
//         maxValue = max;
//        maxChar = prop;
//     }
// }

// return {
// maxChar,
// maxValue,
// };
// }
// const str = 'this is a fe test at toutiao on September'

// console.log(findMaxDuplicateChar(str)); // output: { maxChar: "t", maxValue:7 }

// var restoreIpAddresses = function(s) {
//     let res = [];
//     if(s.length<4 || s.length>12) return res;//判断边界
//     dfs(res,s,"",0);
//     return res;

//     function dfs(res,s,sub,index){
//         if(index == 4 && s.length == 0) res.push(sub.substring(1));

//         if(index == 4 || s.length == 0) return;

//         dfs(res,s.substring(1),sub+"."+s.substring(0,1),index+1);//一位数

//         if(s.charAt(0) !='0' && s.length > 1){//两位数
//             dfs(res,s.substring(2),sub + "." + s.substring(0,2),index+1);

//             if(s.length > 2 && parseInt(s.substring(0,3)) <= 255){//三位数
//                 dfs(res,s.substring(3),sub+"."+s.substring(0,3),index+1);
//             }
//         }
//     }
// };
// console.log(restoreIpAddresses("25525511135"));

// class mypromise{
//     constructor(fn){
//        this.state = "pending";
//        this.resolve = undefined;
//        this.reject = undefined;
//        let resolved = (value)=>{
//            if(this.state == "pending"){
//             this.state = "resolved";
//             this.resolve = value;
//            }
//        }
//        let rejected = (value)=>{
//         if(this.state == "pending"){
//           this.state = "rejected";
//           this.resolve = value;
//         }
//       }
//       try{
//           fn(resolved,rejected)
//       }catch(e){
//           rejected(e);
//       }
//     }

//     then(onResolved,onRejected){
//         switch (this.state){
//             case "resolved":
//                 onResolved(this.resolve);
//                 break;
//             case "rejected":
//                 onRejected(this.reject);
//                 break;
//             default:
//         }
//     }
// }

// var s = new mypromise((res,rej)=>{
//      res(1)
// })
// console.log(s.then((value)=>{
//    console.log(value);
// }));


//promise.race

const promises = [
    Promise.resolve('a'),
    Promise.resolve('b'),
    // Promise.reject('ERROR'),
    Promise.resolve('c'),
    Promise.resolve('d'),
  ];

//   function promiseRace(promises) {
//     if (!Array.isArray(promises)) {
//         throw new Error("promises must be an array")
//     }
//     return new Promise(function (resolve, reject) {
//         promises.forEach(p =>
//            p.then(data => {
//                 resolve(data)
//             }, err => {
//                 reject(err)
//             })
//         )
//     })
// }
// console.log(promiseRace(promises).then((data)=>{console.log(data)}));


//    Promise.all(promises).then((a)=>{
//        console.log(a);
//    })
//    .catch((err) => {
//         console.log(err);
//       }
//     );

//promise.all

// function promiseAll(promises) {
//     if (!Array.isArray(promises)) {
//         throw new Error("promises must be an array")
//     }
//     return new Promise(function (resolve, reject) {

//         let promsieNum = promises.length;
//         let resolvedCount = 0;
//         let resolveValues = new Array(promsieNum);
//         for (let i = 0; i < promsieNum; i++) {
//             promises[i].then(function (value) {
//                 resolveValues[i] = value;
//                 resolvedCount++;
//                 if (resolvedCount === promsieNum) {
//                     return resolve(resolveValues)
//                 }
//             }, function (reason) {
//                 return reject(reason);
//             })

//         }
//     })
// }
// console.log(promiseAll(promises).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//    console.log(err);
// }));

// function promiseAll (promises){
//     if(!Array.isArray(promises)){
//         return new Error("promises is not an array");
//     }
//     return new Promise((resolve,reject)=>{
//          let len = promises.length;
//          let newArr = new Array(len);
//          let index = 0;
//          for(let i=0;i<len;i++){
//              promises[i].then((data)=>{
//                  newArr[i] = data;
//                  index++;
//                  if(index==len){
//                      return resolve(newArr);
//                  }
//              },(err)=>{
//                 return reject(err);
//              })
//          }
//     })
// }

// console.log(promiseAll (promises).then((data)=>{
//    console.log(data);
// }).catch((err)=>{console.log(err)}));


//数字每三位加一个，
// var obj = {0:'hello',1:'world',2:'zhang',length:3};
// console.log(Array.prototype.slice.call(obj,1));//["world",'zhang']

// var num = 1245343241;
// console.log(num.toLocaleString());

// function change(num){
//   var temp = [];
//   var newnum = num.toString().split("");
//   var newnum1 = newnum.reverse();
//   for(var i=0;i<newnum1.length;i++){
//       if(i%3==0&&i!=0){
//          temp.push(",");
//       }
//       temp.push(newnum1[i]);
//   }
//    var temp1 = temp.reverse();
//   return temp1.join("");
// }
// console.log(change(num));

