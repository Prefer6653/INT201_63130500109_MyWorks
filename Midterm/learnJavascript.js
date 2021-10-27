let year = 2002;
let findYear = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep'];
let zodiac = year % 12;
console.log(findYear[zodiac]);
  


function sodiacCal(year) {

    return [

        'monkey', 'rooster', 'dog',

        'pig', 'rat', 'ox',

        'tiger', 'rabbit', 'dragon',

        'snake', 'horse', 'sheep'

    ][Number(year) % 12];

};



console.log(sodiacCal('1900'));

console.log(sodiacCal(1880));

console.log(sodiacCal(2001));

console.log(sodiacCal('2021'));