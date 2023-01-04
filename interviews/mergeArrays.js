// prettier-ignore
const arr1 = [
  {name: 'Joe Brown', goals: 0, assists: 0, points: 0},
  {name: 'Jim Bob', goals: 2, assists: 1, points: 3},
  {name: 'Harry Styles', goals: 1, assists: 1, points: 2},
  {name: 'Craig Mack', goals: 5, assists: 7, points: 12},
  {name: 'Dog', bones: 100000, goals: 5, assists: 7, points: 12},
  {name: 'Alex', keys: 88},
]
// prettier-ignore
const arr2 = [
  { name: 'Craig Mack', goals: 3, assists: 3, points: 6, ppg: 0, ppa: 0, pims: 0, },
  { name: 'Jim Bob', goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 },
  { name: 'Joe Brown', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0, },
  { name: 'Harry Styles', goals: 0, assists: 0, points: 0, ppg: 0, ppa: 0, pims: 0, },
];

function mergeArrays(...arrays) {
  const data = arrays.flat()
  const {name, ...rest} = data

  return data.reduce((prev, curr) => {
    const {name, ...rest} = curr
    prev[name] = prev[name] || {}

    for (const [key, val] of Object.entries(rest)) {
      if (prev[name][key]) {
        prev[name][key] = prev[name][key] + val
      } else {
        prev[name][key] = val
      }
    }

    return prev
  }, {})
}

const res = mergeArrays(arr1, arr2)
console.table(res)
