let arr = [1,2,3,4,5]

Array.prototype.reduce = function(...args){

    let context = this;
    let func = args[0]
    let acc = args[1] || 0;
 

    for(i of context){
        acc = func(i,acc)
        
    }
    return acc
}

arr.reduce((a,b)=>a+b,100)
// 115
