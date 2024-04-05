# Solution to exercise 4.1 to 4.23 - Blog list server
Full Stack open course

In this part of the course, I developed the REST API for blogs with token authentication. To create a blog or delete it, the access token is required to perform the action. To obtain the token, a POST request is made to the /api/login route with the username and password of the user.

The results between the GET requests that show the users, the blogs or just one of them by means of the ID also show the blogs or the related user, in the case of users it will show a list of the blogs that each user has, in In the case of blogs, each blog will show the user to which it belongs. Although MongoDB is used as a database, being a non-relational database, these relationships are obtained by making extra requests through a method in mongoose.

I learned the basics of testing with Jest and Supertest for the routes that exist.
