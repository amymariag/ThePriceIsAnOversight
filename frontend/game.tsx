import React, { useState } from 'react';
import axios from 'axios';
import './styles/Game.css';

const Game = () => {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const fetchPrice = async () => {
    try {
      const response = await axios.get(`/api/product/${product}`);
      setPrice(response.data.price);
      setMessage('');
    } catch {
      setMessage('Error fetching product price.');
    }
  };

  const handleSubmit = () => {
    if (parseFloat(guess) === price) {
      setMessage('Correct!');
    } else {
      setMessage('Try Again!');
    }
  };

  return (
    <div>
      <h1>The Price is an Oversight</h1>
      <input
        type="text"
        placeholder="Enter product name"
        onChange={(e) => setProduct(e.target.value)}
      />
      <button onClick={fetchPrice}>Fetch Price</button>
      <input
        type="number"
        placeholder="Guess the price"
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Guess</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Game;
