/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let res = "";
    const newLettersArr = letters;
    newLettersArr.push(target)
    newLettersArr.sort();
    for(let i = newLettersArr.indexOf(target) ; i < newLettersArr.length ; i++){
        if(target !== newLettersArr[i]){
            return newLettersArr[i]
        }
    }
    return letters[0]
};