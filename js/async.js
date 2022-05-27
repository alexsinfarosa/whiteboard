const usersUrl = 'https://jsonplaceholder.typicode.com/users'
const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

async function fetchData() {
  // eslint-disable-next-line no-undef
  const [users, posts] = await Promise.all([
    fetch(usersUrl).then(res => res.json()),
    fetch(postsUrl).then(res => res.json()),
  ])
  return {users, posts}
}

function groupBy(arr, key) {
  return arr.reduce((acc, curr) => {
    const val = curr[key]
    acc[val] = acc[val] ?? []
    acc[val].push(curr)
    return acc
  }, {})
}

async function main() {
  const {users, posts} = await fetchData()
  console.log({users, posts})

  const groupedUsers = groupBy(posts, 'userId')
  console.log({groupedUsers})
}

main()
