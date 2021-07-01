import "../Style/Courses.css"
import Language from "../Images/Langue.jpg"
import OfficeTools from "../Images/marketing.jpg"
import SocialMedia from "../Images/reseau.jpg"
import Marketing from "../Images/seo.jpg"

const Courses = () => {
    return (
        <div className="courses_section">
            <h2>NOS FORMATIONS</h2>
            <h4>Développez vos compétences professionnelles et démarquez vous face à la concurrence</h4>
            <p className="descriptive_courses_paragraph">Au gré de son calendrier et de ses disponibilités, l’apprenant retrouve son professeur
                pour des séances interactives animées par des supports de cours dynamiques et ludiques,
                dont les participants peuvent garder la trace.<b>La technologie se met au service de la pédagogie pour une progression maximale !</b>
            </p>
            <div className="courses_list">
                <div className="languages container">
                    <img src={Language} alt="languages" />
                    <h3>LANGUES ETRANGERES</h3>
                    <p>Anglais, Espagnol, Italien, Allemand, Français, Arabe littéraire, Japonais.</p>
                </div>
                <div className="office_tools container">
                    <img src={OfficeTools} alt="office_tools" />
                    <h3>BUREAUTIQUE</h3>
                    <p>Office365, Word, Excel, Outlook, Power Point</p>

                </div>
                <div className="social_media container">
                    <img src={SocialMedia} alt="social_media" />
                    <h3>RESEAUX SOCIAUX</h3>
                    <p>Facebook, Twitter, Linkedin et Google.</p>

                </div>
                <div className="digital_marketing container">
                    <img src={Marketing} alt="digital_marketing" />
                    <h3>MARKETING DIGITAL</h3>
                    <p>Développez votre activité sur internet : SEO, Réseaux, Copywriting, …</p>

                </div>
            </div>
        </div>
    )
}

export default Courses
