1. Install Node.js

Download:
Node.js Official Website
Install the LTS version.
After installing, verify in terminal:


node -v //
npm -v //





2. Install MongoDB

Download Community Server:
MongoDB Community Server
During installation:
keep default settings
install MongoDB Compass also (GUI tool)
After install, MongoDB service usually starts automatically.

3. Install VS Code
Visual Studio Code
Recommended extensions:

Thunder Client
MongoDB for VS Code

4. Create Project Folder


mkdir crud-api //
cd crud-api //

Open in VS Code:


code . //


5. Initialize Node Project

Open terminal in VS Code:

npm init -y //


6. Install Required Packages



npm install express mongoose cors //
npm install nodemon --save-dev //


7. Create File Structure

Create these files:

crud-api/
│
├── server.js
├── package.json


8. Replace package.json scripts

Inside package.json add:

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}


9. Complete Simple CRUD Code

Put this entire code in server.js



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/wadcrud")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// Model
const Student = mongoose.model("Student", studentSchema);

// ---------------- CRUD APIs ----------------

// 1. CREATE API
app.post("/addStudent", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.send("Student Added Successfully");
    } catch (err) {
        res.send(err);
    }
});

// 2. READ API
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.send(err);
    }
});

// 3. UPDATE API
app.put("/updateStudent/:id", async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, req.body);
        res.send("Student Updated Successfully");
    } catch (err) {
        res.send(err);
    }
});

// 4. DELETE API
app.delete("/deleteStudent/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.send("Student Deleted Successfully");
    } catch (err) {
        res.send(err);
    }
});

// Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});



10. Run the Project
npm run dev

You should see:

MongoDB Connected
Server running on port 5000


11. Test APIs Using Thunder Client / Postman
CREATE

Method: POST

http://localhost:5000/addStudent

Body → JSON

{
  "name": "Mohit",
  "age": 21,
  "course": "IT"
}
READ

Method: GET

http://localhost:5000/students
UPDATE

Method: PUT

http://localhost:5000/updateStudent/PASTE_ID_HERE

Body:

{
  "name": "Rahul",
  "age": 22,
  "course": "Computer"
}
DELETE

Method: DELETE

http://localhost:5000/deleteStudent/PASTE_ID_HERE
Viva Questions They May Ask
What is ExpressJS?

Framework for building web applications and APIs in Node.js.

What is MongoDB?

NoSQL database storing data in JSON-like documents.

What is Mongoose?

ODM library used to interact with MongoDB.

Difference between PUT and POST?
POST → Create data
PUT → Update data
What is middleware?

Functions executed before request reaches route.