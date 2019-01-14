function sum(array) {
  let result;

  for (const value of array) {
    if (value !== undefined) {
      result = result === undefined ? value : result + value;
    }
  }
  return result;
}

sum([1, 2, 3, 4, 5]);
