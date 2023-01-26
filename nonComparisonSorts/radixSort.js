function findLongestNumber(array) {
  let longest = 0;

  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = longest > currentLength ? longest : currentLength;
  }

  return longest;
}

// longestNo =  5, place = 1, number =  43478
function getDigit(longestNo, place, number) {
  const string = number.toString();
  const size = string.length;

  const mod = longestNo - size;
 return string[place - mod] || 0;
}

function radixSort(array) {
  // find longest number

  const longestNo = findLongestNumber(array);
  // create how many buckets you need
  // An array of 10 array

  // const buckets = new Array(10).fill([])
  // or
  const buckets = new Array(10).fill().map(() => []);

  // for loop for how many times you need to do

  for (let i = longestNo - 1; i >= 0; i--) {
    // while loop
    while (array.length) {
      // enqueue the numbers into their buckets
      const current = array.shift();
      // console.log({array})
      buckets[getDigit(longestNo, i, current)].push(current);
    }
    // for loop for each buckets
    for (let j = 0; j < buckets.length; j++) {
      // while loop
      while (buckets[j].length) {
        // dequeue all the items out of the bucket
        array.push(buckets[j].shift());
      }
    }
  }
  return array;
}

console.log(radixSort([3455, 89, 3, 909]));
