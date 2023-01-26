function getShot(shot){
    console.log(`lets take the shot ${shot}`)
}

function throttle(func,delay){
    let flag=true;
    
    return function(){
      
        let context= this;
        let args = arguments
        if(flag){
                flag=false
                setTimeout(()=>{
                func.apply(context,args)
                flag=true
                },delay)
        }
    }
}

const handleThrottle = throttle(getShot,1000)
handleThrottle("1")
handleThrottle("2")
handleThrottle("3")
