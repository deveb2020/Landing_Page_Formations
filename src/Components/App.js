import '../Style/App.css';
import AboutCPF from './AboutCPF';
import Courses from './Courses';
import Homepage from './Homepage';
import Form from "./MultiStepsForm"


function App() {


    return (
        <>
            <Homepage/>
            <Form/>
            <Courses/>
            <AboutCPF/>
        </>
    );
}

export default App;


//*  APP LOGIC

// First we sign in into google sheets using our mail
// Second we grab the link of the sheet as public link
// Third we sign in to https://sheet.best 
// Fourth the link grabed from Google Sheet we use in Sheet.best to generate an API
// Fifth, the new API URL grabed from the Sheet.best we use for Axios PUT request, and than we passe the values to the API
//! in the google sheet we define the name for each field, than in the Axios Request we use the same name to pass data 
//! For example: In my google shet a have field with the name "Name" so in my state hook for the name i use the same string for this particular data
