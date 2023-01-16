let arr = [
  50, 42, 77, 22, 31,
  93, 27, 17, 46, 22,
  null, 0, 20, 'string'
];
function getArraysOddAndEvenCount(arr) {
  let zerocount = 0;
  let numbercount = 0;
  let evencount = 0;
  let oddcount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
      numbercount += 1;
      if (arr[i] === 0) {
        zerocount += 1;
      } else if (arr[i] % 2 === 0) {
        evencount += 1;
      } else {
        oddcount += 1;
      }
    }
  }

  console.log(`В массиве ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);
}
getArraysOddAndEvenCount(arr);