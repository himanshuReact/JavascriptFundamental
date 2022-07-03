function add(a){
	return function(b){
  	if(!b){
    	return a
    }
    else{
    	return add(a+b)
    }
    
  }
}

console.log(add(4)(5)(6)())
// Output 15
