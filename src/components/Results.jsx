import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import "./Results.css";

export default function Results({ element, artwork, quote }) {
  const { name } = useContext(UserContext);

  return (
    <div className={`page-container results-container ${element.toLowerCase()}`}>
     <p className={`element-text ${element.toLowerCase()}`}>
  <strong>{name}</strong>, your personality matches: <strong>{element}</strong>
</p>


      {artwork ? (
        <div className="artwork">
          <h2>{artwork.title}</h2>
          <img src={artwork.primaryImage} alt={artwork.title} />
          <p>Artist: {artwork.artistDisplayName}</p>
          <p>Date: {artwork.objectDate}</p>
        </div>
      ) : (
        <p>No artwork found.</p>
      )}

      {quote && quote.content && (
        <blockquote className="quote">
          "{quote.content}"
          <footer>- {quote.author}</footer>
        </blockquote>
      )}
    </div>
  );
}
