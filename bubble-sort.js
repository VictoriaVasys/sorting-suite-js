function bubbleSort(array) {
  array.forEach(function(num, index) {
    var i = 0
    while (i < (array.length - (index + 1))) {
      if (array[i] <= array[i + 1]) {
        i++
      } else {
        num = array[i]
        array[i] = array[i + 1]
        array[i + 1] = num
        i++
      }
    }
  })
  return array
}

module.exports = bubbleSort