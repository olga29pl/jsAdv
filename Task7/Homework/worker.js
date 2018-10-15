self.onmessage = function (e) {
    var obj = e.data;
    self.postMessage(obj.meth === 'Encrypt' ? encrypt(obj.str, obj.num) : decrypt(obj.str, obj.num));
}

function encrypt(inputString, intArg) {
    var result = '';

    for (var i = 0; i < inputString.length; i++) {
        var ch = inputString[i];
        result += String.fromCharCode(ch.charCodeAt(0) + intArg);
    }
    return result;
}

function decrypt(inputString, intArg) {
    return encrypt(inputString, (-1) * intArg);
}