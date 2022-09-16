import React, { useState } from "react";

const Quotes = () => {
  const [state, setState] = useState({
    id: 0,
    author: "unknown",
    quote: "Math is Gorvern the world",
  });

  const url = "https://random-math-quote-api.herokuapp.com/";
  const hitApi = async () => {
    const res = await fetch(url);
    const data = res.json();
    console.log(data);
    setState(data);
  };

  return (
    <div>
      <p></p>
      <button onClick={hitApi}> </button>
    </div>
  );
};

export default Quotes;
