## ECDSA Node Project

This project demonstrates the use of a client-server architecture to facilitate transfers between different addresses using Elliptic Curve Digital Signatures (ECDSA). The server, though centralized, is designed to verify and authorize transfers only if they are signed by the owner of the corresponding address. This ensures that only legitimate transactions are processed.

### Client

The client is a React application bootstrapped with Vite. To run the client:

1. Navigate to the `/client` folder in the terminal.
2. Install dependencies with `npm install`.
3. Start the application with `npm run dev`.
4. Access the app at [http://127.0.0.1:5173/](http://127.0.0.1:5173/).

### Server

The server is built with Node.js and Express. To run the server:

1. Navigate to the `/server` folder in the terminal.
2. Install dependencies with `npm install`.
3. Start the server with `node index`.

The server will connect to the default port 5173 automatically. For automatic restarts during development, use `nodemon` instead of `node`.
