import startImg from "../assets/IMG_4234.jpg";
import "../styles/home.css";
import "../styles/index.css";

function Home() {
    return (
        <div className="home-container">
            <img src={startImg} alt="Pic" className="home-image" />
        </div>
    );
}

export default Home