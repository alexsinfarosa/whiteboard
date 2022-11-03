const assert = require('assert')
const thumbWar = require('./thumb-war')
const utils = require('./utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  // Making the getWinner function deterministic
  utils.getWinner = (p1, p2) => p1

  const winner = thumbWar('Alex', 'Katia')
  assert.strictEqual(winner, 'Alex')

  // clean up
  utils.getWinner = originalGetWinner
})
