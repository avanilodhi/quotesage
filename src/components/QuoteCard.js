import React from 'react';
import './QuoteCard.css';

function QuoteCard({ quote, author, fontSize, isLiked, onLike, theme }) {
  return (
    <div className={`quote-card ${theme}`}>
      <p className="quote-text" style={{ fontSize }}>{`"${quote}"`}</p>
      <p className="quote-author">— {author}</p>
      <button className="like-btn" onClick={onLike}>
        {isLiked ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

export default QuoteCard;
