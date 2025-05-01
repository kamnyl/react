import aboutImg from "../assets/IMG_2672.jpg";
import "../styles/about.css";
import "../styles/index.css";

function About() {
    return (
        <>
        <div className="about-container">
            <div className="img-container">
            <img src={aboutImg} alt="Pic" className="about-image" />
            </div>
            <div className="text-container">
            <h1 className="about-title">Hello</h1>
            <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Earum praesentium esse tempore exercitationem nam autem. 
                Quibusdam quas, dicta corporis porro fugiat hic, nesciunt itaque, 
                tenetur ipsum eius quasi omnis dolores.</p>
                <button className="contact-button">Contact</button>
            </div>
        
        </div>
        </>
    );
}

export default About