/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

 /**
 숫자배열이 주어졌을때, reducer 펑션 fn과 초기값 init, 리듀서된 값을 리턴,
  리듀서된 배열은 fn(init, n
  */
var reduce = function(nums, fn, init) {
    const result =nums.reduce((arr, cur)=>fn(arr, cur),init)
    return result
};