const toPow = (x, n) => {
  if (Number.isInteger(x) && Number.isInteger(n) && x > 0 && n > 0) {
    const result = console.log(Math.pow(x, n));;
    return result
  } else console.log('Введите целое число больше нуля');
}

toPow(2, 8);