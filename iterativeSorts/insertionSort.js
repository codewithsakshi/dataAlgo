// What is insertion sort
// In the insertion sort we transfer an element at one time to construct sorted array.
// Insertion sort we used for that type of data that we know is almost sorted only some items we need to do transfer to sort the array.

// Mechanism of Insertion sort =>
// The mechanism we follow is we keep moving bigger part to the right by swapping items in the array as we move acros the element.
//  When we come to the place we are going to insert, we'll stop doing those swaps.  


// [3, 2, 5, 4, 1]

//     ↓
// [3, 2, 5, 4, 1]  the ↓ is the number we're looking to insert, everything before is sorted

// Is 2 larger than 3? No. Move 3 to the right.
// Beginning of list, insert 2 at index 0.

//        ↓
// [2, 3, 5, 4, 1]

// Is 5 larger than 3? Yes.
// Insert after 3 (it's already there so it doesn't move)

//           ↓
// [2, 3, 5, 4, 1]

// Is 4 larger than 5? No. Move 5 to the right.
// Is 4 larger than 3? Yes.
// Insert after 3 at index 2.

//              ↓
// [2, 3, 4, 5, 1]

// Is 1 larger than 5? No. Move 5 to the right.
// Is 1 larger than 4? No. Move 4 to the right.
// Is 1 larger than 3? No. Move 3 to the right.
// Is 1 larger than 2? No. Move 2 to the right.
// Beginning of list, insert 1 at index 0

// [1, 2, 3, 4, 5]

// Reached end of list, list is sorted.


function insertion(nums) {

    for(let i = 1; i < nums.length; i++){
     let numToInsert = nums[i]; // the numberToInsert number we're looking to insert
  
     let j;
  
     // loop from the right to the left
     for(j = i - 1; j >= 0 && nums[j] > numToInsert; j--){
      console.log("j", j)
      nums[j+1] = nums[j];
      console.log("1", nums[j+1], nums[j]);
      console.log("P", nums);
     }
     // do the insertion
     console.log("-1", j)
     nums[j+1] = numToInsert;
     console.log("2", nums[j+1],numToInsert);
     console.log("3", nums)
    }
    return nums;
   };
  
  console.log(insertion([10, 5, 3, 8, 2]))
  
  