export const debounce = (callback, timeout) => {
    let timer;
    return(...args)=>{
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{callback.apply(this, args);}, timeout)
    }
}