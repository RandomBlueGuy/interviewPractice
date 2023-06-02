/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {

    const soldiersPerRow = mat.map((row, index) => {
        return {soldiers: row.filter((member) => {
            if (member === 1){
                return member
            }
        }).length,
        indexArr: index
        }  
        }).sort((a,b) => a.soldiers - b.soldiers)
    return soldiersPerRow.map((row) => row.indexArr).slice(0,k)
};