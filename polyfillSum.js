let arr = [1, 3, 2, 4, 8, 9, 6, 7, 5]
Array.prototype.sum = function () {
  context = this
  let sum = 0
  for (i of context) {
    sum += i
  }
  return sum
}
result = arr.sum()
console.log(result)
