const esPar = (number) => {
  return number % 2 === 0 ? true : false;
};
const factorial = (number = 0) => {
  if (number < 0) number = 0;
  if (number % 1 != 0) number = Math.round();
  if (number <= 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};
