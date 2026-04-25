const inputElement = document.querySelector("#api_input");

const debounce = (func, wait = 0) => {
    let timer;
    return (...args) => {
        clearTimeout(timer) 
        timer = setTimeout(()=>{
            func(...args);
        }, wait)
    }
}

const callApi = (e) => {
    console.log("entered: ", e.target.value);
}

const debouncedCallApi = debounce(callApi, 500);



inputElement.addEventListener("input",debouncedCallApi);
