function binarySearch(id, array){
    let min = 0;
    let max = array.length-1;
    let index, element;

    while(min <= max){
        index = Math.floor((min + max)/2);
        element = array[index];

        if(element.id < id){
            min = index + 1;
        }else if(element.id > id){
            min = index -1;
        }else{
            return element
        }
    }
    return "not-exist"
}


const array1 = [
    { id: 1, name: "Sam" },
    { id: 11, name: "Sarah" },
    { id: 21, name: "John" },
    { id: 10, name: "Burke" },
  ]
console.log(binarySearch(11, array1))