const MyPromise = (() => {
    const PENDING = "pending",
        RESOLVED = "resolved",
        REJECTED = "rejected",
        PromiveValue = Symbol("PromiseValue"), //状态数据
        PromiseStatus = Symbol("PromiseStatus"),
        thenables = Symbol("thenables"), //thenable=[]
        catchables = Symbol("catchbles"), //catchables=[]
 
         //下面是抽离的通用函数
        changeStatus = Symbol("changeStatus"), //当前状态
        settleHandle = Symbol("settleHandle"), //then或者catch后续处理的通用函数
        linkPromise = Symbol("linkPromise"); //创建串联的Promise(处理then返回的也是一个promise对象)
 
    return class MyPromise {
 
        /**
         * 改变当前Promise的状态
         * @param {*} newStatus
         * @param {*} newValue
         * @param {*} queue 执行的作业队列
         */
        [changeStatus](newStatus, newValue, queue) {
            // PENDING如果加this的话，PENDING为undefined后面的then调用就会this指向错误从而不执行
            if (this[PromiseStatus] !== PENDING) {
                //状态无法变更
                return;
            }
 
            this[PromiseStatus] = newStatus;
            this[PromiveValue] = newValue;
            //执行相应队列中的函数
            queue.forEach(handler => handler(newValue));
        }
 
        /**
         *
         * @param {*} executor 未决阶段（pending状态）下的处理函数
         */
        constructor(executor) {
            this[PromiseStatus] = PENDING;
            this[PromiveValue] = undefined;
            this[thenables] = []; //后续处理函数的数组 -> resolved
            this[catchables] = []; //后续处理函数的数组 -> rejected
             
            //new mypromise时传的resolve参数
            const resolve = data => {
                this[changeStatus](RESOLVED, data, this[thenables]);
            }
             
             //new mypromise时传的reject参数
            const reject = reason => {
                this[changeStatus](REJECTED, reason, this[catchables]);
            }
 
            //兼容直接报错的写法
            try {
                executor(resolve, reject)
            } catch (err) {
                reject(err);
            }
        }
 
        /**
         * 处理 then,catch的后续处理函数
         * @param {*} handler 后续处理函数
         * @param {*} immediatelyStatus 需要立即执行的状态
         * @param {*} queue 作业队列
         */
        [settleHandle](handler, immediatelyStatus, queue) {
            //兼容resolve之后调用catch函数的情况
            if (typeof handler !== "function") {
                return;
            }
            if (this[PromiseStatus] === immediatelyStatus) {
                //直接运行
                setTimeout(() => {
                    handler(this[PromiveValue]);
                }, 0);
            } else {
                //多次调用放在queue的队列中
                queue.push(handler);
            }
        }
 
        //解决promise函数的串联问题
        [linkPromise](thenalbe, catchable) {
            //
            function exec(data, handler, resolve, reject) {
                try {
                    const result = handler(data); //得到当前Promise的返回结果
                    //如果串联调用用的是promise对象的话就要特殊处理，否则返回的是promise对象而promise对象的不是结果
                    if (result instanceof MyPromise) {
                        result.then(d => {
                            resolve(d)
                        }, err => {
                            reject(err);
                        })
                    } else {
                      //对串联的处理
                        resolve(result);
                    }
                } catch (err) {
                    reject(err);
                }
            }
            return new MyPromise((resolve, reject) => {
                this[settleHandle](data => {
                    exec(data, thenalbe, resolve, reject);
                }, RESOLVED, this[thenables])
 
                this[settleHandle](reason => {
                    exec(reason, catchable, resolve, reject);
                }, REJECTED, this[catchables])
            })
        }
 
 
        //then回调函数
        then(thenable, catchable) {
            return this[linkPromise](thenable, catchable);
        }
        //catch回调函数
        catch (catchable) {
            return this[linkPromise](undefined, catchable);
        }
    }
})();
 
 
 
//测试代码
console.log("start");
var a = new MyPromise((resolve, reject) => {
    console.log(1);
    // resolve(2);
    reject(3);
});
 
a.then((resolve,reject) => {
    console.log(reject);
    return 4
},(err)=>{
    console.log(err);
    return 5
}).then((data) => {
    console.log(data);
})
 
a.then((resolve,reject) => {
    console.log(resolve,reject);
 
},(err)=>{
    setTimeout(()=>{
        console.log(err);
    },1000)
})
//有错promise先执行catch后执行串联，但是自己写的现在串联，再执行catch？？？
// a.catch((reject) => {
//     console.log("错误" + reject);
// })
 
console.log("end");