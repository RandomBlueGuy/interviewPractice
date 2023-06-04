/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const newRansomNote = ransomNote.split("")
    let newMagazine = magazine.split("");

    const res= newRansomNote.map((letter)=>{
        if (newMagazine.includes(letter)) {
            let hasDeletedOnce = false;
            newMagazine = newMagazine.map((char) => {
                if (char === letter && !hasDeletedOnce){
                    hasDeletedOnce = true;
                    return "";
                } else {
                    return char;
                }
            })
            return true;
        } else {
            return false
        }
    }).includes(false) ? false : true;

    return res

};