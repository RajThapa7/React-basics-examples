import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1> */}
      <h1>{text || "raj thapa"}</h1>
      <button className="btn" onClick={() => setError(!error)}>
        Toggle error
      </button>
      <h1>{error && "Error..."}</h1>
      {error ?<p>there is an error...</p>: <div>
        <h2>there is no error</h2></div>}
    </>
  );
};

export default ShortCircuit;
