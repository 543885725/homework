

function timeout() {
    return new Promise(function(res, rej) {
        res()
    });
}

let a;
let b;
let c;
timeout().then(value=> {setTimeout(() => {
    a ='hello'
}, 10);})
.then((value) => { setTimeout(() => {
    b = 'lagou'
}, 10);})
.then((value) => { setTimeout(() => {
    c='i love you'
    console.log(a+b+c)
}, 10);})
