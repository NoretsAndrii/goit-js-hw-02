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

console.log(spinWords('Welcome'), 'emocleW');
console.log(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
console.log(spinWords('This is a test'), 'This is a test');
console.log(spinWords('This is another test'), 'This is rehtona test');
console.log(
  spinWords('You are almost to the last test'),
  'You are tsomla to the last test'
);
console.log(
  spinWords('Just kidding there is still one more'),
  'Just gniddik ereht is llits one more'
);
console.log(
  spinWords('Seriously this is the last one'),
  'ylsuoireS this is the last one'
);
