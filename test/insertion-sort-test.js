const assert = require("chai").assert
const insertionSort = require("../insertion-sort")

describe('Sorts by insertion', () => {
  it('sorts 2 numbers', () => {
    assert.deepEqual(insertionSort([5,1]), [1,5])
  })
  
  it('sorts many numbers', () => {
    assert.deepEqual(insertionSort([5,3,400,1,-4]), [-4,1,3,5,400])
  })
  
  it('sorts letters', () => {
    assert.deepEqual(insertionSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
  })
})