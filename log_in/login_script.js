var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    } 
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
// Check the matching of password
var checkPsw = function() {
    if(document.getElementById('password').value == document.getElementById('confirm-password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'MATCHING';
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'NOT MATCHING';
    }
}
// Direct to main web
function directFunction() {
    window.location.replace("../menu/menu.html")
}
//Get the input values of login form
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
// Create data
const data = {
    username: username,
    password: password
};
// Send data to backend
document.getElementById('id01').addEventListener('submit', function(event) {
    event.preventDefault();
    fetch('http://localhost:3000/signedin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData);
    })
    .catch(error => {
        console.error('Error', error);
    });
})
