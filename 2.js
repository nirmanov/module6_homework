const isPrime = function (number) {
  if (number > 0 && number < 1000 && typeof number == "number") {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        return "Составное число";
      }
    }
    return 'Введенное число является простым';
  } else {
    return 'Введенные данные не верны!';
  }
}

console.log(isPrime(6));

