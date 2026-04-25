var arrangeWords = function(text) {
    let result = "";
    let curr = "";
    let biggest = "";

    for(let i=0;i<text.length;i++){
        

        if(text[i] === " "){
            if(curr.length >= biggest.length){
                result = result + " " + curr;
                biggest = curr;
            } else {
                result = curr + " " + result
            }

            
            curr = "";
        } else {
            curr += text[i];
        }
    }

    return result;
};

const text = "To be or not to be"

console.log(arrangeWords(text));
