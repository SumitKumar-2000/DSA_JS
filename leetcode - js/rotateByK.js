const reverse = function(nums, s, e){
    while(s < e){
        const temp = nums[s];
        nums[s] = nums[e];
        nums[e] = temp;

        s++;
        e--;
    }
}

let rotate = function(nums, k) {
    if(k > nums.length) k = k % nums.length;

    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1);


    return nums;
};


let rotateUnoptimized = function(nums, k){
    const extracted = nums.splice(nums.length - k, k);
    nums = [...extracted, ...nums];
    
    return nums;
}



console.log(rotate([7,1,2,3,4,5,6],4));
console.log(rotateUnoptimized([7,1,2,3,4,5,6],4));









