function developer() {
  return {
    type: 'developer',
    code() {
      console.log(`A front-end ${this.type}`)
      return this
    },
    tools: ['VScode', 'DevTool'],
  }
}

function designer() {
  return {
    type: 'designer',
    design() {
      console.log(`A digital ${this.type}`)
      return this
    },
    tools: ['Figma', 'Adobe'],
  }
}

function employ(name, type) {
  const employ = {
    id: Math.random().toString(36).substr(2, 9),
    name,
  }
  if (type === 'developer') {
    return {...employ, ...developer()}
  }
  if (type === 'designer') {
    return {...employ, ...designer()}
  }
  return employ
}

const alex = employ('Alex', 'developer')
console.log(alex)
alex.code()

const nash = employ('Nashley', 'designer')
console.log(nash)
nash.design()
