/*
  Problem: Given the array arr, find and return two indices of the array that add up to weight
   or return -1 if there is no combination that adds up to weight.
*/

//Solution

function findSum(arr, weight) {
    for (var i=0,arrLength=arr.length; i<arrLength; i++){
          
        for (var j=i+1; j<arrLength; j++) {
            if (arr[i]+arr[j]==weight){
                return [i,j];
            }
        }
    }
    return -1;
}

findSum([1,2,3,4,5], 7);

function twoSum(arr, weight){
    for (var i = 0, arrLength = arr.length; i < arrLength; i++){
        for(var a = i + 1; a < arrLength; i++) {
            if(arr[i] + arr[a] == weight){
                return[i,a];
            }
        }
    }
    return -1
}

//Big O complexity.
//ftwoSum(n) = O(n + n) = ftwoSum(n) = O(n^2);
twoSum([3,4,5,6,6], 9);


//More Robust solution using HashMap
function findSumBetter(arr, weight) {
    var hashtable = {};

    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        var currentElement = arr[i],
            difference = weight - currentElement;
        // check the right one already exists
        if (hashtable[currentElement] != undefined) {
            return [i, hashtable[currentElement]];
        } else {
            // store index
            hashtable[difference] = i;
        }
    }
    return -1;
}

   //console.log(findSumBetter([1, 2, 3, 4, 5], 9));

//Mock.

function mockSum(arr, weight){
    for (var i = 0, arrLength = arr.length; i < arrLength; i++){
        for(var a = i + 1; a < arrLength; i++) {
            if(arr[i] + arr[a] == weight){
                return[i,a];
            }
        }
    }
    return -1
}

//console.log(mockSum([1,2,3,5,6], 7));

const mockArray = [10,30,40,50,60,70,80,90];

for(var i=0; i < mockArray.length; i++){
   //console.log(mockArray[i]); 
}


//leetcode accepted answer
  /*var twoSumArr = function(nums, target) {
    let hash = {};
    
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if(diff in hash){
            return [hash[diff], i];
        }else{
            hash[nums[i]] = i;
        }
    }
};*/

var twoSumArray = function(nums, target) {
    let hash = {};

    for(var i=0; i < nums.length; i++ ){
        let diff = target - nums[i]
        if(diff in hash){
            return [hash[diff], i]
        } else{
            hash[nums[i]] = i;
        }
    }
};


var twoSmArray = function(nums, target){
    var hash = {};
    for(var i = 0; i < nums.length; i++){
        var diff = target - nums[i];
        if(diff in hash){
            return [hash[diff], i]
        } else{
            hash[nums[i]] = i;
        }
    }
}

console.log(twoSmArray([10,40,50,60,0,80,90], 170));


//Leetcode question 2 
const removeDuplicates = nums => {
    
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[i + 1] && nums[i + 1] != undefined){
            index++;
            nums[index - 1] = nums[i];
            nums[index] = nums[i + 1];
        } 
    }
    return index + 1;
    
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));


