import React, { useState } from 'react';

const Quotes = () => {
  const [state, setState] = useState({
    id: 0,
    author: 'unknown',
    quote: 'math is Gorvern the world',
  });

  const url = 'https://random-math-quote-api.herokuapp.com/';
  const hitApi = async () => {
    const res = await fetch(url);
    const data = res.text();
    console.log(data);
    setState(data);
  };

  const { quote, author } = state;
  return (
    <div className="containerQuote">
      <div className="quote">
        <spann>{quote}</spann>
        <span>{author}</span>
      </div>
      <button className="btn" type="button" onClick={() => hitApi()}>
        Quotes
      </button>
    </div>
  );
};

export default Quotes;
