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
  
  