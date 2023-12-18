# 11 Express.js: Note Taker

## My Task

My assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

This application handles DELETE requests:

\* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Review & Results

I have implemented server.js and used it developed a fully functioning app. The app allows user to add new note, Save a new note, update existing note, and delete stored notes

For the review, I am required to share both the URL of the following:

\* The URL of the functional, deployed application on heroku: https://dashboard.heroku.com/apps/calm-thicket-07664

\* The URL of the GitHub repository: https://github.com/Obi1knube/Note-Taker-Obiora

## Algorithm of Note-Taker-Obiora

To begin implementing the Note Taker application, you can follow these steps:

1. Set up the project structure:
   ◦ Create a new directory for your project.
   ◦ Initialize a new Node.js project using npm init.
   ◦ Install the necessary dependencies, such as Express.js, using npm install.

2. Create the server:
   ◦ Create a new JavaScript file, e.g., server.js, to define and start the Express.js server.
   ◦ Import the necessary modules, such as Express.js and path.
   ◦ Set up the server by creating an instance of the Express.js app and specifying the port to listen on.
   ◦ Add middleware to handle JSON data and serve static files.

3. Create the HTML templates:
   ◦ Create an HTML file for the landing page that contains a link to the notes page.
   ◦ Create an HTML file for the notes page that displays existing notes in the left-hand column and provides empty fields to enter a new note title and text in the right-hand column.

4. Implement the routes:
   ◦ Define the necessary routes in the server.js file to handle requests for the landing page and the notes page.
   ◦ Create a route to handle saving a new note when the "Save Note" button is clicked.
   ◦ Create a route to handle retrieving existing notes and displaying them in the left-hand column.
   ◦ Create a route to handle retrieving a specific note and displaying it in the right-hand column.

5. Implement the functionality:
   ◦ Add client-side JavaScript to handle user interactions, such as submitting a new note and displaying the selected note.
   ◦ Use AJAX or Fetch API to send requests to the server and update the UI accordingly.

6. Test the application:
   ◦ Start the server and open the application in a web browser.
   ◦ Verify that the landing page is displayed correctly and the link to the notes page works.
   ◦ Test creating a new note, saving it, and verifying that it appears in the left-hand column.
   ◦ Test selecting an existing note and verifying that it appears in the right-hand column.
   ◦ Test creating a new note after selecting an existing note and verify that the fields are cleared.

- - - ***
      © 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
