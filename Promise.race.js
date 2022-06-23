function race(promises){
    return new Promise((resolve,reject)=>{
        promises.forEach((promise,index)=>{
            Promise.resolve(promise).then(resolve).catch(reject)
        })
    })
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 300, 'three');
});

Promise.race = race;
Promise.race([promise1, promise2,promise3]).then((value) => {
  console.log(value);
  
});

// output
// two
