function myClassStudents(lect, ta, ...students) {
    return lect;
  }
  let myStudents = myClassStudents(
    'Umaporn',
    'Tisansi',
    'Peter',
    'Danial',
    'Joe'
  );
  console.log(myStudents)

//function expression +destructuring assignment
const myFunc = function (num1, num2, num3) {
    console.log(num1);
    console.log(num2);
    console.log(num3);
  };
  //calling function, function execution with spread operator
  myFunc(...[10, 20, 5]);
//function expression +destructuring assignment
const myFunc = function ([num1, num2], value) {
    console.log(num1);
    console.log(num2);
    console.log(value);
  };
  //calling function, function execution
  myFunc([10, 20], 5);


  let a = 10
  a => a+10;
  console.log(a)

     let q = 22
     let a = 0
   let z  = ()=> {let w = 12;
        
    return a = w + q + 100;
}
console.log(z())
      
  function isKMUTTStudent(student) {
    if (student.id.length == 13) return true;
    else return false;}

    let isKMUTTStudent = student => student.id.length == 13;


    function greetingSomeOne(name) {
        const greeting = ['hi', 'hello', 'hey'];
        return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
      }

      let greetingSomeOne = name => {
        const greeting = ['hi', 'hello', 'hey'];
        return `${greeting[Math.floor(Math.random(3))]}, ${name}`;
    }
//examples of reduce and map functions
let products = [
    { prodId: 1, price: 10, amount: 2 },
    { prodId: 2, price: 5, amount: 10 }
  ];
  let priceIncludeVat = products.map(// เอาราคาสินค้า*(ราคาสินค้า*0.07*(vat 7% ของราคานั้น))
    (product) => product.price + product.price * 0.07
  );
  console.log(priceIncludeVat);
  
  let totalAmt = products.reduce(
    (total, curProd) => (total += curProd.amount),0//ลดelement ของอาเรย์ amountให้เรือตัวเดียวซึ่งวิธีการคือเอาamount เก็บใส่totalไว้เรื่อยๆจนหมด
                                                //อาเรย์ เเล้วเเสดงผลไว้ค่าเดียว
       
  );
  console.log(totalAmt);

//examples of arguments object
let products = [
    { prodId: 1, price: 10, amount: 2 },
    { prodId: 2, price: 5, amount: 10 }
  ];
  
  function getProducts(products='dontknow',total= 0) {
    for (let i = 0; i < arguments.length; i++) {
      console.log(arguments[i]); // ใช้ argrument เเทน product มันจะหยิบ โปรดัคลงมา เเบบเราไม่ใส่พารามีเตอร์เลย
                                 // เเต่ ใน ฟังก์ชั่นนี้เรียก products มันจะเอาvalueของ products ใส่เเทน agrument
      console.log(total);
    }
  }
  
  getProducts(products);

const ages = [32, 33, 16, 40];

console.log(ages.filter(checkAdult) )   // Returns [32, 33, 40] ใช้ ฟังก์ชั่นเป็นcondition

function checkAdult(age) {
  return age >= 18;
}
function getStudentsInClass(instructor, ta, ...students) {   //...students คือ array 
  return students;
}
let studentSec2 = getStudentsInClass('Umaporn', 'Tisanai', 'A', 'B', 'C');
console.log(studentSec2);
[instructor, ta, ...student] = ['Umaporn', 'Tisanai', 'A', 'B', 'C'];
console.log(student);


