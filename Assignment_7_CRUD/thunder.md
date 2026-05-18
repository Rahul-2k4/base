Step 1: Install Thunder Client Extension

In VS Code:

Left sidebar → Extensions
Search: Thunder Client
Install it
Step 2: Open Thunder Client

Left sidebar → Thunder icon

Click:

New Request
Step 3: Test CREATE API

Method:

POST

URL:

http://localhost:5000/addStudent

Go to:

Body → JSON

Paste:

{
  "name": "Mohit",
  "age": 21,
  "course": "IT"
}

Click:

Send

You should get:

Student Added Successfully
Step 4: Test READ API

Create new request.

Method:

GET

URL:

http://localhost:5000/students

Click Send.

You should see something like:

[
  {
    "_id": "689abc123...",
    "name": "Mohit",
    "age": 21,
    "course": "IT",
    "__v": 0
  }
]

IMPORTANT:
Copy the _id.

You need it for Update/Delete.

Step 5: Test UPDATE API

Method:

PUT

URL:

http://localhost:5000/updateStudent/PASTE_ID_HERE

Example:

http://localhost:5000/updateStudent/689abc123

Body → JSON

{
  "name": "Rahul",
  "age": 22,
  "course": "Computer"
}

Send.

Output:

Student Updated Successfully
Step 6: Test DELETE API

Method:

DELETE

URL:

http://localhost:5000/deleteStudent/PASTE_ID_HERE

Send.

Output:

Student Deleted Successfully
Step 7: Verify Delete

Again run:

GET http://localhost:5000/students

Array should become empty or updated.

What To Show in Practical

Teacher usually checks:

MongoDB connected
CRUD APIs working
Data storing in DB

So while running:

Keep terminal open
Run APIs one by one
Show output in Thunder Client
Bonus (Very Important)

Open MongoDB Compass.

Connection string:

mongodb://127.0.0.1:27017

Then:

Open database wadcrud
Open collection students

Teacher gets impressed when you show database entries visually.