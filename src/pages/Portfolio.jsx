import Card from "../components/Card.jsx";
import bootstrap from "../assets/bootstrap.png";
import responsive from "../assets/responsive.png";
import genesis from "../assets/genesis.png";

function Portfolio() {
    return (
    <div className="card-container">
    <Card 
      title="Bootstrap"
      text="A project exploring Bootstrap to quickly build a responsive and styled web page using its component library."
      tools="HTML, CSS"
      link="https://github.com/kamnyl/bootstrap-project.git"
      cardImg={bootstrap} 
    />

    <Card
      title="Responsive"
      text="A responsive website recreated from a Figma design, focusing on responsive layouts and a functional hamburger menu."
      tools="HTML, CSS"
      link="https://github.com/kamnyl/lesson13.git"
      cardImg={responsive} 
    />

    <Card
      title="CSS Grid"
      text="A multi-page website where CSS Grid was used extensively to create flexible and structured layouts across three pages."
      tools="HTML, CSS"
      link="https://github.com/kamnyl/lesson11.git"
      cardImg={genesis} 
    />
  </div>
    );
}

export default Portfolio