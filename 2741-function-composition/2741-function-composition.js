/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let newArrFunctions = functions.reverse()
	return function(x) {
        newArrFunctions.map((functionItem) => x = functionItem(x));
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */