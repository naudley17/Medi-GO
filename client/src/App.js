import "./App.css";
import {useState} from "react";
import Axios from "axios";
function App() {

  const [fever, setFever] = useState("");
  const [dryCough, setDryCough] = useState("");
  const [tiredness, setTiredness] = useState("");
  const [achesAndPains, setAchesAndPains] = useState("");
  const [soreThroat, setSoreThroat] = useState("");
  const [diarrhea, setDiarrhea] = useState("");
  const [conjunctivitis, setConjunctivitis] = useState("");
  const [headache, setHeadache] = useState("");
  const [lossOfTasteOrSmell, setLossOfTasteOrSmell] = useState("");
  const [rash, setRash] = useState("");
  const [difficultyBreathing, setDifficultyBreathing] = useState("");
  const [chestPain, setChestPain] = useState("");
  const [lossOfSpeechOrMovement, setLossOfSpeechOrMovement] = useState("");

  const addAnswer = () => {
    Axios.post('http://localhost:3001/create', {
      fever: fever, 
      dryCough: dryCough, 
      tiredness: tiredness, 
      achesAndPains: achesAndPains, 
      soreThroat: soreThroat, 
      diarrhea: diarrhea, 
      conjunctivitis: conjunctivitis, 
      headache: headache, 
      lossOfTasteOrSmell: lossOfTasteOrSmell, 
      rash: rash, 
      difficultyBreathing: difficultyBreathing, 
      chestPain: chestPain, 
      lossOfSpeechOrMovement: lossOfSpeechOrMovement
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">

      <h1>Most Common Symptoms</h1>

      <label>Do you have a fever?</label><br></br>
      <input type="radio" id="yes" name="fever" value="1" onChange={(event)=>{setFever(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="fever" value="0" onChange={(event)=>{setFever(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <label>Do you have dry cough?</label><br></br>
      <input type="radio" id="yes" name="dryCough" value="1" onChange={(event)=>{setDryCough(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="dryCough" value="0" onChange={(event)=>{setDryCough(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <label>Do you have tiredness?</label><br></br>
      <input type="radio" id="yes" name="tiredness" value="1" onChange={(event)=>{setTiredness(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="tiredness" value="0" onChange={(event)=>{setTiredness(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <h2>Less Common Symptoms</h2>

      <label>Do you have aches and pains?</label><br></br>
      <input type="radio" id="yes" name="achesAndPains" value="1" onChange={(event)=>{setAchesAndPains(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="achesAndPains" value="0" onChange={(event)=>{setAchesAndPains(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <label>Do you have sore throat?</label><br></br>
      <input type="radio" id="yes" name="soreThroat" value="1" onChange={(event)=>{setSoreThroat(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="soreThroat" value="0" onChange={(event)=>{setSoreThroat(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <label>Do you have diarrhea?</label><br></br>
      <input type="radio" id="yes" name="diarrhea" value="1" onChange={(event)=>{setDiarrhea(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="diarrhea" value="0" onChange={(event)=>{setDiarrhea(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <label>Do you have <div class="tooltip">conjunctivitis<span class="tooltiptext">red eyes</span></div></label><br></br>
      <input type="radio" id="yes" name="conjunctivitis" value="1" onChange={(event)=>{setConjunctivitis(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="conjunctivitis" value="0" onChange={(event)=>{setConjunctivitis(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <label>Do you have headache?</label><br></br>
      <input type="radio" id="yes" name="headache" value="1" onChange={(event)=>{setHeadache(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="headache" value="0" onChange={(event)=>{setHeadache(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <label>Do you have loss of taste or smell?</label><br></br>
      <input type="radio" id="yes" name="lossOfTasteOrSmell" value="1" onChange={(event)=>{setLossOfTasteOrSmell(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="lossOfTasteOrSmell" value="0" onChange={(event)=>{setLossOfTasteOrSmell(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <label>Do you have a rash on skin, or discolouration of fingers or toes?</label><br></br>
      <input type="radio" id="yes" name="rash" value="1" onChange={(event)=>{setRash(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="rash" value="0" onChange={(event)=>{setRash(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <h1>Severe Symptoms</h1>

      <label>Do you have difficulty breathing or shortness of breath?</label><br></br>
      <input type="radio" id="yes" name="difficultyBreathing" value="1" onChange={(event)=>{setDifficultyBreathing(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="difficultyBreathing" value="0" onChange={(event)=>{setDifficultyBreathing(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <label>Do you have chest pain or pressure?</label><br></br>
      <input type="radio" id="yes" name="chestPain" value="1" onChange={(event)=>{setChestPain(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="chestPain" value="0" onChange={(event)=>{setChestPain(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <label>Do you have loss of speech or movement?</label><br></br>
      <input type="radio" id="yes" name="lossOfSpeechOrMovement" value="1" onChange={(event)=>{setLossOfSpeechOrMovement(event.target.value);}}></input>
      <label for="yes">Yes</label><br></br>
      <input type="radio" id="no" name="lossOfSpeechOrMovement" value="0" onChange={(event)=>{setLossOfSpeechOrMovement(event.target.value);}}></input>
      <label for="no">No</label><br></br>

      <br></br><button onClick={addAnswer}>Submit</button>
    </div>
  );
}

export default App;
