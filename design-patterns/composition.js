function developer() {
  return {
    type: 'Developer',
    code() {
      console.log(`A ${this.type} and it codes`)
      return this
    },
    tools: ['VScode', 'JS'],
  }
}

function designer() {
  return {
    type: 'Designer',
    design() {
      console.log(`A ${this.type} whom designs things`)
      return this
    },
    tools: ['Figma', 'Google Fonts'],
  }
}

function employ(name, type) {
  const employ = {
    name,
  }
  if (type === 'Developer') {
    return {...employ, ...developer()}
  }
  if (type === 'Designer') {
    return {...employ, ...designer()}
  }
  return {...employ}
}

const alex = employ('Alex', 'Developer')
console.log(alex)
alex.code()

const nash = employ('Nashley', 'Designer')
console.log(nash)
nash.design()
