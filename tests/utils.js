function getWinner(player1, player2) {
  const rand = Math.random()
  return rand < 1 / 3 ? player1 : rand < 2 / 3 ? player2 : null
}

module.exports = {getWinner}
