//累加器
// var arr = [1,2,3,4];
// var sum = arr.reduce(function(a,b){
//     return a+b;
// },0)
// console.log(sum);

//继承
// 1. function jic(son,father){
//     son.prototype = Object.create(father.prototype);
//     son.prototype.constructor = son;
//     son.prototype.uber = father.prototype;
// }

// function jic(son,father){
//     function Temp(){};
//     Temp.prototype = father.prototype;
//     son.prototype = new Temp();
//     son.prototype.constructor = son;
//     son.prototype.uber = father.prototype;
// } 

//深度克隆
// function clone(obj,deep){
//     if(Array.isArray(obj)){
//         if(deep){
//             var newArr = [];
//             for(i=0;i<obj.length;i++){
//                 newArr.push(clone(obj[i],deep));
//             }
//             return newArr;
//         }else{
//             return obj.slice();
//         }
//     }else if(typeof obj=="object"){
//             var newObj = {};
//             for (prop in obj){
//              if(deep){
//                newObj[prop] = clone(obj[prop],deep);
//             }else{
//               newObj[prop] = obj[prop];
//             }
//         }
//         return newObj;
//     }else{
//         return obj;//递归终止条件
//     }
// }
// var obj = [1,2,3,4,5,{name:'zhang'}]
// var obj1 = clone(obj,true)
// obj1[1] = 8;
// console.log(obj1);
// console.log(obj);

//数组去重
// Array.prototype.unique = function () { 
//     var temp = {}, 
//     arr = [], 
//     len = this.length; 
//     for (var i = 0; i < len; i++){ 
//     if(!temp[this[i]]){ 
//     temp[this[i]] = "abc"; 
//     arr.push(this[i]); 
//     } 
//     } 
//     return arr; 
//    }
// var arr = [2,161,165,454,576,61,324,161,324,454,165,2];
// console.log(arr.unique());

// async function test1 (){
//     return 2;
// }

// async function test (){
//     const result = await test1();
//     console.log(result);
// }
// test();

// var a1 = [1,2,4,47,8,43,48,74,98]
// var a2 = [2,1,4,465,746,42,454,74]
// var a3 = [...new Set(a1)].filter(item=>{return new Set(a2).has(item)})
// console.log(a3);

//手写一个累加器
// Array.prototype.myReduce = function (f, value=0) {
//     for (let i = 0; i < this.length; i++) {
//       value = f(this[i], value)
//     }
//     return value
//   }
  
//   let data = [4,8,15,16,23,42]
  
//   let add = function (a,b){
//     return a+b
//   }
// Array.prototype.myreduce = function(fn,value=0){
//    for(var i=0;i<this.length;i++){
//        value = fn(this[i],value);
//    }
//    return value
// }
// function add(a,b){
//    return a+b;
// }
// var arr = [1,2,3];
// arr.myreduce(arr)
  
//   let sum = data.myReduce(add)
//   console.log(sum ,'----')

//手写set
// class MySet{
//     constructor(iterator=[]){
//        if(!typeof iterator[Symbol.iterator] =="function" ){
//           throw new Error(`===${iterator}不是一个可迭代对象===`);
//        }else{
//            this._data=[];
//            for(const item of iterator){
//                this.add(item)
//            }
//        }
//     }
//     add(data){
//         if(!this.has(data)){
//           this._data.push(data)
//       }
//     }
//     has(data){
//        for(const prop of this._data){
//            if(this.compare(data,prop)){
//               return true;
//            }
//        }
//     }
//     compare(data1,data2){
//          return Object.is(data1,data2);
//     }
// }
// console.log(new MySet([1,1,2,2,3,3]));

//合并两个模块
//  ./src/a.js
//  ./src/index.js

// (function (modules) {
//     var moduleExports = {}; //用于缓存模块的导出结果

//     //require函数相当于是运行一个模块，得到模块导出结果
//     function __webpack_require(moduleId) { //moduleId就是模块的路径
//         if (moduleExports[moduleId]) {
//             //检查是否有缓存
//             return moduleExports[moduleId];
//         }

//         var func = modules[moduleId]; //得到该模块对应的函数
//         var module = {
//             exports: {}
//         }
//         func(module, module.exports, __webpack_require); //运行模块
//         var result = module.exports; //得到模块导出的结果
//         moduleExports[moduleId] = result; //缓存起来
//         return result;
//     }

