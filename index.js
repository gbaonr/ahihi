const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('Hello world')
})

app.get('/nodejs', (req, res) =>{
    res.send('Hello motherfucker')
})

app.get('/how', (req, res) => res.send(`how to use nodeJS`))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})