// To Do 1
// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
function remBlanks(str){
    wordArr = str.split(" ");
    return wordArr.join("");  
}
console.log(remBlanks(" Pl ayTha tF u nkyM usi c "));
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".



// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
function getDigits(str){
    var wordArr = str.split("");
    var demDigits = "";
    for(var i = 0; i < wordArr.length; i++){
        if(wordArr[i]%1 == 0){
            demDigits += wordArr[i];
        }
    }
    return demDigits;
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));
 
// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given "there's no free lunch - gotta pay yer way.", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronymCreator(str){
    var newAcro = "";
    newAcro += str[0];
    for(var i = 0; i < str.length; i++){
        if(str[i] == " "){
            newAcro += str[i+1];
        }
    }
    return newAcro.toUpperCase();
}
console.log(acronymCreator("there's no free lunch - gotta pay yer way.")); //"TNFL-GPYW"
console.log(acronymCreator("Live from New York, it's Saturday Night!")); //"LFNYISN"
// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 

// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function countNoSpace(str){
    var counter = 0;
    for(var i = 0; i<str.length; i++){
        if(str[i] != " "){
            counter++
        }
    }
    return counter
}
console.log(countNoSpace("Honey pie, you are driving me crazy"));

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.
function removeShorty(strArr, length){
    for (var i = strArr.length-1; i >= 0; i--) {
        if (strArr[i].length < length) {
            for (var j = i; j < strArr.length-1; j++){
                console.log(i)
                var temp = strArr[j];
                strArr[j] = strArr[j+1];
                strArr[j+1] = temp;
            }
            strArr.pop();
        }
    }
    return strArr;   
}
console.log(removeShorty(['first', 'second', 'less', 'anotha', 'one', 'why'], 5));
