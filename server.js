// eslint-disable-next-line no-undef
const express = require('express')
const app = express()
console.log(app)

app.get('./', (req, res) => {
  console.log(req)
  // res.status(200).json({message: 'Message...'})
  res.render('./index.html')
})

app.listen(3001)
console.log('Running on port 3001')
