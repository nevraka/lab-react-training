import './boxcolor.css';

const BoxColor = ({ r, g, b, code }) => {
  return (
    <div>
      <div
        className="box-color box"
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
        }}
      >
        rgb({r}, {g}, {b})
        <br />
        {code}
      </div>
    </div>
  );
};

export default BoxColor;
