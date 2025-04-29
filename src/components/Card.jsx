import "../card.css";

function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.cardImg} alt="portfolio image" />
      <h2 className="card-title">{props.title}</h2>
      <p className="card-tools">{props.tools}</p>
      <p className="card-text">{props.text}</p>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button className="card-button">GitHub Repository</button></a>
    </div>
  );
}

export default Card