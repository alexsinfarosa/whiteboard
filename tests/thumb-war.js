const utils = require('./utils')

function thumbWar(p1, p2) {
  const numberToWin = 2
  let player1 = 0
  let player2 = 0

  while (player1 < numberToWin && player2 < numberToWin) {
    const winner = utils.getWinner(p1, p2)
    if (winner === p1) {
      player1++
    } else if (winner === p2) {
      player2++
    }
  }

  return player1 > player2 ? p1 : p2
}

module.exports = thumbWar
