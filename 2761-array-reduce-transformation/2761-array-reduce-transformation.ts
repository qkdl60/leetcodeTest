type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
   nums.forEach(v=>{
     init=fn(init,v)
   })
  
  return init
};