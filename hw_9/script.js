//  1

var filterNumbersArr = [-1, 0, 2, 34, -2];
var newArr = filterNumbersArr.filter(function (number) {
   return number > 0;
});
console.log(newArr);

// 2

var numbersArr = [-1, 0, -2, -34, -2, 555];

function foundNumber(arr) {
   var positiveNumber = arr.find(function (number) {
      return number > 0;
   })
   console.log(positiveNumber);
}
foundNumber(numbersArr);

//  3

function isPalindrome() {

   var enterStr = prompt('enter').toLowerCase();

   var strReverse = enterStr.split('').reverse().join('').toLowerCase();

   if (strReverse === enterStr) {
      console.log(true);
   } else {
      console.log(false);
   }
}
isPalindrome()

//  4

function anagramm(str1, str2) {
   str1 = str1.toLowerCase().split('').sort().join();
   str2 = str2.toLowerCase().split('').sort().join();
   return str1 === str2;
}

console.log(anagramm('assol', 'lasso'));
console.log(anagramm('assol', 'lassos'));




