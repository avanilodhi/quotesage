import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import QuoteButton from './components/QuoteButton';
import ThemeToggle from './components/ThemeToggle';
import axios from 'axios';

function App() {
  const [quoteData, setQuoteData] = useState({ q: '', a: '' });
  const [isLiked, setIsLiked] = useState(false);
  const [fontSize, setFontSize] = useState('18px');
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const fetchQuote = async () => {
    try {
      const res = await axios.get('https://zenquotes.io/api/random');
      console.log('API Response:', response.data);
      const { q, a } = res.data[0];
      setQuoteData({ q, a });
      setIsLiked(false); // reset like state on new quote
    } catch (err) {
      console.error('Failed to fetch quote:', err);
    }
  };

  useEffect(() => {
    fetchQuote(); // fetch a quote on first render
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const changeFontSize = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="container">
        <ThemeToggle isDark={isDarkTheme} toggleTheme={toggleTheme} />
        <select value={fontSize} onChange={changeFontSize}>
          <option value="16px">Small</option>
          <option value="18px">Medium</option>
          <option value="22px">Large</option>
        </select>
        <QuoteCard
          quote={quoteData.q}
          author={quoteData.a}
          fontSize={fontSize}
          isLiked={isLiked}
          onLike={() => setIsLiked(!isLiked)}
          theme={isDarkTheme ? 'dark' : 'light'}
        />
        <QuoteButton text="New Quote" onClick={fetchQuote} />
      </div>
    </div>
  );
}

export default App;
