import { useState } from 'react';
import axios from 'axios';
import '../Style/Form.css'
import FirstStep from "../Components/FirstStepForm"
import SecondStep from "../Components/SecondStepForm"
import ThirdStep from "../Components/ThirdStepForm"
import FourthStepForm from "../Components/FourthStepForm"

const MultiStepsForm = () => {

    const [Eligible, setEligible] = useState("")
    const [PublicServantPersone, setPublicServantPersone] = useState("")
    const [Steps, setSteps] = useState(1)
    const [Name, setName] = useState('');
    const [FamilyName, setFamillyName] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`https://sheet.best/api/sheets/80a36de4-356c-46ce-a098-9fa09bff8a83`, { Name, FamilyName, Email, PhoneNumber, value })
        .then(res => { console.log(res)})
        .catch(err => console.log(err))
        alert("Donner envoyer !")
    }

    return (
    <div className="form_section">
        <h2>Testez votre éligibilité en 30 secondes </h2>
        <div className="Form">
            <h5>(étape {Steps}/4)</h5>
            { Steps === 1 && <FirstStep Eligible={Eligible} setEligible={setEligible} Steps={Steps} setSteps={setSteps} /> }
            { Steps === 2 && <SecondStep PublicServantPersone={PublicServantPersone} setPublicServantPersone={setPublicServantPersone} Steps={Steps} setSteps={setSteps} /> }
            { Steps === 3 && <ThirdStep setSteps={setSteps} Steps={Steps} setValue={setValue} value={value}  />}
            { Steps === 4 && <FourthStepForm handleSubmit={handleSubmit} Steps={Steps} setSteps={setSteps} setName={setName} setFamillyName={setFamillyName} setEmail={setEmail} setPhoneNumber={setPhoneNumber}/> }
        </div>
    </div>
    );
}

export default MultiStepsForm


