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
  
  