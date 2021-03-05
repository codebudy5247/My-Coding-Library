/**
 * 2 4 4 6 5
 * o/p - 5
 */

function getSecondLargest(arr){
    return arr.sort((a,b)=> b-a)[1]
}
console.log(getSecondLargest([2,4,4,6,5]));
console.log(getSecondLargest([2,4,4,6,5,8,9,10,78,45]))