/*
ForEach
Map
Filter
Reduce
*/

const sampleArray = [2, 3, 4, 5];
const sampleArray2 = [7, 8, 9, 1];

const resultArray = sampleArray.map((number, location) => {
  const newItem = number * 2;
  return newItem;
});

const resultArray1 = sampleArray.map((number, location) => {
  if (number > sampleArray2[location]) return 1;
  else return 0;
});

// sampleArray2.length - (0) - 1
// sampleArray2.length - (1) - 1
// sampleArray2.length - (2) - 1
// sampleArray2.length - (3) - 1
// sampleArray2.length - location - 1

const resultArray2 = sampleArray.map((el, i) => {
  if (el > sampleArray2[sampleArray2.length - i - 1]) return 1;
  else return 0;
});

const resultArray3 = [];
sampleArray.forEach((el, i) => {
  if (el > sampleArray2[sampleArray2.length - i - 1]) resultArray3.push(1);
  else return resultArray3.push(0);
});

// const sampleArray = [2, 3, 4, 5];
// const sampleArray2 = [7, 8, 9, 1];

const resultArray4 = sampleArray.filter((el, i) => {
  return el > sampleArray2[sampleArray2.length - i - 1];
});

const total = sampleArray.reduce((acc, el) => {
  return acc + el;
}, 0);

const average = total / sampleArray.length;

const product = sampleArray.reduce((acc, el) => {
  return acc * el;
}, 1);

// acc = (((acc * el1) * el2) * el3) * el4 = acc0 = 1 * el1 * el2 * el3 * el4

const popDenver = 5600000;

const usCitiesPopulation = [
  { "Los Angeles": 7500000 },
  { Seattle: 9900000 },
  { Boston: 4000000 },
];

//console.log(Number(Object.values(usCitiesPopulation[0])));

const popTotal = usCitiesPopulation.reduce((acc, el) => {
  return acc + Number(Object.values(el));
}, popDenver);

// acc = ((popDenver + el1.value) + el2.value) + el3.value = 
// acc = popDenver + el1.value + el2.value + el3.value

console.log("The input array is: ", sampleArray);
console.log("The result for 1st MAP is: ", resultArray);
console.log("The result for 2nd MAP is: ", resultArray1); // [0,0,0,1]
console.log("The result for 3rd MAP is: ", resultArray2); // [1,0,0,0]
console.log("The result for 1st ForEach is: ", resultArray3); // [1,0,0,0]
console.log("The result for 1st Filter is:", resultArray4); // [2]
console.log("The result for 1st reduce is 'Total:'", total); // 14
console.log("The result for 2nd reduce is 'Average:'", average); // 3.5
console.log("The result for 3rd reduce is 'Product:'", product); // 120
console.log("The result for 4th reduce is 'Total Population:'", popTotal); // 27,000,000
