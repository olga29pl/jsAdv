(function() {
    var result = document.getElementById('result');

var worker = new Worker('worker.js');

worker.postMessage(234);

worker.onmessage = function(e) {
    result.innerHTML = e.data;
}
}());
