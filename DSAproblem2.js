//[-5,-4,-3,-2,0,2,4,6,8]

function checkSum(array){
    let left = 0;
    let Right =  array.length-1;
    while(left < Right){
        let sum = array[left] + array[Right];
        if(sum === 0){
        console.log(array[left],array[Right]);
        }else if(sum>0){
            Right--;
        }else{
            left++;
        }

    }
}

let result = checkSum([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);
//complexity (O(n)) Linear