//     //执行入口模块
//     return __webpack_require("./src/index.js"); //require函数相当于是运行一个模块，得到模块导出结果
// })({ //该对象保存了所有的模块，以及模块对应的代码
//     "./src/a.js": function (module, exports) {
//         eval("console.log(\"module a\")\nmodule.exports = \"a\";\n //# sourceURL=webpack:///./src/a.js")
//     },
//     "./src/index.js": function (module, exports, __webpack_require) {
//         eval("console.log(\"index module\")\nvar a = __webpack_require(\"./src/a.js\")\na.abc();\nconsole.log(a)\n //# sourceURL=webpack:///./src/index.js")
      
//     }
// });

//最长子序列

// var lengthOfLongestSubstring = function(s) {
//     var arr = [];
//     var max = 0;
//     for(var i =0;i<s.length;i++){
//         var index = arr.indexOf(s[i]);
//           if(index!=-1){
//                arr.splice(0,index+1);
//           }
//          arr.push(s[i]);
//          max = Math.max(arr.length,max);
//     }
//     return arr;
//  };

//  console.log(lengthOfLongestSubstring("zzzchnfahfgaeyu9803q7y"));

//三数之和
// var threeSum = function(nums) {
//     var result = [];
//     var repeatSet = new Set();
//     var len = nums.length;
//     for(var i = 0;i < len-2;i++){
//         for(var j = i+1;j < len-1;j++){
//             for(var k = j+1;k < len;k++){
//                 if(nums[i]+nums[j]+nums[k] == 0){
//                     var tmpResult = [nums[i],nums[j],nums[k]];
//                     var tmpSortStr = String(tmpResult.sort());
//                     if(!repeatSet.has(tmpSortStr)){
//                         result.push(tmpResult);
//                         repeatSet.add(tmpSortStr)
//                     }
//                 }
//             }
//         }
//     }
//     return result;
// };
// console.log(threeSum([1,-1,0,2,-2]));

//手写map

// class MyMap {
//     constructor(iterator=[]){
//        if ( typeof iterator[Symbol.iterator]!="function"){
//            throw new Error("iterator不是一个可迭代函数")
//        }else{
//              this._data = [];
//            for(const item of iterator){
//                if(typeof item[Symbol.iterator]!="function"){
//                 throw new Error("iterator不是一个可迭代函数")
//                }else{
//                    var itreat = item[Symbol.iterator]();
//                    var key = itreat.next().value;
//                    var value = itreat.next().value;
//                    this.set(key,value);
//                }
//            }

//        }
//     }

//     set(key,value){
//         if(this.has(key)){
//             //修改
//             var index = this._object(key);
//             index.value = value;
//         }else{
//             //添加
//             this._data.push({
//               key,value
//             });
//         }
//     }

//     _object(key){
//         for(const item of this._data){
//             if(this.isEqual(item.key,key)){
//                return item;
//             }
//         }
//     }

//     has(key){
//       return this._object(key) != undefined;
//     }

//     get(key){
//         for (const item of this._data) {
//             if(item.key==key){
//                 return true;
//             }else{
//                 return false;
//             }
//         }
//     }

//     clear(){
//         this._data.length=0;
//     }

//     isEqual(a,b){
//         return Object.is(a,b);
//     }
// }

//事件委托
// var oul = document.getElementsByTagName("ul")[0];
// for(var i=0;i<100;i++){
//     var oli = document.createElement("li");
//         oli.innerText = i;
//         oul.appendChild(oli);
// }

// oul.onclick=function(e){
//    console.log(e.target.innerText);
// }

// Function.prototype.myApply = function(context = window, args = []) {
//     context = context || window; // 参数默认值并不会排除null，所以重新赋值
//     context.fn = this; // this是调用call的函数
//     const result = context.fn(...args);
//     delete context.fn;
//     return result;
//   }

// Function.prototype.myBind = function(context, ...args) {
//     const _this = this;
//     return function Bind(...newArgs) {
//       // 考虑是否此函数被继承
//       if (this instanceof Bind) {
//         return _this.myApply(this, [...args, ...newArgs])
//       }
//       return _this.myApply(context, [...args, ...newArgs])
//     }
//   }

