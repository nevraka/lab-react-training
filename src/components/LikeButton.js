import React, { useState } from 'react';

const LikeButton = () => {
  let colorArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const colors = colorArray[Math.floor(Math.random() * colorArray.length)];

  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [color, setColor] = useState(colors);

  const handleClick = () => {
    setCount(count + 1);
    setColor(color);
  };
  const handleClickTwo = () => {
    setCountTwo(countTwo + 1);
    setColor(color);
  };

  return (
    <>
      <button onClick={handleClick} style={{ backgroundColor: colors }}>
        {count} Likes
      </button>
      <button onClick={handleClickTwo} style={{ backgroundColor: colors }}>
        {countTwo} Likes
      </button>
    </>
  );
};

export default LikeButton;
