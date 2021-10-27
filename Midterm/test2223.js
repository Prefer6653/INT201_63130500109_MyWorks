function randomNumber() {
  return Math.floor(Math.random() * 100) + 1;
  // let z = []
  // for(i=0;i<3;i++){
  //     z[i]= Math.floor(Math.random() * 100) + 1
  // }
  // console.log(z)
  // return z
}
let b = [];
for (i = 0; i < 3; i++) {
  b[i] = randomNumber();
}
console.log(b);

function menu(a) {
  switch (a) {
    case 1:
      let sumvalue = 0;
      for (i = 0; i < b.length; i++) {
        sumvalue += b[i];
      }
      console.log(sumvalue);
      break;
    case 2:
      let min = 100;
      for (i = 0; i < b.length; i++) {
        if (b[i] < min) {
          min = b[i];
        }
      }
      console.log(min);
      break;
    case 3:
      let max = 0;
      for (i = 0; i < b.length; i++) {
        if (b[i] > max) {
          max = b[i];
        }
      }
      console.log(max);
      break;
  }
}
menu(1);
menu(2);
menu(3);

let Prop = {
  long: [12,32,33],
  depth: 20,
  value: function () {
    return this.depth * this.long;
  },
};
