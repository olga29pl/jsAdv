(function () {
    var str = document.getElementById('text');
    var num = document.getElementById('num');
    var div = document.getElementById('div');
    var result = document.getElementById('result');
    var obj = {};

    var worker = new Worker('worker.js');

    div.addEventListener('click', function (e) {
        obj.str = str.value;
        obj.num = parseInt(num.value);
        var target = e.target.value;
        obj.meth = target;

        worker.postMessage(obj);

    })

    worker.onmessage = function (e) {
        result.innerHTML = e.data;
    }

}());