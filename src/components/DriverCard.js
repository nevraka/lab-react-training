import Rating from './Rating';
import './drivercard.css';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card">
      <img src={img} alt="driver" className="driver-img" />
      <div>
        <div>{name}</div>
        <Rating>{rating}</Rating>
        <div>
          {car.model}-{car.licensePlate}
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
