const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()
const jsonParser = bodyParser.json()

app.use('/', express.static('app'))
app.use(session(
    {
        resave: false,
        saveUninitialized: true,
        secret: 'asdf1234asdf'
    }
))

// Authentication
app.post('/api/login', jsonParser, function (req, res) {
    if (req.body.username == 'ash' &&
            req.body.password == 'catchem') {
        req.session.loggedin = true
        res.status(200)
    } else {
        req.session.loggedin = false
        res.status(401)
    }
    res.send('Test login')
})

app.put('/api/register', jsonParser, function (req, res) {
    console.log(req.body)
    res.status(201)
    res.send('Test register')
})

app.get('/api/doesuserexist', function (req, res) {
    if(req.query.username == 'ash') {
        res.status(200)
    } else {
        res.status(204)
    }
    res.send('Test userexists')
})

app.get('/api/doesemailexist', function (req, res) {
    if(req.query.email == 'ash@ash.com') {
        res.status(200)
    } else {
        res.status(204)
    }
    res.send('Test userexists')
})

app.get('/api/isloggedin', function (req, res) {
    if (req.session.loggedin == true) {
        res.status(200)
    } else {
        res.status(401)
    }
    res.send('Test isLoggedin')
})

app.get('/api/logout', function (req, res) {
    res.status(200)
    req.session.loggedin = false
    res.send('Test Logout')
})

// ToDo Categories CRUD
app.get('/api/getcat', function (req, res) {
    if (req.session.loggedin == true) {
        res.status(200)
    } else {
        res.status(403)
    }
    res.send('Test get categories')
})

app.put('/api/addcat', jsonParser, function (req, res) {
    if (req.session.loggedin == true) {
        res.status(201)
    } else {
        res.status(403)
    }
    res.send('Test add categories')
})

app.delete('/api/delcat/:catid', function (req, res) {
    if (req.session.loggedin == true) {
        res.status(203)
    } else {
        res.status(403)
    }
    res.send('Test delete categories')
})

app.patch('/api/updatecat/:catid', jsonParser, function (req, res) {
    if (req.session.loggedin == true) {
        res.status(203)
    } else {
        res.status(403)
    }
    res.send('Test update categories')
})

// ToDo Items CRUD
app.get('/api/gettodos/:catid', function (req, res) {
    if (req.session.loggedin == true) {
        res.status(200)
    } else {
        res.status(403)
    }
    res.send('Test Get ToDo')
})

app.put('/api/addtodo', jsonParser, function (req, res) {
    if (req.session.loggedin == true) {
        res.status(201)
    } else {
        res.status(403)
    }
    res.send('Test Add ToDo')
})

app.delete('/api/deltodo/:todoid', function (req, res) {
    if (req.session.loggedin == true) {
        res.status(203)
    } else {
        res.status(403)
    }
    res.send('Test Delete ToDo')
})

app.patch('/api/updatetodo/:todoid', jsonParser, function (req, res) {
    if (req.session.loggedin == true) {
        res.status(203)
    } else {
        res.status(403)
    }
    res.send('Test Update ToDo')
})


app.listen(3000)