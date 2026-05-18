Assignment 3.a — Node.js Static Website Complete Step-by-Step Guide

OBJECTIVE

Create a Node.js application that serves a static website using:

* Node.js
* Express.js
* HTML
* CSS

The website contains:

* Home Page
* About Page
* Contact Page

⸻

WHAT IS NODE.JS?

Node.js is a JavaScript runtime environment.

Normally:

JavaScript runs only inside browser.

With Node.js:

JavaScript can run outside browser on server.

Node.js is used for:

* backend development
* APIs
* servers
* database operations
* real-time applications

⸻

WHAT IS EXPRESS.JS?

Express.js is a framework built on top of Node.js.

It simplifies:

* routing
* server creation
* APIs
* middleware handling

Without Express:
Node.js backend becomes more complicated.

⸻

WHAT IS A STATIC WEBSITE?

A static website contains files that do not change dynamically.

Examples:

* HTML
* CSS
* images

Static websites do not use database processing.

⸻

STEP 1 — CREATE PROJECT FOLDER

Create a folder:

assignment3a

Open this folder in VS Code.



STEP 2 — INITIALIZE NODE PROJECT

Open terminal inside VS Code.

Run:

npm init -y

⸻

WHAT THIS DOES

Creates:

package.json

This file stores:

* project information
* dependencies
* scripts
* version information


⸻

UNDERSTANDING THE COMMAND

npm init

Creates Node project.

-y

Automatically accepts default settings.

⸻

STEP 3 — INSTALL EXPRESS

Command:

npm install express

⸻

WHAT THIS DOES

Installs Express.js library.

Creates:

node_modules

folder.

Also updates:

package.json

and:

package-lock.json

⸻

WHAT IS node_modules?

Contains all installed packages/libraries.

Very important folder in Node.js projects.

⸻

STEP 4 — CREATE PROJECT FILES

Create:

server.js

Create folder:

public

Inside public folder create:

index.html
about.html
contact.html
style.css

⸻

PROJECT STRUCTURE

assignment3a/
 ├── node_modules/
 ├── public/
 │    ├── index.html
 │    ├── about.html
 │    ├── contact.html
 │    ├── style.css
 │
 ├── package.json
 ├── package-lock.json
 ├── server.js

⸻

STEP 5 — WRITE SERVER CODE

Open:

server.js

Write:

const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

⸻

EXPLANATION OF EACH LINE

Import Express

const express = require('express');

Imports Express library.

⸻

Import Path Module

const path = require('path');

Used for:

* file paths
* folder paths

Built-in Node.js module.

⸻

Create Express App

const app = express();

Creates Express application/server.

⸻

Define Port

const PORT = 3000;

Application runs on:

localhost:3000

⸻

Serve Static Files

app.use(express.static(path.join(__dirname, 'public')));

Very important line.

Explanation:

Part	Meaning
app.use()	Uses middleware
express.static()	Serves static files
__dirname	Current project directory
public	Static folder

This allows browser to access:

* HTML
* CSS
* images

from public folder.

⸻

Start Server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

Starts Node.js server.

⸻

WHAT IS app.listen()?

It tells server to:

* start running
* listen for browser requests

⸻

STEP 6 — CREATE HOME PAGE

Open:

public/index.html

Write:

<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to Node.js Website</h1>
        <p>This is the Home Page</p>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
    </div>
</body>
</html>

⸻

EXPLANATION

Tag	Purpose
DOCTYPE	HTML5 declaration
head	Metadata section
title	Browser tab title
link	Connect CSS file
body	Main content
a	Hyperlink

⸻

STEP 7 — CREATE ABOUT PAGE

Open:

public/about.html

Write:

<!DOCTYPE html>
<html>
<head>
    <title>About</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>About Page</h1>
        <p>This website is served using Node.js and Express.js.</p>
        <a href="index.html">Home</a>
        <a href="contact.html">Contact</a>
    </div>
</body>
</html>

⸻

STEP 8 — CREATE CONTACT PAGE

Open:

public/contact.html

Write:

<!DOCTYPE html>
<html>
<head>
    <title>Contact</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Contact Page</h1>
        <p>Email: example@gmail.com</p>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
    </div>
</body>
</html>

⸻

STEP 9 — ADD CSS STYLING

Open:

public/style.css

Write:

body {
    font-family: Arial;
    background-color: #f5f7fa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.container {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    text-align: center;
}
a {
    text-decoration: none;
    margin: 10px;
    color: blue;
}

⸻

EXPLANATION OF CSS

Property	Purpose
font-family	Text style
background-color	Background color
display:flex	Flexbox layout
justify-content	Horizontal alignment
align-items	Vertical alignment
border-radius	Rounded corners
box-shadow	Shadow effect

⸻

STEP 10 — RUN SERVER

Command:

node server.js

⸻

WHAT THIS DOES

Runs Node.js application.

Terminal output:

Server running on port 3000

⸻

STEP 11 — OPEN WEBSITE

Open browser:

http://localhost:3000

You should see:

* Home page
* navigation links
* CSS styling

⸻

WEBSITE FLOW

Home Page → About Page → Contact Page

All pages are served by:

* Node.js
* Express.js

⸻

IMPORTANT CONCEPTS

What is Middleware?

Middleware functions execute between:

* request
* response

Example:

app.use(express.static())

⸻

What is localhost?

localhost refers to:

your own computer/server

⸻

What is a Port?

A port is a communication endpoint.

Example:

localhost:3000

3000 is the port number.

⸻

What is __dirname?

__dirname

Represents current project folder path.

⸻

What is Routing?

Routing determines:

* which page loads
* which response is sent

⸻

IMPORTANT VIVA QUESTIONS

What is Node.js?

Node.js is a JavaScript runtime environment that allows JavaScript to run outside browser.

⸻

What is Express.js?

Express.js is a framework built on top of Node.js used for:

* servers
* routing
* APIs

⸻

What is a static website?

A website containing fixed files like:

* HTML
* CSS
* images

without dynamic database processing.

⸻

What is express.static()?

Middleware used to serve static files.

⸻

What is Middleware?

Functions executed between request and response.

⸻

What is package.json?

Stores:

* dependencies
* project configuration
* scripts

⸻

What is node_modules?

Contains installed Node.js packages.

⸻

What is app.listen()?

Starts Express server.

⸻

What is localhost?

Represents current computer/server.

⸻

FINAL OUTPUT FEATURES

✔ Node.js Server
✔ Express.js Server
✔ Static Website
✔ HTML Pages
✔ CSS Styling
✔ Navigation Links
✔ localhost Hosting
✔ Express Middleware