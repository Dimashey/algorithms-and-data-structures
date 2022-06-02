const merge = (left: number[], right: number[]): number[] => {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    return [...arr, ...left, ...right] as number[]
};

const mergeSort = (array: number[]): number[] => {
    const half = array.length / 2

    // Base case or terminating case
    if (array.length < 2) {
        return array
    }

    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
};

console.log(mergeSort([4, 8, 7, 2, 11, 1, 3]));