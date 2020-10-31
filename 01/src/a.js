const a= 'webpack'
module.exports = a

function func(num) {
var data = num
let str = "";
for (let i = 2; i < Math.sqrt(data); i++) {
  while (data % i == 0) {
    str += i + " ";
    data /= i;
  }
}
if (data > 1) {
  str += data + " ";
}
console.log(str);
  }

  func(18)