Array.prototype.forEach= function(func){
    let context = this;
    for(let i in context){
        func(context[i])
    }
}


function power(elem){
    console.log(elem**2)
}

arr.forEach(power)
