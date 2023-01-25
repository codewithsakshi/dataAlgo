const mergeSort = (nums) => {
    const length = nums.length;
    // base if length of array is less than two;
    if(length < 2) return nums;

    // break array into two smaller array

    const middle = Math.floor(length/2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);
    // call mergeSort on left and right

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);
    // return merge of left and right;
    return merge(leftSorted, rightSorted);
}

const merge = (left, right) => {
    const results = [];

    while(left.length && right.length){
        if(left[0] <= right[0]){
            results.push(left.shift())
        }
        else {
            results.push(right.shift())
        }
    }
    // console.log({result})
    return results.concat(left, right);
}


console.log(mergeSort([4, 7, 9, 2, 3, 2, 8]))

