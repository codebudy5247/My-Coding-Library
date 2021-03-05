/**
 * Given an array of integers, print the array in such a way that the first element
 * is first maximum and second element is first minimum and so on.
 *
 * Input : arr[] = {7, 1, 2, 3, 4, 5, 6}
 * Output : 7 1 6 2 5 3 4
 *
 * Input : arr[] = {1, 6, 9, 4, 3, 7, 8, 2}
 * Output : 9 1 8 2 7 3 6 4
 */

function alternativeSort(arr) {
  var alternateArray = [];
  var sortArray = arr.sort((a, b) => {
    return a - b;
  });
  let k = sortArray.length - 1;
  for (let i = 0; i < sortArray.length / 2; i++) {
    alternateArray.push(sortArray[k]);
    alternateArray.push(sortArray[i]);
    k--;
  }
  return alternateArray;
}
console.log(alternativeSort([7, 1, 2, 3, 4, 5, 8, 6]));
