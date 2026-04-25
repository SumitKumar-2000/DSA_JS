const input = [1, 2, 1, 2, 4, 1, 2, 4, 9, 1]

function removeTripplet(arr){
    let obj = {}
    
    arr.forEach(item => {
        if(!obj[item]){
            obj[item] = 1;
        } else {
            obj[item] += 1;
        }
    })
    
    for(let i=1;i<=arr.length;i++){
        if(obj[arr[i-1]] >= 3){
            arr.splice(i-1, 1);
            i--;
        }
    }
    
    return arr;
}

console.log(removeTripplet(input));