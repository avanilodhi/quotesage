import React from 'react';
import './QuoteButton.css';

function QuoteButton({ text, onClick }) {
  return (
    <button className="quote-btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default QuoteButton;
