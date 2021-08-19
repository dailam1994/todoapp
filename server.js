const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

app.use('/', express.static('app'))

// Authentication
app.get('/api', function (req, res) {
    res.send('Test API')
})

app.post('/api/login', jsonParser, function (req, res) {
    console.log(req.body)
    res.status(200)
    res.send('Test login')
})

app.put('/api/register', jsonParser, function (req, res) {
    console.log(req.body)
    res.status(201)
    res.send('Test register')
})

app.get('/api/doesuserexist', function (req, res) {
    res.status(200)
    res.send('Test userexists')
})

app.get('/api/isloggedin', function (req, res) {
    res.status(200)
    res.send('Test isLoggedin')
})

app.get('/api/logout', function (req, res) {
    res.status(200)
    res.send('Test Logout')
})

// ToDo Categories CRUD
app.get('/api/getcat', function (req, res) {
    res.status(200)
    res.send('Test get categories')
})

app.put('/api/addcat', jsonParser, function (req, res) {
    console.log(req.body)
    res.status(201)
    res.send('Test add categories')
})

app.delete('/api/delcat/:catid', function (req, res) {
    res.status(203)
    res.send('Test delete categories')
})

app.patch('/api/updatecat/:catid', jsonParser, function (req, res) {
    console.log(req.body)
    res.status(203)
    res.send('Test update categories')
})

// ToDo List CRUD
app.get('/api/gettodos/:catid', function (req, res) {
    res.status(200)
    res.send('Test Get ToDo')
})

app.put('/api/addtodo', jsonParser, function (req, res) {
    res.status(201)
    console.log(req.body)
    res.send('Test Add ToDo')
})

app.delete('/api/deltodo/:todoid', function (req, res) {
    res.status(203)
    res.send('Test Delete ToDo')
})

app.patch('/api/updatetodo/:todoid', jsonParser, function (req, res) {
    console.log(req.body)
    res.status(203)
    res.send('Test Update ToDo')
})


app.listen(3000)