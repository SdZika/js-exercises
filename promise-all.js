function customPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let successes = [];
        promises.map((promise) => {
            return promise.then((res) => {
                successes.push(res)

                if (successes.length === promises.length) {
                    resolve(successes)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    })
}

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => setTimeout(() => resolve(2), 100));

customPromiseAll([p2, p1]).then((res) => console.log(res));


