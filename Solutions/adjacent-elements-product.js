function adjacentElementsProduct(inputArray) {
  // save largest product value (can't be zero since negative numbers exist)
  let largest = inputArray[0] * inputArray[1]
  // loop through arr
  for (let i = 1; i < inputArray.length - 1; i++) {
    // if cur num and next num product is greater than largest,
    if (inputArray[i] * inputArray[i + 1] > largest) {
      // reassign largest
      largest = inputArray[i] * inputArray[i + 1]
    }
  }
  return largest
}
