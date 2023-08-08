/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //nums 중에서 2개를 골라서 합이 target이 되는 index들을 반환
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++ ){
            if(nums[i]+nums[j]===target)return [i,j]
        }
    }
};