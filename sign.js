// function validateSignup()
// {
//     var first_name = document.getElementById('first-name').value;
//     var last_name = document.getElementById('last-name').value;
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     var con = document.getElementById('Confirm').value;
//     var error = document.getElementById('error');
    
//     if (first_name === '' || last_name === '' || username === '' || password === '' || con === '')
//     {
//         error.textContent = 'All fields are required.';
        
//     }
//     else if (password !== con)
//     {
//         error.textContent = 'Passwords do not match.';
//     }
//     else {
//         window.location.href = 'login.html';
//     }
// }
// }
////////////////////////////////////////////////////////
function validateSignup() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('Confirm').value;
    const errorMess = document.getElementById('error');

   
    if (firstName === '' || lastName === '' || username === '' || password === '' || confirmPassword === '') {
        errorMess.textContent = 'All fields are required';
    } else if (password !== confirmPassword) {
        errorMess.textContent = 'Password and Confirm Password do not match';
    } else {
  
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    const response = xhr.responseText;
                    if (response === 'success') {
                        window.location.href = 'login.html'; 
                    } else {
                        errorMess.textContent = 'Signup failed. Please try again.';
                    }
                } else {
                    errorMess.textContent = 'Error during signup';
                }
            }
        };

        xhr.open('POST', 'process_signup.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(
            'firstName=' + encodeURIComponent(firstName) +
            '&lastName=' + encodeURIComponent(lastName) +
            '&username=' + encodeURIComponent(username) +
            '&password=' + encodeURIComponent(password)
        );
    }
}
