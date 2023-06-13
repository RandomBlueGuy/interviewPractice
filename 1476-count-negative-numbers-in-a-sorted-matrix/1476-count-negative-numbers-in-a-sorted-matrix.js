/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const newGrid = simplifyArray(grid);
    let negativeCounter = 0;

    newGrid.map((item) =>{
        if(item < 0){
            negativeCounter += 1;
        }
    })
    
    return negativeCounter;
};

function simplifyArray(arr) {
  const newArr = [];
  
  arr.map((item) => {
    if (Array.isArray(item)) {
      newArr.push(...simplifyArray(item));
    } else {
      newArr.push(item);
    }
  });

  return newArr;
}