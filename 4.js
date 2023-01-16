function intervalCount(a, b) {
  let i = setInterval(() => {
    console.log(a++);
    if (a > b) {
      clearInterval(i)
    }
  }, 1000);
}

intervalCount(4, 13);