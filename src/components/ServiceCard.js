import React from 'react';
import PropTypes from 'prop-types';

function ServiceCard({
  name, img,
}) {
  return (
    <li className="card">
      <h2 className="card-title">{name}</h2>
      <img src={img} alt={name} />
      <button type="button" className="order-button">Order</button>
      <button type="button" className="details-button">Details</button>
    </li>
  );
}

ServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ServiceCard;
