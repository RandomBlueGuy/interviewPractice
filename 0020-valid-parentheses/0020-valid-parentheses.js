/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const newArr = s.split("");
    
    for(let i = 0 ; i < newArr.length ; i++){
        if (newArr[i] === "(" || newArr[i] === "[" || newArr[i] === "{"){
            stack.push(newArr[i]);
        } else if (newArr[i] === ")" || newArr[i] === "]" || newArr[i] === "}"){
            if(`${stack[stack.length-1]}${newArr[i]}` === "()" ||
               `${stack[stack.length-1]}${newArr[i]}` === "[]" ||
               `${stack[stack.length-1]}${newArr[i]}` === "{}"){
                   stack.pop();
               } else {
                   return false;
               }
        } 
    }
    return stack.length > 0 ? false : true;
};