
// mergeSort

function mergeArray(arr1,arr2) {
    var results = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length -1 && j <arr2.length - 1) {
        if (arr1[i] < arr2[j]) {
            results.push(arr[i]);
            i++
        } else {
            results.push(arr[j]);
            j++
        }
        while (i<arr2.length) {
            results.push(arr[j]);
            j++
        }
        while (j<arr1.length) {
            results.push(arr[i]);
            i++
        }
    }
    return results
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    var mid = Math.floor(arr.length);
    var left = mergeSort(arr.slice(0,mid));
    var right = mergeSort(arr.slice(mid));
    mergeArray(left, right);
    return arr 
}