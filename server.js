// Import the express library.
// Import the built-in path module, which will help you create correct 
// file paths.
// Create an instance of an Express application.
// Define a port to run the server on (e.g., 3000).
// Create a route handler for GET requests to the root URL (/). When this
//  route is requested, it should
// send the index.html file from your public directory.
// Create another route handler for GET requests to /contact.
//  This should send the contact.html file.
// Start the server and have it listen on your chosen port. When it starts, 
// it should log a message to
// the console, like Server is running on port 3000.
// Hint: To send a file, you’ll need to provide an absolute path. 
// Use path.join(__dirname, 'public/index.html') to create a reliable 
// path to your HTML files.

import express from "express";
import path from "path";

const app = express();

const port = 1563;

const _dirname = import.meta.dirname;
console.log(_dirname);

app.use(express.static(path.join(_dirname, "public")));

app.get("/contact", (req, res) => {
  res.sendFile(path.join(_dirname, "public/contact.html"));
});

// Quinn was showing us something cool, we ran out of time 🥹
// app.get("*", (req, res) => {
//   res.send("404");
// });

app.listen(port, () => {
  console.log("Server listening on port: " + port);
});
