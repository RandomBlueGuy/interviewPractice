const sum_arr = (str) => {
     if (str === '') {
          return [];
     }

     if (str.split('').includes('/') === false && !str.split('').includes(',') === false) {
          return [];
     }

     if (str.split('').filter((item) => item === '/').length > 1) {
          return [];
     }

     const firstSplit = str.split('/');
     const secondSplit = firstSplit.map((arr) => arr.split(','));

     if(secondSplit.join().split(",").map(item => Number.isInteger(Number(item))).includes(false)){
      return[]
     }

     if (secondSplit[0].length !== secondSplit[1].length) {
          return [];
     }

     const newArr = str.split('/').map((item) => item.split(','));
     const res = [];

     for (let i = 0; i < newArr[0].length; i++) {
          res.push(parseInt(newArr[0][i]) + parseInt(newArr[1][i]));
     }
     return res;
};

console.log('🔷 / sum_arr("1,2,3/4,5,6") =>', sum_arr('1,2,3/4,5,6'));
console.log('🔷 / sum_arr("10,2,25,8/1,38,-6,12") =>', sum_arr('10,2,25,8/1,38,-6,12'));
console.log('🔷 / sum_arr("") =>', sum_arr(''));
console.log('🔷 / sum_arr("1,2/3,4/5,6") =>', sum_arr('1,2/3,4/5,6'));
console.log('🔷 / sum_arr("1,23,45,6") =>', sum_arr('1,23,45,6'));
console.log('🔷 / sum_arr("1,2,3/4,5") =>', sum_arr('1,2,3/4,5'));
console.log('🔷 / sum_arr("10.8,2,25,8/1,38,-6,12.5") =>', sum_arr('10.8,2,25,8/1,38,-6,12.5'));
console.log('🔷 / sum_arr("a,2,3/4,c,6") =>', sum_arr('a,2,3/4,c,6'));
