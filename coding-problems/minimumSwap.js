/**
 * Computes the minimum number of swap operations necessary to order
 * an array of unsorted numbers from 1..n by decreasing popularity.
 *
 * @param {number[]} ratings - The array to analyze.
 * @returns {number} The swaps necessary to sort the numbers descending.
 */
const minimumSwaps = ratings => {
  // Create a copy of the ratings array and sort it in descending order.
  const reference = [...ratings].sort((a, b) => b - a)

  // Keep track of the number of swaps we make.
  let swaps = 0

  // Iterate through the ratings array.
  for (let i = 0; i < ratings.length; i++) {
    // If the current element is not in the correct position,
    // find its correct position in the reference array and swap
    // it with the element at that position in the ratings array.
    if (ratings[i] !== reference[i]) {
      const correctPosition = reference.indexOf(ratings[i])
      ;[ratings[i], ratings[correctPosition]] = [
        ratings[correctPosition],
        ratings[i],
      ]
      swaps++
    }
  }

  // Return the number of swaps we made.
  return swaps
}

const example1 = [3, 1, 2]
console.log(minimumSwaps(example1)) // 1
const example2 = [3, 1, 2, 4]
console.log(minimumSwaps(example2)) // 2
const example3 = [1, 2, 3, 4, 5]
console.log(minimumSwaps(example3)) // 0
