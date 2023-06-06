const superWuTang = (n, m, limit) => {
    let result = [];
    for (let i = 1; i <= limit; i++) {
        if (i % n === 0 && i % m === 0) {
            result.push("SuperWuTang");
        } else if (i % n === 0) {
            result.push("SuperWu");
        } else if (i % m === 0) {
            result.push("SuperTang");
        } else {
            result.push(String(i));
        }
    }
    return result;
};

module.exports = superWuTang;