const express = require("express");
const fs = require("fs");
const notes = require("../11-Note-Taker-App/Develop/db/db.json");
const path = require("path");
const routes = require("./Develop/routes/index")
const { DH_CHECK_P_NOT_SAFE_PRIME } = require("constants");
const cors = require("cors");

const app = express();
var PORT = process.env.PORT || 4023;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./Develop/routes/", routes));
app.use(cors());
// //Setting routes for APIs
// //This gets notes saved and joins it in db.json
// app.get("/api/notes", (req, res) => {
//     res.sendFile(path.join(__dirname, "./db/db.json"))
// });

// // Post function to add new notes to db.json
// app.post("/api/notes", (req, res) => {
//     const notes = JSON.parse(fs.readFileSync("Develop/db/db.json"));
//     const newNotes = req.body;
//     newNotes.id = uuid.v4();
//     notes.push(newNotes);
//     fs.writeFileSync("Develop/db/db.json", JSON.stringify(notes))
//     res.json(notes);
// });

// //used for deleting notes
// app.delete("/api/notes/:id", (req, res) => {
//     const notes = JSON.parse(fs.readFileSync("Develop/db/db.json"));
//     const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
//     fs.writeFileSync("Develop/db/db.json", JSON.stringify(delNote));
//     res.json(delNote);
// })


// //HTML calls
// //calls home page
// app.get("/public/index.html", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
//     console.log(get);
//     console.log(join);
// });
// //call for notes.html
// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// //Start listen
// app.listen(PORT, function () {
//     console.log("App listening on PORT: " + PORT);
// });