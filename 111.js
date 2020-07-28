// function jc(son,father){
//     var Temp = function(){};
//     Temp.prototype = father.prototype;
//     son.prototype = new Temp();
//     son.prototype.constructor = son;
//     son.prototype.uber = father.prototype;

// }

// function clone(obj,deep){
//     if(Array.isArray(obj)){
//         if(deep){
//             var newArr = [];
//             for(var i=0;i<obj.length;i++){
//                 newArr.push(clone(obj[i],deep));
//             }
//         }else{
//             return obj.slice();
//         }
//         return newArr;
//     }else if(typeof obj =="object"){
//         var newobj = {};
//         for( prop in obj){
//             if(deep){
//               newobj[prop] = clone(obj[prop],deep);
//             }else{
//                 newobj[prop] = obj[prop]; 
//             }
//         }
//     }else{
//         return obj;
//     }
// }

// Array.prototype.unique = function(){
//     var arr = [];
//     var obj = {};
//     for(var i=0;i<this.length;i++){
//         if(!obj[this[i]]){
//             obj[this[i]] = "zhang";
//             arr.push(this[i]);
//         }
//     }
//     return arr;
// }

// Array.prototype.reduce = function(fn,value=0){
//      for(var i=0;i<this.length;i++){
//          value = fn(this[i],value);
//      }
//      return value;
// }

// function fn(a,b){
//     return a+b;
// }
// var arr = [1,234,354,35];
// var a = arr.reduce(fn);
// console.log(a);

// Function.prototype.myCall = function(context,...args){
//      var context = context ||window;
//      context.fn = this;
//      var result = context.fn(...args);
//      delete context.fn;
//      return result;
// }

// Function.prototype.myApply = function(context,args=[]){
//     var context = context||window;
//     context.fn = this;
//     var result =  context.fn(...args);
//     delete context.fn;
//     return result;
// }

// Function.prototype.myBind = function(target){
//     var self = this;
//     var args = [].slice.call(arguments,1);
//     var Temp = function(){};
//     var a = ()=>{
//         var _args = [].slice.call(arguments,0);
//         return self.apply(this instanceof Temp ?this:(target||window),args.concat(_args));
//     }
//     Temp.prototype = self.prototype;
//     a.prototype  =new Temp();
//     return a;
// }

// function Node(){
//    return this.name+this.age
// }

// var obj = {
//     name:6,
//     age:7
// }
// function a (name,age){
//     return Node.myBind(obj)();
// }
// console.log(a(3,4));

// class myset{
//     constructor(iterator=[]){
//        if( typeof iterator[Symbol.iterator] !="function" ){
//               return new Error(`${iterator}不是一个可迭代的`);
//        }else{
//            this._data = [];
//            for(const prop of iterator){
//                 this.add(prop);
//            }
//        }
//     }

//     add(data){
//        if(!this.has(data)){
//             this._data.push(data);
//        }
//     }

//     has(data){
//        for(const item of this._data ){
//            if(this.compare(item,data)){
//                return true;
//            }
//        }
//     }

//     compare(a,b){
//       return Object.is(a,b);
//     }
// }

// var arr = [1,2,3,2,3];
// console.log(new myset(arr));

// class mymap{
//     constructor(iterator = []){
//         if(typeof iterator[Symbol.iterator] !="function"){
//             return new Error(`${iterator}不是一个可迭代的`);
//         }else{
//             this._data = [];
//             for(const prop of iterator){
//                   if(typeof prop[Symbol.iterator]!="function"){
//                     return new Error(`${prop}不是一个可迭代的`);
//                   }else{
//                       var iter = prop[Symbol.iterator]();
//                       var key = iter.next().value;
//                       var value = iter.next().value;
//                        this.set(key,value);
//                   }
//             }
//         }
//     }

//     set(key,value){
//        if(this.has(key)){
//            var a = this._change(key)
//            a.value = value;
//        }else{
//            this._data.push({
//                key,value
//            });
//        }
//     }

//     _change(key){
//        for(const prop of this._data){
//            if(this.compare(key,prop[key])){
//                 return prop;
//            }
//        }
//     }

//     has(key){
//        return this._change(key) != undefined;
//     }

//     compare(a,b){
//         return Object.is(a,b);

//     }
// }

// console.log(new mymap([[1,2],[3,4]]));

