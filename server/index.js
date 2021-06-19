const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '2308',
    database: 'Medi-GO',
});

app.post('/create', (req, res)=>{
    const fever = req.body.fever;
    const dryCough = req.body.dryCough;
    const tiredness = req.body.tiredness;
    const achesAndPains = req.body.achesAndPains;
    const soreThroat = req.body.soreThroat;
    const diarrhea = req.body.diarrhea;
    const conjunctivitis = req.body.conjunctivitis;
    const headache = req.body.headache;
    const lossOfTasteOrSmell = req.body.lossOfTasteOrSmell;
    const rash = req.body.rash;
    const difficultyBreathing = req.body.difficultyBreathing;
    const chestPain = req.body.chestPain;
    const lossOfSpeechOrMovement = req.body.lossOfSpeechOrMovement;

    db.query('INSERT INTO Answers (fever, dryCough, tiredness, achesAndPains, soreThroat, diarrhea, conjunctivitis, headache, lossOfTasteOrSmell, rash, difficultyBreathing, chestPain, lossOfSpeechOrMovement) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [fever, dryCough, tiredness, achesAndPains, soreThroat, diarrhea, conjunctivitis, headache, lossOfTasteOrSmell, rash, difficultyBreathing, chestPain, lossOfSpeechOrMovement], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values Inserted")
        }
    });
});

app.listen(3001, ()=> {
    console.log("Server is running");
});