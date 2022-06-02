const quicksort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr

    const pivotIndex = Math.floor(Math.random() * (arr.length - 1))
    const pivot = arr[pivotIndex]

    const left: number[] = []
    const right: number[] = []

    arr.forEach((v, i) => {
        if (i === pivotIndex) return

        v < pivot ? left.push(v) : right.push(v)
    })

    return quicksort(left).concat(pivot, quicksort(right));
}