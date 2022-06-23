// https://learnersbucket.com/examples/array/how-to-flat-an-array-in-javascript/

let arr = [[[1, [1.1]], 2, 3], [4, 5]]
let result = []
const flatArr = (arr)=>{
    for(let i=0;i< arr.length;i++){
        if(Array.isArray(arr[i])){
            flatArr(arr[i])
        } else{
            result.push(arr[i])
        }
    }
    return result
}
console.log(flatArr(arr))
//[1, 1.1, 2, 3, 4, 5]
