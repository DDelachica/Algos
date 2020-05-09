// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

// [4,2,1,3,5] -> [1,4,2,3,5]

function minFront(arr){ 
    var count = 0;
    var idx = arr[1];    
    while (count < arr.length){
        console.log(count, idx)
        if (arr[count] < idx){
            idx = arr[count];
            begin = count
            console.log("beginning index number:" + begin)
            count ++;
        }

        else {
            count++;
        }
    }
    for (var num = begin; num > 0; num--){
        console.log("second for loop:" + num)
        var temp = arr[num-1]; 
        console.log(temp)
        arr[num-1] = arr[num]; 
        console.log(arr)
        arr[num] = temp
        console.log(arr)
    }    
    return arr;
    // Only worked for first example D:
    // var idx = arr.length-1; //idx = 4
    // var i = 1;
    // console.log(idx, i);
    // while (i < arr.length){ //arr.length = 5 i = 4 
    //     if (arr[idx] < arr[idx-1]) { // 5 !< 3, 3 !< 1, 1 < 3, 1 < 4
    //         temp = arr[idx-1]; // temp = 2, 4
    //         arr[idx-1] = arr[idx]; //[4,1,1,3,5], [1,1,2,3,5]
    //         arr[idx] = temp;//[4,1,2,3,5], [1,4,2,3,5]
    //         idx--; //idx = 1, 0
    //         i++;  // i = 4, 5
    //     }
    //     else{ 
    //         idx--; // idx = 3, 2
    //         i++;    // i =2, 3
    //     }
    // }
    // return arr;
}

console.log("This should be correct now: " + minFront( [4,5,2,8,3,1,10,16,2 ]));