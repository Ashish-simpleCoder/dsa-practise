import { expect, it } from 'vitest'


// TC - O(log(n))



it("should return -1", () => {
    expect(search(arr, 7)).toBe(-1)
})


it("should return 4", () => {
    expect(search(arr, 34)).toBe(4)
})
it("should return 6", () => {
    expect(search(arr, 455)).toBe(6)
})
it("should return -1", () => {
    expect(search(arr, 4595)).toBe(-1)
})
it("should return 1", () => {
    expect(search(arr, 4)).toBe(1)
})



const arr = [2, 4, 6, 8, 34, 56, 455, 788]

// binary-search is done through array-traversal
// works on only sorted arrays


function search(arr, element) {
    let itemIndex = -1

    let low = 0
    let high = arr.length - 1
    let mid


    while (low <= high) {
        mid = Math.floor((low + high) / 2)

        if (arr[mid] == element) {
            return mid
        }

        if (arr[mid] < element) {
            low = mid + 1
        }
        else {
            high = mid - 1
        }
    }




    return itemIndex
}


