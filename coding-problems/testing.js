const nums1 = [1, 2, 3, 4, 5, 6, 7] // k = 3 [5,6,7,1,2,3,4]

function rotateArray(nums, k) {
  let length = nums.length
  let result = [...nums]

  for (let i = 0; i < length; i++) {
    let index = (i + k) % length
    console.log(index)
    nums[index] = result[i]
  }
  // return nums
}

// function rotateArray(nums, k) {
//   while (k > 0) {
//     nums = [nums.pop(), ...nums]
//     k--
//   }

//   return nums
// }

console.log(rotateArray(nums1, 3))
