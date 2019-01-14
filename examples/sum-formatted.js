function sum(array) {
  let result;

  for (const value of array) {
    if (value !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
}

sum([1, 2, 3, 4, 5]);
