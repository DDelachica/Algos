// To Do 2
// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
function reverse(arr){
    for (var i = 1; i <= (arr.length/2); i++){
        var temp = arr[arr.length-i];
        console.log(temp);
        arr[arr.length-i] = arr[i-1];
        arr[i-1] = temp
        console.log(arr)

    }
    return arr;
}

console.log(reverse([1,2,3,4,5,6,7,8,9]))
// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr’s values to the right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don’t use built-in functions.

function rotateArr(arr, shiftBy) {
	let t = Math.abs(shiftBy);
	while(t > 0) {

		if(shiftBy > 0) {
			let temp = arr[arr.length-1]
			console.log(temp)
			for(let i = arr.length - 1; i > 0; i--)
				arr[i] = arr[i-1];
			arr[0] = temp;

		} else {
			let temp = arr[0];
			for(let i = 0; i < arr.length - 1; i++) {
				arr[i] = arr[i + 1];
			}
			arr[arr.length-1] = temp;
		}
		t--;
    }
    return arr;
}
console.log(rotateArr([1,2,3],1))
// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
	for(var i = 0; i < arr.length; i++) { // arr.length = i = 0, 1, 2, 2, 2, 2
		if(arr[i] > min && arr[i] < max) { // 1 !> 5 < 11, 5 !> 5 < 11, 7> 5 < 10, 10>5<11, 6>5<11, 8>5<11
			for(var j = i; j < arr.length - 1; j++) { //j = 2,
                arr[j] = arr[j + 1]; // [1,5,10,6,8], [1,5,6,8], [1,5,8], [1,5]
            }
            arr.length = arr.length - 1;
			i--;
		}
	}
    return arr
}
console.log(filterRange([1,5,7,10,6,8], 5, 11))
// Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
function arrConcat(arr, arr2){
    arr.length = arr.length + arr2.length;
    var j = 0
    for(var i = arr.length - arr2.length; i < arr.length; i++){     
        arr[i] = arr2[j];
        j++;
    }
    return arr;
}
console.log(arrConcat( ['a','b', 'c', 'd'], [1,2,3,4,5] )); //[a,b,1,2]