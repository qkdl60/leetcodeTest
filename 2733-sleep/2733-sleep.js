/**
 * @param {number} millis
 */
async function sleep(millis) {
    const answer =await new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("any")},millis);
    })
    return answer
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */