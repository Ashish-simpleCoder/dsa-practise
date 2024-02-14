import { expect, it } from 'vitest'


// TC - O(n)


it("should return 4", () => {
    expect(search(arr, 7)).toBe(4)
})

it("should return -1", () => {
    expect(search(arr, 988)).toBe(-1)
})
it("should return 6", () => {
    expect(search(arr, 9)).toBe(6)
})



const arr = [34, 23, 65, 3, 7, 1, 9, 67, 455, 23, 34, 87, 65, 9, 49]

// linear-search is done through array-traversal
// works on both sorted/un-sorted arrays


function search(arr, element) {
    let itemIndex = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == element) {
            return i
        }
    }


    return itemIndex
}


