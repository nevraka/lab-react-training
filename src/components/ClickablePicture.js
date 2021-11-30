import { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [clicked, setClicked] = useState(false);

  const handeClick = () => {
    //toogle
    setClicked(!clicked);
  };

  let path = clicked ? imgClicked : img;

  return (
    <div>
      <img src={path} alt="profile" onClick={handeClick} />
    </div>
  );
};
export default ClickablePicture;
