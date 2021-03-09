/*
JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
*/
function secondLowestAndGreatest(arr) {
    arr.sort((a, b) => b - a)
    let temp = []
    for (let i = 0; i < arr.length; i++) {

        //temp.push(arr[1])
        //temp.push(arr[i-2])
    }

    return arr //temp
}
console.log(secondLowestAndGreatest([1, 2, 3, 4, 5]))