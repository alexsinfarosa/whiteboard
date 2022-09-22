function getTimer(isoDate, timerInfo) {
  const date = new Date(isoDate)
  const isoDateMs = date.getTime()

  const nowMs = Date.now()
  const timeLeft = isoDateMs - nowMs
  const seconds = Math.floor(timeLeft / 1000) % 60
  const minutes = Math.floor(timeLeft / 1000 / 60) % 60
  const hours = Math.floor(timeLeft / 1000 / 60 / 24)

  return {
    hours,
    minutes,
    seconds,
  }
}

const isoDate = `2022-09-23T00:00:00.000-01:00`
const timerInfo = {hours: 0, minutes: 0, seconds: 0}

// setInterval(() => {
//   console.log(getTimer(isoDate, timerInfo))
// }, 1000)
