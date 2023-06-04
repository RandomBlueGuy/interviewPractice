/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    return {
        base: init,
        num: init, 
        increment: function (init){
            return this.num += 1;
        },
        decrement: function(init){
            return this.num -= 1;
        },
        reset: function(init){
            return this.num = this.base;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */