import Button from '@material-ui/core/Button';


const SecondStep = (Props) => {
    const { PublicServantPersone, setPublicServantPersone, setSteps , Steps} = Props
    const SetFormStep = () => {setSteps(Steps + 1)}
    const PublicServant = <p className="not_eligible_text">Cette offre n'est pas disponible pour le statut de fonctionnaire</p>
    const NotAPublicServant = <div><Button variant="contained" color="primary" onClick={SetFormStep}>Suivant</Button></div>
    const PublicServantOrNot = PublicServantPersone ? PublicServant : NotAPublicServant
    const SecondStepBtnClicked = PublicServantPersone !== "" ? PublicServantOrNot : null

    return (
        <div className="second_step">
            <h2>Êtes-vous fonctionnaire ?</h2>
            <button onClick={() => setPublicServantPersone(true)}>Oui</button>
            <button onClick={() => setPublicServantPersone(false)}>Non</button>
            { SecondStepBtnClicked }
        </div>
    )
}

export default SecondStep