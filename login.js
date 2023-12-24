function gosign() {
    var btn1 = document.getElementById('btns');
    if (btn1.onclick) {
        window.location.href = 'signup.html';
    }
}
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    var error_mess = document.getElementById('error');
    if (username === '' || password=== '')
    {
        error_mess.textContent = 'username and password are required';

    }
    else {
        window.location.href='index.html'
        error_mess.style.color = 'orange';
    }
}

///////////////////////////////////////////////////
// function validateLogin() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const errorMess = document.getElementById('error');

//     if (username === '' || password === '') {
//         errorMess.textContent = 'Username and password are required';
//     } else {
//         // Make an AJAX request to the PHP script
//         const xhr = new XMLHttpRequest();
//         const url = 'login.php';  // Change this to the correct URL

//         xhr.open('POST', url, true);
//         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState == 4) {
//                 if (xhr.status == 200) {
//                     // Check the response from the server
//                     if (xhr.responseText === 'Success') {
//                         // Redirect to index.html if login is successful
//                         window.location.href = 'index.html';
//                     } else {
//                         // Display an alert for invalid login
//                         alert('Invalid login');
//                     }
//                 } else {
//                     // Display an alert for connection error
//                     alert('Connection error');
//                 }
//             }
//         };

//         // Send the request with the user credentials
//         const data = 'email=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
//         xhr.send(data);

//         errorMess.style.color = 'orange';
//     }
// }
////////////////////////////////////////////////////////////////////////

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userDatabase='mo@gmail.com';
    const passDatabase='00000000';
    var error_mess = document.getElementById('error');
    if (username === '' || password=== '')
    {
        error_mess.textContent = 'username and password are required';

    }else if(username===userDatabase && password===passDatabase){
        window.location.href='index.html'
    }
    else {
        
        alert("login failed")
    }
}