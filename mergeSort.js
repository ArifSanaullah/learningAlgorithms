
let arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function merge(left, right) {
    let arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            const n = left.shift();
            arr.push(n);
        } else {
            const n = right.shift();
            arr.push(n);
        }
    }
    return arr.concat(left.slice().concat(right.slice()));
}


function mergeSort(arr) {
    if (arr.length < 2) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}


console.log(mergeSort(arr));
