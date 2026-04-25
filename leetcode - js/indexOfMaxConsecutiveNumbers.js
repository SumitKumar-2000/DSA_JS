/*Given an array of numbers as arguments that have multiple set of consecutive numbers, write a function
    that will return the index from where max number of consecutive numbers start.*/ 

function startOfMaxCons(nums){
    let consLength = 1;
    let maxConsLength = 0;
    let currConsIndex = 0;
    let largestConsIndex = 0;
    
    for(let i=1;i<nums.length;i++){
        if(nums[i-1] + 1 === nums[i]) consLength++;
        else {
            if(consLength > maxConsLength){
                maxConsLength = consLength;
                largestConsIndex = currConsIndex;
            }
            currConsIndex = i;
            consLength = 1;
        }
    }
    
    if(consLength > maxConsLength){
        maxConsLength = consLength;
        largestConsIndex = currConsIndex;
    }
    
    return largestConsIndex;
}

console.log(startOfMaxCons([2,3,4,51,71,9,10,21,22,23,24,13,4,5,6,7,8]))