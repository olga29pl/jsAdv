var f  = function(args) {
    console.log(args);
}

function callback() {
    console.log('Done!');
}

Function.prototype.go = function (times, milis, callback) {
    var self = this;
   
    for(var i = 0; i < times; i++) {
        (function(i) {
            var f = function() {
                self(i); 
                if(i === times - 1)
                callback();
            };
            setTimeout(f , milis * (i + 1));
        }(i));
    }

}

f.go(5, 2000, callback);