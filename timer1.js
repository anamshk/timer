//const prompt = require('prompt-sync')();
const setTimer = function(val) {
  let newArr = [];
  for (const el of val) {
    newArr.push(Number(el));
  }
  console.log(newArr);
  for (const i of newArr) {
    if (typeof (i) !== 'number') return;
    else if (i >= 0) {
      setTimeout(() => process.stdout.write('...\n'), i * 1000);
    }
  }
};
setTimer([1 , 5, 10, 15]);
// else if {typeof (num) !=="number") return;
  
// else {
//   console.log(typeof )
// }
//   ;
// }

