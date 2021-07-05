import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Englaandflag from "../Images/england.png"
import GermannyFlag from "../Images/germanny.png"
import SpainFlag from "../Images/spain.png"
import ItalyFlag from "../Images/italy.png"
import Word from "../Images/Word.png"
import Outlook from "../Images/outlook.jpg"
import Excel from "../Images/exel.png"
import Powerpoint from "../Images/powerpoint.png"
import Office365 from "../Images/packoffice.png"


    const ThirdStep = (Props) => {
        const { setSteps, Steps,setValue, value } = Props
        const SetFormStep = () => {setSteps(Steps - 1)}
        const isAnyCourseSelected = value !== "" ? false : true
        const handleChange = (event) => { setValue(event.target.value)}
        const englandFLAG = <span className='flags'><img src={Englaandflag} alt="Anglais" /> Anglais</span>
        const germnannyFLAG = <span className='flags'><img src={GermannyFlag} alt="Anglais" /> Allemand</span>
        const spainFLAG = <span className='flags'><img src={SpainFlag} alt="Anglais" /> Espagnol</span>
        const italyFLAG = <span className='flags'><img src={ItalyFlag} alt="Anglais" /> Italien</span>
        const wordICON = <span className='flags'><img src={Word} alt="Anglais" /> Word</span>
        const outlookICON = <span className='flags'><img src={Outlook} alt="Anglais" /> Outlook</span>
        const excelICON = <span className='flags'><img src={Excel} alt="Anglais" /> Excel</span>
        const powerpointICON = <span className='flags'><img src={Powerpoint} alt="Anglais" /> Powerpoint</span>
        const office365ICON = <span className='flags'><img src={Office365} alt="Anglais" />  Pack office 365</span>

        return (
            <>
                <h3>Sélectionnez la formation que vous souhaitez :</h3>
                <div className="sections_wrapper">
                    <div className="Languages_container">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Langues :</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="🇬🇧 Anglais" control={<Radio />} label={englandFLAG}/>
                                <FormControlLabel value="🇩🇪 Allemand" control={<Radio />} label={germnannyFLAG} />
                                <FormControlLabel value="🇪🇸 Espagnol" control={<Radio />} label={spainFLAG} />
                                <FormControlLabel value="🇮🇹 Italien" control={<Radio />} label={italyFLAG} />
                                <FormControlLabel value="Autres langues" control={<Radio />} label="Autres langues" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className="Tools_container">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Bureautique :</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="Word" control={<Radio />} label={wordICON} />
                                <FormControlLabel value=" Outlook" control={<Radio />} label={outlookICON} />
                                <FormControlLabel value="Excel" control={<Radio />} label={excelICON} />
                                <FormControlLabel value="Powerpoint" control={<Radio />} label={powerpointICON} />
                                <FormControlLabel value=" Pack office 365" control={<Radio />} label={office365ICON} />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <Button variant="contained" color="primary" onClick={SetFormStep}>RETOUR</Button>
                <Button variant="contained" color="primary" disabled={isAnyCourseSelected} onClick={() => setSteps(4) }>SUIVANT</Button>

            </>  
        )
    }

    export default ThirdStep