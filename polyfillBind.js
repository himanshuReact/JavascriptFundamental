user1 = {
    firstName: "himanshu",
    secondName: "shekhar",
    printName: function(age,className){
        console.log(`${this.firstName} ${this.secondName} is ${age} years old. He studies in ${className}`)
    }
}

user2 ={
    firstName: "Naman",
    secondName: "Garg"
    
}

Function.prototype.bind1 = function(...args) {
  let obj = this;
  let params = args.slice(1);
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2]);
  }
}


test =user1.printName.bind1(user2,12,"class-8")
test()

//Naman Garg is 12 years old. He studies in class-8
