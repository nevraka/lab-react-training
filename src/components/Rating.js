import './rating.css';

const empty = '☆';
const filled = '★';

const Rating = ({ children }) => {
  const rate = Math.round(children);

  return (
    <div className="rate">
      {[...Array(5)].map((v, i) => (
        <div>{i < rate ? filled : empty}</div>
      ))}
    </div>
  );
};
export default Rating;
