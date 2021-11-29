import './random.css';

const Random = ({ min, max }) => {
  let randomNum = Math.floor(Math.random() * max) + min;

  return (
    <div className="random">
      Random value between {min} and {max} =&gt; {randomNum}
    </div>
  );
};

export default Random;
