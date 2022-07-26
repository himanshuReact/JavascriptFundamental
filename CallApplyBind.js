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


user1.printName.call(user2,6,"class-4")

user1.printName.apply(user2,[10,"class-6"])

test =user1.printName.bind(user2,12,"class-8")
test()

// Naman Garg is 6 years old. He studies in class-4
// Naman Garg is 10 years old. He studies in class-6
// Naman Garg is 12 years old. He studies in class-8
