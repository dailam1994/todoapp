    reRenderUI()
function reRenderUI () {
    if (window.localStorage.getItem('loggedin') == 'false') {
                console.log('boo')
        document.getElementById('todocontent').setAttribute('hidden', 'hidden')
        document.getElementById('catcontent').setAttribute('hidden', 'hidden')
        document.getElementById('authcontent').removeAttribute('hidden')
    } else {
            console.log('hoo')
        document.getElementById('authcontent').setAttribute('hidden', 'hidden')
        document.getElementById('todocontent').removeAttribute('hidden')
        document.getElementById('catcontent').removeAttribute('hidden')
    }
}
// Login
function login(e) {
    e.preventDefault();
    console.log(e);
    var theFormData = {};
    for (i=0;i<e.target.length;i++) {
        theFormData[e.target[i].name] =
            e.target[i].value;
    }
    fetch(e.target.action, 
        {
            method: 'POST',
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(
        function (headers) {
            if (headers.status === 401) {
                window.localStorage.setItem('loggedin', 'false')
                reRenderUI()
                console.log('login failed')
                return
            }
            if (headers.status === 200) {
                window.localStorage.setItem('loggedin', 'true')
                reRenderUI()
                console.log('login success')
                return
            }
        }
    );
}

function register(e) {
    e.preventDefault();
    // console.log(e);
    var theFormData = {};
    for (i=0;i<e.target.length;i++) {
        theFormData[e.target[i].name] =
            e.target[i].value;
    }
    fetch(e.target.action,
        {
            method: 'PUT',
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(
        function (headers) {
            if (headers.status === 201) {
                console.log('New User Registered Successfully');
                return
            }
        }
    )
}

function userExists(e) {
    e.preventDefault();
    // console.log(e);
    url = '/api/doesuserexist' + '?username=' + 
        e.target.value;
    fetch(url, 
        {
            method: 'GET',
            credentials: 'include'
        }
    )
    .then(
        function (headers) {
            if (headers.status === 200) {
                console.log('user already exists')
                return
            }
            if (headers.status === 204) {
                console.log("user doesn't exist")
                return
            }
        }
    );
}

function emailExists(e) {
    e.preventDefault();
    // console.log(e);
    url = '/api/doesemailexist' + '?email=' + 
        e.target.value;
    fetch(url, 
        {
            method: 'GET',
            credentials: 'include'
        }
    )
    .then(
        function (headers) {
            if (headers.status === 200) {
                console.log('email already exists')
                return
            }
            if (headers.status === 204) {
                console.log("email doesn't exist")
                return
            }
        }
    );
}

function userloggedin(e) {
    e.preventDefault();
    // console.log(e);
    fetch(e.target.action,
        {
            method: 'GET',
            credentials: 'include'
        }
    )
    .then(
        function (headers) {
            if (headers.status === 401) {
                console.log('not logged in')
                window.localStorage.setItem('loggedin', 'false')
                return
            }
            if (headers.status === 200) {
                console.log('logged in success')
                window.localStorage.setItem('loggedin', 'true')
                return
            }
        }
    );
}

function userlogout(e) {
    e.preventDefault();
    // console.log(e);
    fetch(e.target.action,
        {
            method: 'GET',
            credentials: 'include'
        }
    )
    .then(
        function (headers) {
            if (headers.status === 200) {
                console.log('logged out successfully')
                window.localStorage.setItem('loggedin', 'false')
                reRenderUI()
                return
            }
        }
    );
}

// Categories
function getcategories(e) {
    e.preventDefault();
    // console.log(e);
    fetch(e.target.action,
        {
            method: 'GET',
            credentials: 'include'
        }
    )
    .then(
        function (headers) {
            if (headers.status === 403) {
                console.log('unauthorized')
                return
            }
        }
    );
}

function addcategory(e) {
    e.preventDefault();
    // console.log(e);
    var theFormData = {};
    for (i=0;i<e.target.length;i++) {
        theFormData[e.target[0].name] =
            e.target[0].value;
    }
    fetch(e.target.action, 
        {
            method: 'PUT',
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(
        function (headers) {
            if (headers.status === 403) {
                console.log('unauthorized')
                return
            }
        }
    );
}

function delcategory(e) {
    e.preventDefault();
    // console.log(e);
    var url = e.target.action + '/' + e.target[0].value; 
    fetch(url, 
        {
            method: 'DELETE',
            credentials: 'include'
        }
    )
    .then(
        function (headers) {
            if (headers.status === 403) {
                console.log('unauthorized')
                return
            }
        }
    );
}

function updatecategory(e) {
    e.preventDefault();
    // console.log(e);
    var url = e.target.action + '/' + e.target[0].value;
    var theFormData = {};
    theFormData[e.target[1].name] = 
        e.target[1].value;
    fetch(url, 
        {
            method: 'PATCH',
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(
        function (headers) {
            if (headers.status === 403) {
                console.log('unauthorized')
                return
            }
        }
    );
}

// Items
function gettodos(e) {
    e.preventDefault();
    // console.log(e);
    var url = e.target.action + '/' + e.target[0].value;
    fetch(url,
        {
            method: 'GET',
            credentials: 'include'
        }
    )
    .then(
        function (headers) {
            if (headers.status === 403) {
                console.log('unauthorized')
                return
            }
        }
    );
}

function addtodo(e) {
    e.preventDefault();
    // console.log(e);
    var theFormData = {};
    for (i=0;i<e.target.length;i++) {
        theFormData[e.target[0].name] =
            e.target[0].value;
    }
    fetch(e.target.action, 
        {
            method: 'PUT',
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(
        function (headers) {
            if (headers.status === 403) {
                console.log('unauthorized')
                return
            }
        }
    );
}

function deltodo(e) {
    e.preventDefault();
    // console.log(e);
    var url = e.target.action + '/' + e.target[0].value; 
    fetch(url, 
        {
            method: 'DELETE',
            credentials: 'include'
        }
    )
    .then(
        function (headers) {
            if (headers.status === 403) {
                console.log('unauthorized')
                return
            }
        }
    );
}

function updatetodo(e) {
    e.preventDefault();
    // console.log(e);
    var url = e.target.action + '/' + e.target[0].value;
    var theFormData = {};
    theFormData[e.target[1].name] = 
        e.target[1].value;
    fetch(url, 
        {
            method: 'PATCH',
            body: JSON.stringify(theFormData),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(
        function (headers) {
            if (headers.status === 403) {
                console.log('unauthorized')
                return
            }
        }
    );
}