const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    // loop through nums array again to check front against all other nums
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// solution to sort array and pick off numbers from the side doesn't work because we need the original indices and sorting scrambles them.

// const twoSum = function(nums, target) {
//     // sort nums
//     const sorted = quickSort(nums, 0, nums.length - 1);
//     console.log('sorted:', sorted)
//     // save front and back indices
//     let front = 0
//     let back = nums.length-1
//     // loop over nums from front and back
//     for (let i = 0; i < sorted.length; i++) {
//         console.log('front:', front, 'back:', back)
//         // if front + back is equal to target, return indices
//         if (sorted[front] + sorted[back] === target) {
//             console.log('answer:', [front, back])
//             return [front, back]
//         }
//         // if front + back are greater, decrement the back
//         else if (sorted[front] + sorted[back] > target) {
//             back -= 1
//         }
//         // if front + back are lesser, increment the front
//         else if (sorted[front] + sorted[back] < target) {
//             front += 1
//         }
//     }
// }



// // sorting func
// function quickSort(items, left, right) {
//   let index;
//   if (items.length > 1) {
//     index = partition(items, left, right); //index returned from partition
//     if (left < index - 1) {
//       //more elements on the left side of the pivot
//       quickSort(items, left, index - 1);
//     }
//     if (index < right) {
//       //more elements on the right side of the pivot
//       quickSort(items, index, right);
//     }
//   }
//   return items;
// }

// function swap(items, leftIndex, rightIndex) {
//   let temp = items[leftIndex];
//   items[leftIndex] = items[rightIndex];
//   items[rightIndex] = temp;
// }

// function partition(items, left, right) {
//   let pivot = items[Math.floor((right + left) / 2)], //middle element
//     i = left, //left pointer
//     j = right; //right pointer
//   while (i <= j) {
//     while (items[i] < pivot) {
//       i++;
//     }
//     while (items[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       swap(items, i, j); //sawpping two elements
//       i++;
//       j--;
//     }
//   }
//   return i;
// }
