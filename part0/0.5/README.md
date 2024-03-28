# Exercise 0.5: Single page app diagram

Create a diagram depicting the situation where the user goes to the [single-page app](https://fullstackopen.com/en/part0/fundamentals_of_web_apps#single-page-app) version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

## Solution:

```mermaid
sequenceDiagram
browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->>-browser: HTML document

browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->>-browser: CSS file

browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server-->>-browser: JavaScript file

browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
Note over browser, server: The JS file is executed and makes a request to the server to obtain the data
server-->>-browser: JSON data = [ { "content": "hola", "date": "2024-03-28..." }, ... ]
Note over server, browser: When receiving the data in JS, it renders the content
```