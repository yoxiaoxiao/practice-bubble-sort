
function bubbleSort(arr) {
  let swapped = true;
  while(swapped){
    swapped = false;
    // Iterate through the array
    for (let i = 0; i < arr.length - 1; i++) {
    // If the current value is greater than its neighbor to the right
      // Swap those values
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
        console.log(arr.join(","));
      }
    }
    // If you get to the end of the array and no swaps have occurred, return
    // Otherwise, repeat from the beginning
  }
  return arr;
}
arr = [2,4,6,8,1,3,5,7,9];
console.log(bubbleSort(arr));

module.exports = bubbleSort;