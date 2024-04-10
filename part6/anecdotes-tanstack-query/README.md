# Solution to exercise 6.20 to 6.24 - Anecdotes v2
Full Stack open course

Creating a new version of the anecdote application but this time using React Query or as it is now called Tanstack Query to handle obtaining data from the server and creating new data, for example when creating a new anecdote the request is made once The request was completed and was successful, the state is invalidated and a request is made to the server again to obtain all the anecdotes again. In case of error an error message is displayed.
When updating an anecdote (increasing its votes) you can also modify the status of all the anecdotes without having to invalidate it and have Tanstack Query make a request to the server again to obtain all the data. It is as easy as obtaining the state, modifying it and replacing it.

The use of useReducer, a React hook, and the creation of contexts and custom Hooks to obtain data from the contexts were also implemented.
