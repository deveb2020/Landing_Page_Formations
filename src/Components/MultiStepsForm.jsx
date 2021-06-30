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
        await axios.post(`https://sheet.best/api/sheets/9cf6079a-0c6f-48b5-8d9c-8ccddd7429cc`, { Name, FamilyName, Email, PhoneNumber, value })
        .then(res => { console.log(res)})
        .catch(err => console.log(err))
    }

    return (
        <div className="Form">
            <h5>Testez votre éligibilité en 30 secondes (étape {Steps}/4)</h5>
            { Steps === 1 && <FirstStep Eligible={Eligible} setEligible={setEligible} Steps={Steps} setSteps={setSteps} /> }
            { Steps === 2 && <SecondStep PublicServantPersone={PublicServantPersone} setPublicServantPersone={setPublicServantPersone} Steps={Steps} setSteps={setSteps} /> }
            { Steps === 3 && <ThirdStep setSteps={setSteps} Steps={Steps} setValue={setValue} value={value}  />}
            { Steps === 4 && <FourthStepForm handleSubmit={handleSubmit} Steps={Steps} setSteps={setSteps} setName={setName} setFamillyName={setFamillyName} setEmail={setEmail} setPhoneNumber={setPhoneNumber}/> }
        </div>
    );
}

export default MultiStepsForm


