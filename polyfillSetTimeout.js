function createSetTimeOut(){
    var timerId = 1
    var timerMap = {}

    function setTimeoutPoly(callback, delay){
        var id = timerId++
        timerMap[id] = true
        var start = Date.now()
        function triggerCallback(){
            if(!timerMap[id]) return
            if(Date.now()> start+delay){
                callback()
            } else{
                requestIdleCallback(triggerCallback)
            }
            
        }
        requestIdleCallback(triggerCallback)
        return id
    }

    function clearTimeoutPoly(id){
        delete timerId[id]
    }
    return {setTimeoutPoly, clearTimeoutPoly}
    
}

let {setTimeoutPoly, clearTimeoutPoly} = createSetTimeOut()

console.log("Start")

let myId= setTimeoutPoly(function(){
    console.log("welcome to Himanshu JS")
    // clearTimeoutPoly(myId)
    
},1000)

// clearTimeoutPoly(myId)


console.log("End")
