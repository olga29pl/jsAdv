 String.prototype.encode = function(num) {
    return this.split('').map(function(val) {
        return val.charCodeAt();
    }).map(function(val) {
        return String.fromCharCode(val + num);
    }).join('');
}

console.log('abc'.encode(2));

String.prototype.decode = function(num) {
    return this.split('').map(function(val) {
        return val.charCodeAt();
    }).map(function(val) {
        return String.fromCharCode(val - num);
    }).join('');
}

// return decode((-1) * num);

console.log('cde'.decode(2));


