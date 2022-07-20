const usersUrl = 'https://jsonplaceholder.typicode.com/users'
const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

async function fetchUsersPosts() {
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

function grouping(arr, key) {
  return arr.reduce((acc, curr) => {
    if (acc[key] in acc) {
      acc[key] = curr
    } else {
      acc[key] = []
    }
  }, {})
}

async function main() {
  const {users, posts} = await fetchUsersPosts()
  console.log({users, posts})

  const groupedUsers = groupBy(posts, 'userId')
  console.log({groupedUsers})
}

main()

const url = `https://www.letsrevolutionizetesting.com/challenge`

async function fetchData(url) {
  const res = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error(`An error has occured: ${res.status}`)
  }
  const data = await res.json()
  return data
}

async function foorLoop() {
  let url = 'https://www.letsrevolutionizetesting.com/challenge'
  let ids = []
  for (let i = 0; i < 1000; i++) {
    if (i === 0) {
      const {follow} = await fetchData(url)
      const id = follow.split('?id=')[1]
      url = `https://www.letsrevolutionizetesting.com/challenge?id=${id}`
      ids.push(ids)
    } else {
      const {follow, message} = await fetchData(url)
      if (follow) {
        const id = follow.split('?id=')[1]
        url = `https://www.letsrevolutionizetesting.com/challenge?id=${id}`
        console.log({i, id, message})
        ids.push(id)
      }
    }
  }
  return ids
}

// foorLoop()
