import { it, expect } from "vitest"

const arr = [34, 23, 4, 1, 7, 3]
const arr2 = [34, 23, 65, 3, 7, 1, 9, 67, 455, 23, 34, 87, 65, 9, 49]
const arr3 = [34, 23, 45, 2, 67, 45, 356, 76, 90]




it('should sort', () => {
    expect(sort([...arr])).toEqual(arr.sort((a, b) => a - b))

    expect(sort([...arr2])).toEqual(arr2.sort((a, b) => a - b))

    expect(sort([...arr3])).toEqual(arr3.sort((a, b) => a - b))
})


function sort(arr) {
    for(let i=1; i<arr.length;i++){
        let item = arr[i] 
        let pointer = i-1
        
        while(pointer >=0 && arr[pointer] > item){
            arr[pointer+1] = arr[pointer]
            pointer--
        }
        arr[pointer+1]=item       
    }

    return arr
}
