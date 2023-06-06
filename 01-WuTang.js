const wuTang = (n) => {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('WuTang');
        } else if (i % 3 === 0) {
            result.push('Wu');
        } else if (i % 5 === 0) {
            result.push('Tang');
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

module.exports = wuTang;
