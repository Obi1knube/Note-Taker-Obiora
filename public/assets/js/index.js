
// Function to fetch all notes from the server
function fetchNotes() {
  fetch('/api/notes')
    .then(response => response.json())
    .then(notes => {
      // Process the retrieved notes
      console.log(notes);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

// Function to create a new note on the server
function createNote() {
  const note = {
    title: 'New Note',
    text: 'This is a new note'
  };

  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  })
    .then(response => response.json())
    .then(newNote => {
      // Process the new note
      console.log(newNote);
    })
    .catch(error => {
      // Handle any errors
      console.error(error);
    });
}

// Call the functions to fetch notes and create a new note
fetchNotes();
createNote();