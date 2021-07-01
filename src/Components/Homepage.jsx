import "../Style/Homepage.css"
import BckPhoto from "../Images/adobestock-86512117.jpeg"
import Logo from "../Images/logo-cpf.png"

const Homepage = () => {
    return (
        <div className="homepage">
            <img className="bacground_photo_cover" src={BckPhoto} alt="photoCover" />
            <div className="logo">
                <img className="photo_logo" src={Logo} alt="photoCover" />
            </div>
            <div className="info_text">
                <h2>COMPTE PERSONNEL DE FORMATION (CPF)</h2>
                <p className="second_paragraph">OBTENEZ VOTRE FORMATION</p>
                <p className="second_paragraph"><b>100% PRISE EN CHARGE PAR L'ETAT</b></p>
            </div>
        </div>
    )
}

export default Homepage
