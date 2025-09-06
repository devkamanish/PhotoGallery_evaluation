
export function debouce(func, delay){
    let timer ;
    return (...args) =>{
        clearTimeout(timer)
        timer = setTimeout(()=>func(...args), delay)
       
    }
}

