function insertionSort(arr){
    for(let i=1; i<arr.length;i++){

        let item = arr[i]
        let pointer = i-1

        while(pointer >=0 && arr[pointer] > item){
            arr[pointer+1]=arr[pointer]
            pointer--
        }
        arr[pointer+1]=item
    }
}