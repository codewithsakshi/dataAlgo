//   What is bubble sort?
// 1. It includes more sort.
// 2. It is slow in comparison of Insertion sort algorihtm.
// 3. compares two items in an array that are next to each other and swap them if they are out of order(that is if larger one comes first in the array) then 
//  move forward one index, compares again and swap again. once we run through the whole array with no swap array is sorted.



// [1, 5, 4, 2, 3]

// Are 1 and 5 out of order? No.
// Are 5 and 4 out of order? Yes. Swap.

// [1, 4, 5, 2, 3]

// Are 5 and 2 out of order? Yes. Swap.

// [1, 4, 2, 5, 3]

// Are 5 and 3 out of order? Yes. Swap.

// [1, 4, 2, 3, 5]

// End of the array, did we swap anything? Yes. Loop again.
// Are 1 and 4 out of order? No.
// Are 4 and 2 out of order? Yes. Swap.

// [1, 2, 4, 3, 5]

// Are 4 and 3 out of order? Yes. Swap.

// [1, 2, 3, 4, 5]

// Are 4 and 5 out of order? No.
// End of the array, did we swap anything? Yes. Loop again.
// Are 1 and 2 out of order? No.
// Are 2 and 3 out of order? No.
// Are 3 and 4 out of order? No.
// Are 4 and 5 out of order? No.
// End of the array, did we swap anything? No. List is sorted.

function bubbele(nums) {

    let isSwap = false;
  
    do{
     isSwap = false;
     for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] > nums[i+1]){
        let temp = nums[i];
         nums[i] = nums[i + 1];
         nums[i + 1] = temp;
       isSwap = true;
      }
     }
     
    }while(isSwap)
    return nums;
   };
  
  console.log(bubbele([2, 5, 8, 3, 4]))
  
  