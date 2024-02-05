// function getShippingCost(country) {
//   switch (country) {
//     case 'China':
//       return `Shipping to ${country} will cost 100 credits`;
//     case 'Chile':
//       return `Shipping to ${country} will cost 250 credits`;
//     case 'Australia':
//       return `Shipping to ${country} will cost 170 credits`;
//     case 'Jamaica':
//       return `Shipping to ${country} will cost 120 credits`;
//     default:
//       return 'Sorry, there is no delivery to your country';
//   }
// }

// console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
function getSum(a, b) {
  let min;
  let max;
  if (a === b) {
    return a;
  } else if (a < b) {
    min = a;
    max = b;
  } else {
    min = b;
    max = a;
  }
  let total = 0;
  for (let i = min; i <= max; i += 1) {
    total += i;
  }
  return total;
  //Good luck!
}

console.log(getSum(-1, 2));

function printerError(s) {
  const goodLetter = 'abcdefghijklm';
  let totalErrors = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (!goodLetter.includes(s[i])) {
      totalErrors += 1;
    }
  }
  return `${totalErrors}/${s.length}`;
  // your code
}

// function spinWords(string) {
//   const arrWords = string.split(' ');
//   const arrReserved = arrWords.map(word => {
//     if (word.length >= 5) {
//       let reserveWord = '';
//       for (let i = word.length - 1; i >= 0; i -= 1) {
//         reserveWord += word[i];
//       }
//       return reserveWord;
//     }
//     return word;
//   });
//   return arrReserved.join(' ');
// }
function spinWords(string) {
  const arrWords = string.split(' ');
  const arrReserved = arrWords.map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  });
  return arrReserved.join(' ');
}

// console.log(
//   printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
// );

// console.log(spinWords('Welcome'), 'emocleW');
// console.log(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
// console.log(spinWords('This is a test'), 'This is a test');
// console.log(spinWords('This is another test'), 'This is rehtona test');
// console.log(
//   spinWords('You are almost to the last test'),
//   'You are tsomla to the last test'
// );
// console.log(
//   spinWords('Just kidding there is still one more'),
//   'Just gniddik ereht is llits one more'
// );
// console.log(
//   spinWords('Seriously this is the last one'),
//   'ylsuoireS this is the last one'
// );
// vowels

function disemvowel(str) {
  const vowels = 'aeiou';
  const arrStr = str.split('');
  const newArr = arrStr.filter(
    letter => !vowels.includes(letter.toLowerCase())
  );

  return newArr.join('');
}

// console.log(
//   disemvowel('This website is for losers LOL!'),
//   'Ths wbst s fr lsrs LL!'
// );
// console.log(
//   disemvowel("No offense but,\nYour writing is among the worst I've ever read"),
//   "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// );
// console.log(disemvowel('What are you, a communist?'), 'Wht r y,  cmmnst?');

function sumTwoSmallestNumbers(numbers) {
  const sorted = numbers.toSorted((a, b) => a - b);
  return sorted[0] + sorted[1];
}

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, 'Sum should be 13');
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, 'Sum should be 6');
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, 'Sum should be 10');
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, 'Sum should be 24');
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, 'Sum should be 16');

function descendingOrder(n) {
  const arrNumbers = String(n).split('');
  arrNumbers.toSorted((a, b) => b - a);
  return Number(arrNumbers.join(''));
}

// console.log(descendingOrder(0), 0);
// console.log(descendingOrder(1), 1);
// console.log(descendingOrder(111), 111);
// console.log(descendingOrder(15), 51);
// console.log(descendingOrder(1021), 2110);
// console.log(descendingOrder(123456789), 987654321);

function solution(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    newString += string.charCodeAt(i) > 96 ? string[i] : ' ' + string[i];
  }
  return newString;
}

console.log(solution(''), '');
console.log(solution('camelCasing'), 'camel Casing');
console.log(solution('camelCasingTest'), 'camel Casing Test');

const string = 'jfjkdsbgjkgb';
console.log([...string]);