// class mypromise{
//     constructor(fn){
//          this.status = "pending";
//         this.resolve = undefined;
//         this.reject = undefined;
//         var resolved = (value)=>{
//             if(this.status =="pending"){
//                 this.status = "resolved";
//                 this.resolve = value;
//             }
//         }
//         var rejected = (value)=>{
//             if(this.status = "pending"){
//                 this.status = "rejected";
//                 this.reject = value;
//             }
//         }

//         try{
//             fn(resolved,rejected);
//         }catch(e){
//             rejected(e);
//         }
//     }

//     then(onresolve,onreject){
//         switch (this.status){
//             case "resolved":
//                 onresolve(this.resolve);
//                 break;
//             case "rejected":
//                 onreject(this.reject);
//                 break;
//         }
//     }
// }

//    var a = new mypromise((resolve,reject)=>{
//        throw 2;
//    });
//    a.then((data)=>{
//        console.log(data);
//    },(data)=>{
//        console.log(data);
//    })

// function promiseAll(promises=[]){
//     if(!Array.isArray(promises)){
//         return new Error("promises is not an array");
//     }
//     return new Promise((resolve,reject)=>{
//         var len = promises.length
//         var arr = [];
//         var num = 0;
//         for(var i=0;i<len;i++){
//              promises[i].then((data)=>{
//                 arr.push(data);
//                 num++
//                 if(num ==len){
//                    return resolve(arr);
//                 }
//              },(err)=>{
//                 return reject(err);
//              })
//         }
//     })   
// }
// var promises = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3), 
//     Promise.resolve(4),
//     Promise.resolve(5)
// ]

// console.log(promiseAll(promises).then((data)=>{
//    console.log(data);
// }).catch((err)=>{
//    console.log(err);
// }));

// function promiseRace(promises) {
//     if (!Array.isArray(promises)) {
//         return new Error("promises is not an array");
//     }
//     return new Promise((resolve,reject)=>{
//         promises.forEach((item)=>{
//              item.then((data)=>{
//                  resolve(data);
//              },(err)=>{
//                 reject(err);
//              })
//         })
//     });
// }
// console.log(promiseRace(promises).then((data)=>{
//    console.log(data);
// }).catch((err)=>{
//    console.log(err);
// }));

// function quicksort(arr){
//     if(arr.length==0||arr==null){
//           return [];
//     }
//     var left = [];
//     var right = [];
//     var leader = arr[0];
//     for(var i=1;i<arr.length;i++){
//         if(arr[i]<leader){
//            left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     left = quicksort(left)
//     right = quicksort(right);
//     left.push(leader);
//     return left.concat(right);
// }
// console.log(quicksort([1,23,5,654,6574,31,321]));

// function quicksort(){

// }

// function quick(arr, left = 0, right = arr.length - 1) {
// 	var list = [[left, right]]; // 模拟栈
// 	while(list.length > 0) {
// 		var now = list.pop()
// 		if (now[0] >= now[1]) continue;
// 		var i = now[0], j = now[1], flag = i;
// 		while(i < j) {
// 			while(arr[j] >= arr[flag] && j > flag) j --;
// 			if (i >= j) break;
// 			while(arr[i] <= arr[flag] && i < j) i ++;
// 			var temp = arr[flag];
// 			arr[flag] = arr[j];
// 			arr[j] = arr[i];
// 			arr[i] = temp;
// 			flag = i	
// 		}
// 		list.push([now[0], flag - 1]);
// 		list.push([flag + 1, now[1]]);
//     }
//     return arr;
// }
// console.log(quick([2315,43,413,54,6545,745,4]));

// function quicksort(arr,left=0,right=arr.length-1){
//     var list = [[left,right]];
//     while(list.length>0){
//         var now = list.pop();
//         if(now[0]>=now[1])continue;
//         var i = now[0];
//         var j  =now[1];
//         var flag  = i;
//         while(i<j){
//            while(arr[j]>=arr[flag]&&j>flag)j--;
//            if(i>=j)break;
//            while(arr[i]<=arr[flag]&&i<j)i++;
//            var temp  =arr[flag];
//            arr[flag]  =arr[j];
//            arr[j] = arr[i];
//            arr[i] = temp;
//            flag = i;
//         }
//         list.push([now[0],flag-1]);
//         list.push([flag+1,now[1]]);
//     }
//     return arr;
// }

// console.log(quicksort([235, 43, 413, 54, 6545, 745, 4]));;

 class mypromise{
     constructor(fn){
         this.status = "pending"
         this.resolve = null;
         this.reject = null;
         let resolved = (data)=>{
             
         } 

     }
 }