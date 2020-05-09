// To Do 1
// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
// arr = [1,2,3,4]  val = 5 -> arr = [5,1,2,3,4] 
function insert(arr, val){
    arr.unshift(val);
    return arr;

}
arr = insert([1,2,3,4], 5);
console.log(arr);

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
// arr = [1,2,3,4] -> [2,3,4], 1
function remove(arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
    return arr.pop()
}

val = remove([1,2,3,4]);
console.log(val);
// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
// insertAt([1,2,3,4],2,5) ->  [1,2,5,3,4]
function insertAt(arr, idx, val) {
    arr[arr.length] = val; //[1,2,3,4,5]
    for (var i = arr.length-1; i > idx; i--) {  // i = 4 3, idx = 2
        var temp = arr[i];  // temp = 5
        arr[i] = arr[i-1];  // [1,2,3,4,4] [1,2,3,3,4]  
        arr[i-1] = temp; // [1,2,4,5,4] [1,2,5,3,4]
    }
    return arr;
}
console.log(insertAt([1,2,3,4],2,5));

// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
//removeAt([1,2,3,4,5],3) -> [1,2,3,5]
function removeAt(arr, idx){
    for (var i = idx; i < arr.length-1; i++){ // i = 3 4
        var temp = arr[i]; // temp = 4
        arr[i] = arr[i+1]; // [1,2,3,5]
        arr[i+1] = temp; // [1,2,3,5,4]
    }
    arr.pop();
    return arr;
}
console.log(removeAt([1,2,3,4,5,7,10,23,65],2));

// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
// [1,2,3,4], return [2,1,4,3]
// ["Brendan",true,42] to [true,"Brendan",42]
function swap(arr){
    console.log(arr)
    if (arr.length%2==0){
        for (var i = 0; i < arr.length; i+=2){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    else {
        for (var i = 0; i < arr.length-1; i+=2 ){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            }
    }
    return arr;
}
console.log(swap([1,2,3,4]));
console.log(swap([true, "Brendan", 42]));

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// [1,2,2,3,4,5] -> [1,2,3,4,5]
function  remDup(arr){
    var idx = 0
    var i = 1
    while (i < arr.length){ // arr.length = 6
        console.log("i:" + i)
        if (arr[idx] == arr[i]){ // 
            console.log("i:" + i);
            i++; // 
        }
        else{
            arr[idx+1] = arr[i]; //
            console.log(arr);
            idx++; // 
            i++; // 
            console.log("i:" + i,"idx:" + idx);
        }
    }
    arr.pop()
    return arr
}
console.log(remDup(["Bill","Jill","Jill","Kyle","Noah","Paul"]));
