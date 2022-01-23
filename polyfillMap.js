function add(elem) {
  return elem * elem;
}

Array.prototype.map = function (func) {
  let result = [];
  context = this;
  for (let i in context) {
    result.push(func(context[i]));
  }
  return result;
};

arr = [1, 2, 3, 4, 5, 6];
let result = arr.map(add);
console.log(result);
