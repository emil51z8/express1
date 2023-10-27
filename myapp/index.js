const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hest', (req, res) => {
    res.send('<h1> Hello Hest! </h1>')
  })

  app.get('/api/hest', (req, res) => {
    res.send('{"hest": "hest", "owner": "Emil", "age": 12}')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})