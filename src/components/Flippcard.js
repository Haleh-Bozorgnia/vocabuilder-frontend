import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./FlipCard.css"; // You'll create this CSS file for styling
function FlipCard({ flip }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleCardClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* Content for the front of the card */}
          {/* <h2>Vocab:{flip.vocab}</h2> */}
          <Link to={`/post/${flip.id}`}>
            {/* <h2>Vocabulary: {flip.vocab}</h2> */}
            <div className="field-container-front">
              <h2>Vocabulary</h2>
              <hr></hr>

              <h2>{flip.vocab}</h2>
            </div>
          </Link>
        </div>
        <div className="flip-card-back">
          {/* Content for the back of the card */}
          <div className="field-container">
            <h2>Translation</h2>
            <h3>{flip.translation}</h3>
          </div>
          <div className="field-container">
            <h2>Pronounciation</h2>
            <h3>{flip.pronounciation}</h3>
          </div>
          <div className="field-container">
            <h2>Type</h2>
            <h3>{flip.type}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
