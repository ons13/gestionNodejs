const express = require('express')
const mongoose =require('mongoose')


const app =express()
mongoose.connect('mongodb://localhost/ClientsDBex');

mongoose.connection.on("connected", () => {
	console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
	console.log("mongodb failed with", err);
});
//import routes
const itemRoutes = require("./routes/item.routes");
const categoryRoutes = require("./routes/category.routes");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes middleware
app.use("/items", itemRoutes);
app.use("/categories", categoryRoutes);
//server listening
const port = 8000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});