// //   function Myapp(a,b){
// //       var a= this.a;
// //       var b = this.b
// //   }

// var obj = {
//     x: 81,
// };
 

//    function getX() {
//         return this.x;
//     }

//    console.log(getX.myBind(obj)());

// class MyMapp{
//   constructor(iterator=[]){
//     if(iterator[Symbol.iterator!="function"]){
//         return new Error (`${iterator}不是一个可迭代的`);
//     }else{
//       var _data = [];
//       for(const prop of iterator){
//            if(prop[Symbol.iterator]!="function"){
//             return new Error (`${prop}不是一个可迭代的`);
//            }else{
//               var d =  prop[Symbol.iterator]();
//               var key = d.next().value;
//               var value = d.next().value;
//               this.set(key,value);
//            }
//       }
//     }
//   }

//   set(key,value){
//     if(this.has(key)){
//        var obj = this._object(key);
//        obj.value = value;
//     }else{
//       this._data.push({key,value})
//     }
//   }
   
//   _object(key){
//     for(const item of _data){
//       if(this.compare(item.key,key)){
//            return item;
//       }

//     }
//   }

//   has(key){
//      return this._object(key)!=undefined;
//   }
//   compare(a,b){
//     return Object.is(a,b);
//   }
// }

// Function.prototype.myCall = function(context,...agrs){
//   var context = context||window;
//   context.fn = this;
//   var result = context.fn(...agrs)
//   delete context.fn;
//   return result;
// }

// Function.prototype.myApply = function(context = window, args = []) {
//    context = context || window; // 参数默认值并不会排除null，所以重新赋值
//    context.fn = this; // this是调用call的函数
//    const result = context.fn(...args);
//    delete context.fn;
//    return result;
//  }

// Function.prototype.myBind = function(context,args=[]){
//    var context = context||window;
//      context.fn =this; 
//      var result = context.fn(...args);
//      delete context.fn;
//      return result;
// }

// var obj = {
//   b:5
// }
// function a(){
//   return this.b
// }
// console.log(a.myBind(obj));

// function set(i){
//     var time = setTimeout(()=>{
//         console.log(i);
//          i-=1
//        if(i==0){
//          clearTimeout(time);
//          return;
//        }
//        set(i);
//     },1000)
// } 
// set(5);

// const Event = (function () {
//   const clientList = {}


//订阅发布者模式
// var Event = (function(){
//     var eventList = {};
//     const listen = (key,fn)=>{
//         if(!eventList[key]){
//           eventList[key] = [];
//         }
//         eventList[key].push(fn);
//     }

//     const trigger = (...agrs)=>{
//         var key = agrs.shift();
//         var fn = eventList[key]
//         if(!fn||fn.length==0){
//           return;
//         }
//         fn.forEach(function(val,index){
//           val.apply(this,agrs);
//         })
//     }
//     const remove = (key,fn)=>{
//         var arr = eventList[key];
//         var index = arr.indexOf(fn);
//         if(index!=-1){
//           arr.splice(index,1);
//         } 

//     }
//     return {
//       listen,
//       trigger,
//       remove
//     }
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

// Event.remove('message', onMessage1)
// Event.trigger('message')





// function clone(obj,deep){
//     if(Array.isArray(obj)){
//          if(deep){
//             var newarr = [];
//             for(var i=0;i<obj.length;i++){
//                 newarr.push(clone(obj[i],deep)); 
//             }
//             return newarr;
//          } else{
//             return obj.slice();
//          }
//     }else if(typeof obj =="object"){
//         var newobj = {};
//         for( prop in obj){
//              if(deep){
//                 newobj[prop] = clone(obj[prop],deep);
//             }else{
//                 newobj[prop] = obj[prop];
//             }
//         }
//         return newobj
//     }else{
//         return obj;
//     }
     
// }
// var obj = [1,2,3,4,5,{name:'zhang'}]
// var obj1 = clone(obj,true)
// obj1[1] = 8;
// console.log(obj1);
// console.log(obj);


// 输出DOM结构
// var str = '';
// var el = document.documentElement;
// var empty;
// var level = 0;
 
