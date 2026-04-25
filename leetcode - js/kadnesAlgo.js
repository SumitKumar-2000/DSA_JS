// KADNES ALGORITHM PROBLEMS

// Given an integer array nums, find the maximum subarray sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

let input = [-2,1,-3,4,-1,2,1,-5,4];

function maxSubArrayUnoptimizes(nums) {

    let maxSum = nums[0];

    for(let i=1;i<nums.length;i++){
        let currentSum = 0;
        for(let j=i;j<nums.length;j++){
            currentSum += nums[j];

            maxSum = Math.max(currentSum, maxSum);
        }
    }

    return maxSum;
}

// console.log(maxSubArrayUnoptimizes(input));

// KADNES ALGORITHM OPTIMIZED SOLUTION
function maxSubArrayOptimized(nums){
    let currSum = 0;
    let maxSum = nums[0];

    for(let i=0;i<nums.length;i++){

        currSum += nums[i];
        
        maxSum = Math.max(currSum, maxSum);
        currSum = Math.max(currSum, 0);

        
    }
    return maxSum;
}
console.log(maxSubArrayOptimized(input));
