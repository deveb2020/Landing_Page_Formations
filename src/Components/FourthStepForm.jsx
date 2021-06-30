import Button from '@material-ui/core/Button';

const FourthStepForm = (Props) => {
    const { setSteps, Steps, setName, setFamillyName, setEmail, setPhoneNumber, handleSubmit } = Props
    const SetFormStep = () => {setSteps(Steps - 1)}

    return (
        <div className="fourth_page">
            <h3>Veuillez remplir les informations, un conseiller vous recontactera prochainement :</h3>
            <input type="text" placeholder="Votre Prénom" onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Votre Nom" onChange={(e) => setFamillyName(e.target.value)} />
            <input type="text" placeholder="Votre Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="number" placeholder="Votre Téléphone" onChange={(e) => setPhoneNumber(e.target.value)} /><br />
            <Button variant="contained" color="primary" onClick={SetFormStep}>RETOUR</Button>
            <Button variant="contained" color="primary" onClick={handleSubmit} >VALIDER</Button>
        </div>
    )
}

export default FourthStepForm
