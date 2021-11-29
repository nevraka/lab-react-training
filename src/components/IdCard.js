import React from 'react';
import './idcard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="general">
      <img src={picture} alt="pic" />
      <div className="info">
        <div>
          <strong>First Name:</strong>
          {lastName}
        </div>
        <div>
          <strong>Last Name:</strong>
          {firstName}
        </div>
        <div>
          <strong>Gender:</strong>
          {gender}
        </div>
        <div>
          <strong>Height:</strong>
          {height}m
        </div>
        <div>
          <strong>Birth:</strong>
          {birth}
        </div>
      </div>
    </div>
  );
};
export default IdCard;
