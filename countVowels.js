const countVowels = (str)=>{
    let vowels = ['a','e','i','o','u']
    let filtered = str.split("").filter(elem=> vowels.includes(elem))
    return(filtered.length)
}
let str = "Polyfill of Vowels"
console.log(countVowels(str))
