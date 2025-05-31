import React from 'react';
import './QuoteCard.css';

function QuoteCard({ quote, author, fontSize, theme, isLiked, toggleLike }) {
  return (
    <div className={`quote-card ${theme}`} style={{ fontSize: `${fontSize}px` }}>
      <p className="quote-text">“{quote}”</p>
      <p className="quote-author">— {author}</p>
      <button onClick={toggleLike}>
        {isLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

export default QuoteCard;