// function output(el, level) {
//     if (el) {
//         if (level > 0) {
//             empty = new Array(level).fill(' ');
//             str += empty.join('');
//         }
//         str += el.tagName;
//         str += '\n'; // 换行
//     }
//     if (el.children) {
//         for(let i = 0; i < el.children.length; i++) {
//             output(el.children[i], level+1);
//         }
//     }
// }
 
// output(el, level);
// console.log(str)


// function flat(arr){
//    var result = [];
//    for(var i=0;i<arr.length;i++){
//        if(Array.isArray(arr[i])){
//            var result = result.concat(flat(arr[i]));
   
//        }else{
//            result.push(arr[i]);
//        }
//    }
//    return result;
// }
// console.log(flat([1,2,3,4,[5,6,[7,8]],[9]] ))
// console.log([1,2,3,4,[5,6,[7,8]],[9]].flat().flat());

//手写promise

// class Promsie {
//     constructor(fn) {
//         //三个状态
//         this.status = 'pending',
//         this.resolve = undefined;
//         this.reject = undefined;
//         let resolve = value => {
//             if (this.status === 'pending') {
//                 this.status = 'resolved';
//                 this.resolve = value;
//             }
//         };
//         let reject = value => {
//             if (this.status === 'pending') {
//                 this.status = 'rejected';
//                 this.reject = value;
//             }
//         }
//         try {
//             fn(resolve, reject)
//         } catch (e) {
//             reject(e)
//         }
//     }
//     then(onResolved, onRejected) {
//         switch (this.status) {
//             case 'resolved': onResolved(this.resolve); break;
//             case 'rejected': onRejected(this.resolve); break;
//             default:
//         }
//     }

// }

//手写promise.all

// function promiseAll(promises) {
//     if (!isArray(promises)) {
//         throw new Error("promises must be an array")
//     }
//     return new Promise(function (resolve, reject) {

//         let promsieNum = promises.length;
//         let resolvedCount = 0;
//         let resolveValues = new array(promsieNum);
//         for (let i = 0; i < promsieNum; i++) {
//             Promise.resolve(promises[i].then(function (value) {
//                 resolveValues[i] = value;
//                 resolvedCount++;
//                 if (resolvedCount === promsieNum) {
//                     return resolve(resolveValues)
//                 }
//             }, function (reason) {
//                 return reject(reason);
//             }))

//         }
//     })
// }

//手写promise.race

// function promiseRace(promises) {
//     if (!isArray(promises)) {
//         throw new Error("promises must be an array")
//     }
//     return new Promise(function (resolve, reject) {
//         promises.forEach(p =>
//             Promise.resolve(p).then(data => {
//                 resolve(data)
//             }, err => {
//                 reject(err)
//             })
//         )
//     })
// }

//手写bind
// //要让所有函数都可以调用myBind,就要写在原型上
// Function.prototype.myBind = function (target) {
//    //target改变返回函数执行的this指向
//    var self = this;
//    var args = [].slice.call(arguments, 1);
//    var tmp = function () { };
//    var f = function () {
//        //如果是new出来的，则新函数的constructor还是旧函数，
//        var arg = [].slice.call(arguments, 0);
//        //执行的是A函数 self  this new tmp() this在原型链上能否找到原型
//        return self.apply(this instanceof tmp ? this : (target || window), args.concat(arg));//根据参数改变this的指向
//    }
//    tmp.prototype = self.prototype;
//    f.prototype = new tmp();
//    return f;
// }


// Function.prototype.myBind = function(target){
//      var self = this;
//      var args = [].slice.call(arguments,1);
//      var temp = function(){};
//      var f = function(){
//         var _args = [].slice.call(arguments,0);
//         return self.apply(this instanceof temp ?this:(target||window),args.concat(_args));
//      }
//      temp.prototype = self.prototype;
//      f.prototype = new temp;
//      return f;
// }

//  function Node(name,value,age){
//    return name+age+value;
    
//  }
//  console.log(Node.myBind(this,'zhang',22,'chunjie')());


// function fn(){ 
//    var x = true; 
//    return function(){
//       console.log(x?1:2);
//       x=!x;
//    } 
// }  
// var a = fn();
// a();
// a();
// a();
