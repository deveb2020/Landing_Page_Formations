import Button from '@material-ui/core/Button';

const FirstStep = (Props) => {
    const {Eligible, setEligible, setSteps, Steps} = Props
    const SetFormStep = () => {setSteps(Steps + 1)}
    const ShowNotEligibleText = <p>Si vous avez moins de 2 années d'activité en France vous ne pourrez pas bénéficier d'une prise en charge intégrale des frais pédagogiques.</p>
    const ContinueButton = <div><Button variant="contained" color="primary" onClick={SetFormStep}>SUIVANT</Button></div>
    const DisplayTheRightContent = Eligible ? ContinueButton : ShowNotEligibleText
    const RenderElementsOnlyWhenClicked = Eligible !== "" ? DisplayTheRightContent : null
    

    return (
        <>
            <p>Au cours des 5 dernières années, combien de temps avez-vous travaillé</p>
            <button 
                className='first_step_btn'
                onClick={() => setEligible(false)}
            >Jamais</button>
            <button 
                className='first_step_btn' 
                onClick={() => setEligible(false)}
            >0 à 2 ans</button>
            <button 
                className='first_step_btn' 
                onClick={() => setEligible(true)}
            >2 ans ou plus</button>
            { RenderElementsOnlyWhenClicked }
        </>
    )
} 

export default FirstStep