import React, { useState } from 'react';

const Quotes = () => {
  const [state, setState] = useState({
    id: 0,
    author: 'unknown',
    quote: 'Math is Gorvern the world',
  });

  const url = 'https://random-math-quote-api.herokuapp.com/';
  const hitApi = async () => {
    const res = await fetch(url);
    const data = res.json();
    console.log(data);
    setState(data);
  };

  const { quote, author } = state;
  return (
    <div>
      <div>
        <p>
          {' '}
          {quote}
        </p>
        <span>
          {' '}
          {author}
        </span>
      </div>
      <button type="button" onClick={() => hitApi}> Quotes</button>
    </div>
  );
};

export default Quotes;
