import './creditcard.css';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let lastFourDigits = number.substr(-4);
  return (
    <div
      className="container"
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
    >
      <div className="type">{type}</div>
      <div className="number">•••• •••• •••• {lastFourDigits}</div>
      <div className="main">
        Experies &nbsp;
        {expirationMonth}/{expirationYear}
        <div className="bank">{bank}</div>
      </div>
      <div className="owner">{owner}</div>
    </div>
  );
};
export default CreditCard;
