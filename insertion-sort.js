function insertionSort(array) {
  // need to evaluate the last part minus sorted
  var i = 0
  while (i < (array.length - 1)) {
    toSort = array.splice(i + 1, 1)[0]
    index = i
    while (index >= 0) {
      if (toSort >= array[index]) {
        array.splice((index + 1), 0, toSort)
        index = -1
      } else if (index == 0) {
        array.splice((index), 0, toSort)
        index = -1
      } else {
        index--
      }
    }
    i++
  }
  return array
}

module.exports = insertionSort
        