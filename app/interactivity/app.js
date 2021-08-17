console.log('ToDo App');
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
    );
}

function userexists(e) {
    e.preventDefault();
    // console.log(e);
    url = e.target.action + '?username=' + 
        e.target[0].value;
    fetch(url, 
        {
            method: 'GET',
            credentials: 'include'
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
    );
}