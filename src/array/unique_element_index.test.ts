import { expect, it } from "vitest"



it("should find unique elements index", () => {
    const arr = [1, 2, 3, 3, 4, 5, 2, 3, 6, 7, 8, 9, 10, 11, 10, 5]
    expect(uniqueArrElements(arr)).toEqual([
        { index: 0, unique: true, item: 1 },
        { index: 4, unique: true, item: 4 },
        { index: 8, unique: true, item: 6 },
        { index: 9, unique: true, item: 7 },
        { index: 10, unique: true, item: 8 },
        { index: 11, unique: true, item: 9 },
        { index: 13, unique: true, item: 11 }
    ])
})

function uniqueArrElements(arr: number[]) {
    const mp = new Map<number, { index: number, unique: boolean, item: number }>()

    arr.forEach((item, idx) => {
        if (!mp.has(item)) {
            mp.set(item, { index: idx, unique: true, item })
        } else {
            mp.set(item, { index: idx, unique: false, item })
        }
    })

    return [...mp.values()].filter(item => item.unique)
}

