function sum(a,b,c){
    return a+b+c
}

function curry(func){
    return function curriedFunc(...args){
        if(args.length>=func.length){
            return func(...args)
        } else{
            return function(...next){
                return curriedFunc(...args,...next)
            }
            
        }
    }
}

const totalSum = curry(sum)
console.log(totalSum(1)(2)(3))
console.log(totalSum(1,2)(3))
console.log(totalSum(1)(2,3))
console.log(totalSum(1,2,3))
