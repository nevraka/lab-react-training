import React from 'react';
import './greetings.css';

const Greetings = ({ lang, children }) => {
  let text = '';

  if (lang === 'de') {
    text = 'Hallo';
  } else if (lang === 'en') {
    text = 'Hello';
  } else if (lang === 'es') {
    text = 'Hola';
  } else if (lang === 'fr') {
    text = 'Bonjour';
  }

  return (
    <div className="greetings">
      <div>{text}</div>
      &nbsp;
      <div>{children}</div>
    </div>
  );
};

export default Greetings;
