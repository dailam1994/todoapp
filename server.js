const express = require('express')
const app = express()

app.use('/', express.static('app'))

// Authentication
app.get('/api', function (req, res) {
    res.send('Test API')
})

app.post('/api/login', function (req, res) {
    res.send('Test login')
})

app.put('/api/register', function (req, res) {
    res.send('Test register')
})

app.get('/api/doesuserexist', function (req, res) {
    res.send('Test userexists')
})

app.get('/api/isloggedin', function (req, res) {
    res.send('Test isLoggedin')
})

app.get('/api/logout', function (req, res) {
    res.send('Test Logout')
})

// ToDo Categories CRUD
app.get('/api/getcat', function (req, res) {
    res.send('Test get categories')
})

app.put('/api/addcat', function (req, res) {
    res.send('Test add categories')
})

app.delete('/api/delcat/:catid', function (req, res) {
    res.send('Test delete categories')
})

app.patch('/api/updatecat/:catid', function (req, res) {
    res.send('Test update categories')
})

// ToDo List CRUD
app.get('/api/gettodos/:catid', function (req, res) {
    res.send('Test Get ToDo')
})

app.put('/api/addtodo', function (req, res) {
    res.send('Test Add ToDo')
})

app.delete('/api/deltodo/:todoid', function (req, res) {
    res.send('Test Delete ToDo')
})

app.patch('/api/updatetodo/:todoid', function (req, res) {
    res.send('Test Update ToDo')
})


app.listen(3000)