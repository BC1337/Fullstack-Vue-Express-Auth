# Fullstack Vue Express Auth

This is a boilerplate project for creating a fullstack web application with Vue.js, Express, and authentication.

The project is split into two main folders:

- `client`: A Vue.js frontend application that communicates with the Express backend.
- `server`: An Express backend API with authentication using Passport.js and JSON Web Tokens (JWT).

## Getting Started

To get started, you will need to clone this repository to your local machine:

git clone https://github.com/BC1337/Fullstack-Vue-Express-Auth.git


Next, you will need to install the dependencies for both the client and server applications:

cd client
npm install

cd ../server
npm install


Once you have installed the dependencies, you can start the development servers:

cd client
npm run serve

cd ../server
npm run dev

The client application will be running on [http://localhost:8080](http://localhost:8080) and the server API will be running on [http://localhost:3000](http://localhost:3000).

## Features

- Vue.js frontend with crud actions, user authentication & global state managment with Pinia
- Express backend API with authentication using bcrypt and JSON Web Tokens (JWT).
- MongoDB database with Mongoose ORM.
- JWT refresh tokens to improve security.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
