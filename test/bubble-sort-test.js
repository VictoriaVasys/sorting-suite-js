const assert = require("chai").assert
const bubbleSort = require("../bubble-sort")

describe('Sorts by bubbling', () => {
  it('sorts 2 numbers', () => {
    assert.deepEqual(bubbleSort([5,1]), [1,5])
  })
  
  it('sorts 3 numbers', () => {
    assert.deepEqual(bubbleSort([3,5,1]), [1,3,5])
  })
  
  it('sorts many numbers', () => {
    assert.deepEqual(bubbleSort([3,4,5,6,1,0,-2]), [-2,0,1,3,4,5,6])
  })
  
  it('sorts letters', () => {
    assert.deepEqual(bubbleSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
  })
  
})