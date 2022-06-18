const getTrigger = () => {
  console.log("triggered")
}

function throttle(func, delay){
  let flag = true;
  return function(){
    let context = this;
    let args = arguments;
    
    if(flag ==true){
      setTimeout(()=> flag= true)
      flag = false;
      func.apply(context,args)
    }
  }
}


handleThrottle = throttle(getTrigger,1000)


handleThrottle()
handleThrottle()
handleThrottle()
handleThrottle()
