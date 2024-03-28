# Exercise 0.4: New note diagram

Create a diagram that describes the situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by typing something in the text field and clicking the Save button.

If necessary, display the operations in the browser or on the server as comments on the diagram.

The diagram does not have to be a sequence diagram. Any sensible way to present events is fine.

All the information needed to do this, and the next two exercises, can be found in the text of [this part](https://fullstackopen.com/es/part0/fundamentos_de_las_aplicaciones_web#formularios-y-http-post). The idea of these exercises is to read the text one more time and think about what is happening there. It is not necessary to read the application [code](https://github.com/mluukkai/example_app) but of course it is possible.

You can create the diagrams with any program, but perhaps the best and easiest way to make diagrams is using the Mermaid syntax which is now implemented in GitHub Markdown Pages.

## Result:

```mermaid
sequenceDiagram
participant browser
participant server

browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Note over browser, server: The browser sends the new message to the server through a POST request

server-->>-browser: Status code 302 Redirect
Note over browser, server: The server responds indicating that a redirection must be made to the /exampleapp/notes path

browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->>-browser: the HTML

browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>-browser: the CSS file

browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->>-browser: the JavaScript file

Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->>-browser: [{ "content": "Hello", "date": "2024-03-27..." }, ... ]

Note right of browser: The browser executes the callback function that renders the notes
```