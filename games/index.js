const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

let x = canvas.width / 2
let y = canvas.height - 30
let dx = 2
let dy = -2
let ballRadius = 10
let paddleHeight = 10
let paddleWidth = 75
let paddleX = (canvas.width - paddleWidth) / 2
let rightPressed = false
let leftPressed = false

document.addEventListener('keydown', keyDownHandler)
document.addEventListener('keyup', keyUpHandler)

function keyDownHandler(e) {
  if (e.key == 'Right' || e.key == 'ArrowRight') {
    rightPressed = true
  } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
    leftPressed = true
  }
}

function keyUpHandler(e) {
  if (e.key == 'Right' || e.key == 'ArrowRight') {
    rightPressed = false
  } else if (e.key == 'Left' || e.key == 'ArrowLeft') {
    leftPressed = false
  }
}

function drawBall() {
  ctx.beginPath()
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2)
  ctx.fill()
  ctx.closePath()
}

function drawPaddle() {
  ctx.beginPath()
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight)
  ctx.fill()
  ctx.closePath()
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBall()
  drawPaddle()

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx
    ctx.fillStyle = randomHex()
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy
    ctx.fillStyle = randomHex()
  }

  if (rightPressed) {
    paddleX += 7
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth
    }
  } else if (leftPressed) {
    paddleX -= 7
    if (paddleX < 0) {
      paddleX = 0
    }
  }

  x += dx
  y += dy
}
setInterval(draw, 10   )

// utils
function randomHex() {
  return `#${Math.floor(Math.random() * (256 * 256 * 256))
    .toString(16)
    .padStart(6, 0)}`
}
