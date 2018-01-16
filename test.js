function fn1() {
    console.log('get fn1 #success');
}

var obj = {
    objFn: function (cb) {
        return fn1.call(cb);
    }
};

function fn2() {
    console.log('ok');
}

obj.objFn(fn2());