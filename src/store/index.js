export function createStore() {
  let count = 0
  let users = {}
  const subscribers = []

  return {
    get count() {
      return count
    },
    increment() {
      count++
      subscribers.forEach(fn => fn())
    },
    decrement() {
      count--
      subscribers.forEach(fn => fn())
    },

    get users() {
      return users
    },
    async fetchUsers(limit) {
      try {
        if (limit < 1) throw new Error('Wrong count for load users')
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)
        const json = await response.json()
        users = json.map(({id, name, username, email}) => ({id, name, username, email}))
        subscribers.forEach(fn => fn())
      } catch (e) {
        console.error('error', e)
      }
    },

    subscribe(fn) {
      subscribers.push(fn)
    }
  }
}