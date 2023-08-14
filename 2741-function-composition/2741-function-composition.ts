/**
평션 배열이 주어졋을때, 새로운 펑션을 리턴, 이걸 펑션 조합, 펑선들의 배열
[fx, gx, hx] 의 조합은 fn(x)=f(g(h(x)))
배열이 비어잇다. f(x)=x

 */

type F = (x: number) => number;

function compose(functions: F[]): F {
	return function(x) {
     if(functions.length===0)return x   
     return functions.reduceRight((acc,cur)=>{
       return cur(acc)      
       } ,x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */