import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import QuoteButton from './components/QuoteButton';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [fontSize, setFontSize] = useState(20);
  const [theme, setTheme] = useState('light');
  const [isLiked, setIsLiked] = useState(false);

  const fetchQuote = async () => {
    try {
      const res = await axios.get('https://zenquotes.io/api/random');
      const quoteData = res.data[0];
      setQuote(quoteData.q);
      setAuthor(quoteData.a);
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote("Believe in yourself. You're capable of more than you know.");
      setAuthor("Unknown");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const increaseFont = () => setFontSize(fontSize + 2);
  const decreaseFont = () => setFontSize(Math.max(14, fontSize - 2));

  return (
    <div className={`App ${theme}`}>
      <h1>QuoteSage</h1>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <QuoteCard
        quote={quote}
        author={author}
        fontSize={fontSize}
        theme={theme}
        isLiked={isLiked}
        toggleLike={toggleLike}
      />
      <QuoteButton onClick={fetchQuote} label="New Quote" />
      <div style={{ marginTop: '10px' }}>
        <QuoteButton onClick={increaseFont} label="A+" />
        <QuoteButton onClick={decreaseFont} label="A−" />
      </div>
    </div>
  );
}

export default App;
