import "./App.css";
import data from "./data";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let amount = count;
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs: </label>
        <input
          onChange={(e) => setCount(e.target.value)}
          type='number'
          name='amount'
          id='amount'
          value={count}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-ipsum'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
