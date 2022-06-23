function all(promises) {
  // write your code here
  const result = [];
  let setledPromises = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => {
      promise
        .then((value) => {
          result[i] = value;
          setledPromises++;
          if (settledPromises == promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}

Promise.all = all;

const promisesFirst = [Promise.resolve(2), Promise.resolve(3)];
Promise.all(promisesFirst).then((values=>console.log(values)));
// output
// [2, 3]

const promisesSecond = [Promise.resolve(1), Promise.reject(10)];
Promise.all(promisesSecond).then((values=>console.log(values)));
// output
// Promise {<rejected>: 10}
