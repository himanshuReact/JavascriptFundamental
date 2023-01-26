const getData = ()=>{
  console.log('fetching data by calling api')
  console.log({counter})
}


let counter = 0

function getDebounce(func, delay){
  let timer;
  
  return function(){
    clearTimeout(timer);
    
    let context = this;
    let args = arguments;
    timer = setTimeout(()=> func.apply(context,args),delay)
  }
}


const handleDebounce = getDebounce(getData,1000)

handleDebounce();
handleDebounce();
handleDebounce();
handleDebounce();
