// Get form
const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    // Get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;

    // Create object
    let user = {
        name: name,
        email: email,
        mobile: mobile
    };

    // Get old data
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Push new data
    users.push(user);

    // Store again
    localStorage.setItem("users", JSON.stringify(users));

    // AJAX POST Request
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.send(JSON.stringify(user));

    alert("Registration Successful");

    form.reset();
});