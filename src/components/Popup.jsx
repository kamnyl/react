import "../styles/popup.css";

const Popup = ({ project, closePopup }) => {
    return (
      <div className="popup-overlay">
        <div className="popup-content">
          <h2 className="popup-title">{project.popupTitle}</h2>
          <p className="popup-text">{project.popupText}</p>
          <button className="popup-button" onClick={closePopup}>Close</button>
        </div>
      </div>
    );
  };

export default Popup;
