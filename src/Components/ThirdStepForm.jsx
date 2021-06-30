import { useState } from "react"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';


    const ThirdStep = (Props) => {
        const { setSteps, Steps,setValue, value } = Props
        const SetFormStep = () => {setSteps(Steps - 1)}


        const handleChange = (event) => {
            setValue(event.target.value);
        }

        return (
            <>
                <h3>Sélectionnez la formation que vous souhaitez :</h3>
                <div className="sections_wrapper">
                    <div className="Languages_container">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Langues :</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="🇬🇧 Anglais" control={<Radio />} label="🇬🇧 Anglais" />
                                <FormControlLabel value="🇩🇪 Allemand" control={<Radio />} label="🇩🇪 Allemand" />
                                <FormControlLabel value="🇪🇸 Espagnol" control={<Radio />} label="🇪🇸 Espagnol" />
                                <FormControlLabel value="🇮🇹 Italien" control={<Radio />} label="🇮🇹 Italien" />
                                <FormControlLabel value="Autres langues" control={<Radio />} label="Autres langues" />
                            </RadioGroup>
                        </FormControl>
                    </div>

                    <div className="Tools_container">
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Bureautique :</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="Word" control={<Radio />} label="Word" />
                                <FormControlLabel value=" Outlook" control={<Radio />} label=" Outlook" />
                                <FormControlLabel value="Excel" control={<Radio />} label="Excel" />
                                <FormControlLabel value="Powerpoint" control={<Radio />} label="Powerpoint" />
                                <FormControlLabel value=" Pack office 365" control={<Radio />} label=" Pack office 365" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
                <Button variant="contained" color="primary" onClick={SetFormStep}>RETOUR</Button>
                <Button variant="contained" color="primary" onClick={() => setSteps(4) }>SUIVANT</Button>

            </>  
        )
    }

    export default ThirdStep