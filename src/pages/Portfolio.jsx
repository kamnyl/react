import { useState } from "react";
import Card from "../components/Card.jsx";
import Popup from "../components/Popup.jsx";
import bootstrap from "../assets/bootstrap.png";
import responsive from "../assets/responsive.png";
import genesis from "../assets/genesis.png";
import abstract from "../assets/IMG_2300.jpg";
import "../styles/portfolio.css";

function Portfolio() {
  const [exploreProjects, setExploreProjects] = useState(false);
  const [popupBox, setPopupBox] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // (Final portfolio assignment) - State to store the user's input for filtering projects
  const toggleProjects = () => setExploreProjects(prev => !prev);


  const projects = [ 
    // (Final portfolio assignment) - Replaced the previous code for project components with 
    // this array of project data to render projects using the .map() method
    {
      title: "Bootstrap",
      text: "A project exploring Bootstrap to quickly build a responsive and styled web page using its component library and layout system.",
      tools: "HTML, CSS",
      link: "https://github.com/kamnyl/bootstrap-project.git",
      cardImg: bootstrap,
      popupText: "I learned how to use Bootstrap's grid system and pre-built components to quickly create a responsive and visually appealing web page. I also gained a better understanding of how Bootstrap simplifies styling and layout, saving development time while maintaining consistency across devices."
    },
    {
      title: "Responsive",
      text: "A responsive website recreated from a Figma design, focusing on responsive layouts and a functional hamburger menu.",
      tools: "HTML, CSS",
      link: "https://github.com/kamnyl/lesson13.git",
      cardImg: responsive,
      popupText: "I learned how to recreate a website from a Figma design and make it responsive, meaning it looks good on both large screens and mobile devices. I also worked on building a functional hamburger menu that appears on smaller screens, making navigation easy and smooth for users on all devices."
    },
    {
      title: "CSS Grid",
      text: "A multi-page website where CSS Grid was used extensively to create flexible and structured layouts across three pages.",
      tools: "HTML, CSS",
      link: "https://github.com/kamnyl/lesson11.git",
      cardImg: genesis,
      popupText: "I learned how to use CSS Grid to create flexible and well-structured layouts across multiple pages, making the website responsive and easy to navigate. I also worked on building a form that users can fill out, even though it doesn't have a backend to process the data yet, which helped me understand how forms work in web development."
    },
  ];


  const filterProjects = projects.filter(project => // (Final portfolio assignment) - Filter based on text, popupText or tools
    project.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.popupText.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tools.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="toggle-container">
        <img src={abstract} alt="Abstract pic" className="start-img" />
        <p className="card-text">
          Here's a selection of projects I created during my time at Sundsgården Folkhögskola. Along the way, I picked up a solid toolbox of web skills—including HTML, CSS, Figma, Git, GitHub, Sass, Bootstrap, JavaScript and React.
        </p>
        <button onClick={toggleProjects} className="toggle-button">
          {exploreProjects ? "Hide Projects" : "Explore Projects"}
        </button>
      </div>

      <div className="portfolio-section">
        {exploreProjects && (
          <>
            <input // (Final portfolio assignment) - Search bar
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />

            <div className="card-container">
              {filterProjects.map((project, projectIndex) => ( // (Final portfolio assignment) - Loop through each filtered project and show it as Card component
                <div key={projectIndex} onClick={() => setPopupBox({
                  popupTitle: project.title,
                  popupText: project.popupText
                })}>
                  <Card
                    title={project.title}
                    text={project.text}
                    tools={project.tools}
                    link={project.link}
                    cardImg={project.cardImg}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {popupBox && (
        <Popup
          project={popupBox}
          closePopup={() => setPopupBox(null)}
        />
      )}
    </>
  );
}

export default Portfolio;
