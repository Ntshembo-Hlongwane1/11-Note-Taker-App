const express = require("express");
const router = express.Router();
const app = express();
const path = require("path");
const fs = require('fs')
const uuid = require('uuid')

router.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"))
});

// Post function to add new notes to db.json
router.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("Develop/db/db.json"));
    const newNotes = req.body;
    newNotes.id = uuid.v4();
    notes.push(newNotes);
    fs.writeFileSync("Develop/db/db.json", JSON.stringify(notes))
    res.json(notes);
});

//used for deleting notes
router.delete("/api/notes/:id", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("Develop/db/db.json"));
    const delNote = notes.filter((rmvNote) => rmvNote.id !== req.params.id);
    fs.writeFileSync("Develop/db/db.json", JSON.stringify(delNote));
    res.json(delNote);
})


//HTML calls
//calls home page
router.get("/public/index.html", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
    // console.log(get);
    // console.log(join);
});
//call for notes.html
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});



module.exports = router
