// import express from "express";
// import cors from "cors";
// import "./loadEnvironment.mjs";
// import "express-async-errors";
// import countdowns from "./routes/countdowns.mjs";

// const PORT = process.env.PORT || 5050;
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Load the /countdowns routes
// app.use("/countdowns", countdowns);

// // Global error handling
// app.use((err, _req, res, next) => {
//   res.status(500).send("Uh oh! An unexpected error occured.")
// })

// // start the Express server
// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

var express = require("express");
var app = express();


app.get("/",function(req,res){
        res.send("<h1>Oi mate</h1>");
});

app.listen(80);
