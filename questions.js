//1- Reverse Number 123, 321
const reverseNumber = (num) => {  
  let digits = (""+num).split("").reverse().join("") ;
  return digits;
  }
  console.log("Reversed Number: ", reverseNumber(123)); //reverse metodu 

 //reverse metodu kullanmadan çözüm alternatifi
const reversedNumber = (num) => {
  const str = "" + num;
  let newStr ="";
  for (let index = str.length-1; i > 0; index--) {
   newStr = str[i];
  }
  return Number.parseInt(newStr);
}

//-------------------------------------------//
//2 - isPalindrome reverse metodu kullanmadan
const isPalindrome = (str) => {
  let isFalse = true;
  const strArr = str.toLowerCase().split('');
  
  strArr.forEach((letter, index) => {
  if (letter !== strArr[strArr.length - index - 1]) {
  isFalse = false;
  }
  });
  return isFalse;
  }

console.log("isPalindrome:", isPalindrome("asdfg"));
console.log("isPalindrome:", isPalindrome("abba"));
console.log("isPalindrome:", isPalindrome("xoXox"));
console.log("isPalindrome:", isPalindrome("kazak"));
//-------------------------------------------//

// 3 - biggest number an arr
const arr = [3, 5, 8, 100, 20];
const max = Math.max(...arr);

const index = arr.indexOf(max);
console.log("Maximum numaranın indexi: ", index);

const biggestNumber = (arr) => {
  const max = Math.max(...arr);
  return max;
}
console.log("The biggest number is: ", biggestNumber(arr2 = [3, 5, 8, 100, 20]));

const maxNumber = (arr) => {
  let max = -Infinity;
  arr.forEach((elem) => {
    if (max < elem)  {
      max = elem;
    }
  });
  return max;
}
console.log("The max number is: ", maxNumber([3, 5, 8, 100, 20]));

// 4- en uzun kelimeyi bulan metot
function findLongestWordLength(str) {
  let word = "";
  const arr = str.split(" ");
  arr.forEach(element => {
    if(element.length > word.length) {
      word = element;
    }
  });
  return word;
}
console.log("The longest word is: ", findLongestWordLength("asadjah fdshjsxxxxxx dfs"));

//5 - aldıgı argümanın bir array olup olmadığını kontrol eden fonksiyon
const isArray = (arr) => {  
  return Array.isArray(arr);
}
console.log("Is Array?",isArray(arr2 = [3, 5, 8, 100, 20]));

//6- aldığı array içindeki sayıları büyükten küçüğe dizip yeni bir array oluşturan fonksiyon
const sortedArray = (array) => {
  let newArr = [];
  arr.forEach(() => {
    let max = arr[0];
    let indexTemp = 0;
    arr.forEach((element2, index2) => {
      if (element2 > max) {
        max = element2;
        indexTemp = index2;
      }
    } );
    newArr.push(max);
    array[indexTemp] = Number.NEGATIVE_INFINITY;
  } );
  return newArr;
}

console.log("Sorted Array",sortedArray([3, 5, 8, 100, 20, 12 ,15]));