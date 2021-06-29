import './App.css';
import { useState } from 'react';
import axios from 'axios';



function App() {
  const [Name, setName] = useState("")
  const [Surname, setSurname] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`https://sheet.best/api/sheets/9cf6079a-0c6f-48b5-8d9c-8ccddd7429cc`, { Name, Surname })
    .then(res => { console.log(res)})
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Store the data to Google Sheet</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value) }/><br/>
        <input type="text" placeholder="surname" onChange={(e) => setSurname(e.target.value) } /><br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


//*  COMPONENT LOGIC

// First we sign in into google sheets using our mail
// Second we grab the link of the sheet as public link
// Third we sign in to https://sheet.best 
// Fourth the link grabed from Google Sheet we use in Sheet.best to generate an API
// Fifth, the new API URL grabed from the Sheet.best we use for Axios PUT request, and than we passe the values to the API
//! in the google sheet we define the name for each field, than in the Axios Request we use the same name to pass data 
//! For example: In my google shet a have field with the name "Name" so in my state hook for the name i use the same string for this particular data
