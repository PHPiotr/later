if (typeof Object.prototype.later !== 'function') {

    Object.prototype.later = function (msec, method) {

        var that = this;
        var args = Array.prototype.slice(arguments, [2]);

        if (typeof method === 'string') {
            method = that[method];
        }

        setTimeout(function () {
            method.apply(that, args);
        }, msec);

        return that;
    };
}

(function() {
    
    var obj = {
        testing: function() {
            alert('testing later');
        }
    };
    
    return obj.later(5000, 'testing');

})();
