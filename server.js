// Import necessary modules
const express = require("express");
const path = require("path");
const fs = require("fs");

// Set up the Express.js app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to handle JSON data
app.use(express.json());
// Middleware to serve static files
app.use(express.static("public"));

// Route to read the db.json file and return all saved notes as JSON
app.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      const notes = JSON.parse(data);
      res.json(notes);
    }
  });
});

// Route to receive a new note, add it to the db.json file, and return the new note to the client
app.post("/api/notes", (req, res) => {
  const newNote = req.body;

  fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      const notes = JSON.parse(data);
      const newNoteWithId = { ...newNote, id: generateUniqueId() };
      notes.push(newNoteWithId);

      fs.writeFile(
        path.join(__dirname, "db", "db.json"),
        JSON.stringify(notes),
        "utf8",
        (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
          } else {
            res.json(newNoteWithId);
          }
        }
      );
    }
  });
});

// Helper function to generate a unique id for a note
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Route to return the notes.html file
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// Route to return the index.html file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

//module.exports = app;
