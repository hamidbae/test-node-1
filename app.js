const express = require('express')

const app = express()
const port = 1000

app.use((req, res, next) => {
    console.log('mid one')
    next()
})

app.use((req, res, next) => {
    console.log('mid two')
    next()
})

app.use('/users', (req, res, next) => {
    console.log('user')
    res.send('on users page')
})

app.use('/', (req, res, next) => {
    console.log('home')
    res.send('on home page')
})


app.listen(port)