type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
this.num=init;

this.increment=()=>{
    return ++this.num;
}

this.decrement=()=>{
    return --this.num;
}

this.reset=()=>{
    this.num=init
    return this.num
}
return this
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */