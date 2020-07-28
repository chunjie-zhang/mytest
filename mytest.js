// Array.prototype.myReaduce =function(fn,value=0){
//      for(var i=0;i<this.length;i++){
//         value = fn(this[i],value);
//      }
//      return value;
// }
// var arr = [1,2,3];
// function callback(a,b){
//     return a+b;
// }
// console.log(arr.myReaduce(callback));

// function instance (a,b){
//     var left = a.__proto__;
//     var right = b.prototype;

//     while(true){
//         if(left == null){
//             return false;
//         }
//         if(right == left){
//             return true;
//         }
//         left = left.__proto__;
//     }
// }

// function jic(son,father){
//     function Temp(){}
//      father.prototype = temp.prototype;
//      son.prototype = Temp();
//      son.prototype.constructor = son;
//      son.prototype.uber = father.prototype; 
// }

// function clone(obj,deep){
//      if(Array.isArray(obj)){
//          if(deep){
//              var newArr = [];
//              for(var i=0;i<obj.length;i++){
//                  newArr.push(clone(obj[i],deep))
//              }
//              return newArr
//          }else{
//             return obj.slice();
//          }
//      }else if(typeof obj =="object"){
//          var newobj = {};
//              for( prop in obj){
//                 if(deep){
//                  newobj[prop] = clone(obj[prop],deep);
//                 }else{
//                     newobj[prop] = obj[prop];
//                 }
//              }
//              return newobj;
//          }else{
//              return obj;
//          }
// }
// var obj ={a:1,b:2,c:{d:1,e:2}}
// var obj1 = clone(obj,true)
// obj.c.d=5
// console.log(obj1);
// console.log(obj);

// Array.prototype.unique = function(){
//      var temp = {};
//      var arr = [];
//      for(var i=0;i<this.length;i++){
//         if(!temp[this[i]]){
//             temp[this[i]] = "zhang";
//             arr.push(this[i]);
//         }
//      }
//      return arr;
// }
// var arr = [1,1,2,2,3,4,5,6,3,2,1,6,5,4,5,6,4];
// console.log(arr.unique());

// class mySet{
//    constructor(iterator){
//        if( !typeof iterator[Symbol.iterator] =="function"){
//            return new Error(`${iterator}不是一个可迭代的`);
//        }else{
//            this._data = [];
//            for(const item of iterator){
//                this.add(item);
//            }
//        }
//    }

//    add(item){
//      if(!this.has(item)){
//          this._data.push(item);
//      }
//    }

//    has(item){
//        for(const prop of this._data){
//            if(this.compare(prop,item)){
//              return true;
//            }
//        }
//    }
//    compare(a,b){
//       return Object.is(a,b);
//    }
// }

// var arr = [1,2,2,3,3]
// var arr1 =new mySet(arr);
// console.log(arr1);

// class mymap{
//     constructor(iterator){
//        if(!typeof iterator[Symbol.iterator]=="function"){
//         return new Error(`${iterator}不是可迭代的`);
//        }else{
//         this._data=[];
//            for(const item of iterator){
//             if(!typeof item[Symbol.iterator]=="function"){
//                 return new Error(`${iterator}不是可迭代的`);
//            }else{
//                   var data = item[Symbol.iterator]();
//                   var key = data.next().value;
//                   var value = data.next().value;
//                   this.set(key,value);
//               }
//            }
//        }
//   }

//   set(key,value){
//       if(this.has(key)){
//           var item = this._object(key);
//           item.value = value

//       }else{
//           this._data.push({
//               key,value
//           });
//       }
//   }

//   _object(key1){
//     for(const item of this._data){
//         if(this.compare(item.key,key1)){
//             return item;
//         }
//     }
//   }

//   has(key1){
//      return this._object(key1) !=undefined;
//   }

//   compare(a,b){
//       return Object.is(a,b);
//   }
// }
// var d = new mymap([[1,2],[3,4],[5,6]]);
// console.log(d);


//promise面试题

// async function a1(){
//     console.log("al start");
//     await a2();
//     console.log("a1 end");
// }

// async function a2(){
//      console.log("a2");
// }

// console.log("script start");

// setTimeout(()=>{
//     console.log("setTimeout");
// },0)

// Promise.resolve().then(()=>{
//     console.log("promise1");
// })
// a1();

// let promise2 = new Promise((resolve)=>{
//     resolve("promise2.then");
//     console.log('promise2');
// })

// promise2.then((res)=>{
//    console.log(res);
//    Promise.resolve().then(()=>{
//        console.log('promise3');
//    })
// })

// console.log("script end");


// let arr = [8,15,6,3,20,25]
// arr.sort(function(a,b){
//     return b-a;
// });
// console.log(arr[0]);

// function Node(value){
//    this.value= value;
//    this.left = null;
//    this.right = null;
// }

// var a = new Node(1);
// var b = new Node(2);
// var c = new Node(3);
// var d = new Node(5);
// var e = new Node(8);
// a.left = b;
// a.right = c;
// b.left= d;
// b.right = e;

// function bianli(root){
//     if(root==null){
//         return;
//     }
//     console.log(root.value);
//     bianli(root.left);
//     bianli(root.right);
// }
// bianli(a);


//快排的真正方法
// var arr = [1,24,3574,874,6574,687,87,654]
// const quickSort = (array) => {
//     const sort = (arr, left = 0, right = arr.length - 1) => {
//      if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
//       return
//      }
//     let i = left
//     let j = right
//     const baseVal = arr[j] // 取无序数组最后一个数为基准值
//     while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
//      while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
//       i++
//      }
//      arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
//      while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
//       j--
//     }
//      arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
//     }
//     arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
//     sort(arr, left, j-1) // 将左边的无序数组重复上面的操作
//     sort(arr, j+1, right) // 将右边的无序数组重复上面的操作
//     }
//     const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
//     sort(newArr)
//     return newArr
//    }
   
//    console.log(quickSort(arr));


// function quick (arr){
//      function sort(arr,left=0,right=arr.length-1){
//            var i = left;
//            var j = right;
//            var base = arr[j];
//            if(i>=j){
//                return;
//            }
//            while(i<j){
//               while(i<j&&arr[i]<=base){
//                  i++;
//               }
//               arr[j] = arr[i];
//               while(i<j&&arr[j]>=base){
//                     j--;
//               }
//               arr[i] = arr[j];
//            }
//            arr[j] = base;
//            sort(arr,left,j-1);
//            sort(arr,j+1,right);
//      }
//      sort(arr);
//      return arr;
// }
//    console.log(quick(arr));
