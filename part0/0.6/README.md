# Exercise 0.6: New note in Single page app diagram

Create a diagram depicting the situation where the user creates a new note using the single-page version of the app.

## Solution:

```mermaid
sequenceDiagram
participant br as browser
participant sv as server

br->>+sv: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Note right of br: When creating a new note, the browser makes a POST request to the server sending the content of the note.

sv-->>-br: Response: { message: "note created" }
Note left of sv: The server responds with a message indicating that the note has been created and the created note is displayed in the browser.
```