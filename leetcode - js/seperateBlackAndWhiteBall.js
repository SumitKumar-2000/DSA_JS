var minimumSteps = function(s) {
    let stepCount = 0;

    let i=0;
    let j=s.length - 1;

    if(s.length === 0) return 0;

    while(i < j){
        if(s[i] > s[j]){
            stepCount++;
            i++;
            j--;
        } else if(s[i] === s[j] && s[i] === "1"){ 
            j--;
        } else if(s[i] === s[j] && s[i] === "0"){
            i++;
        } else {
          i++;
          j--;
        }
    }

    return stepCount;
};

let str = "100";

console.log(minimumSteps(str));