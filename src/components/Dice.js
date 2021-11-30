import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import diceEmpty from '../assets/images/dice-empty.png';

import { useState } from 'react';

const Dice = () => {
  let array = [dice1, dice2, dice3, dice4, dice5, dice6];
  let randomDice = array[Math.floor(Math.random() * array.length)];

  const [path, setPath] = useState(randomDice);

  const handleClick = () => {
    setPath(diceEmpty);
    setTimeout(() => {
      setPath(randomDice);
    }, 1000);
  };

  return (
    <div>
      <img src={path} onClick={handleClick} alt="img" />
    </div>
  );
};
export default Dice;
