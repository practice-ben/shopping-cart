import React from 'react';
import PropTypes from 'prop-types';
import ServiceCard from './ServiceCard';

function List({
  list,
}) {
  return (
    <ul className="list">
      {list.map(({
        id, name, img,
      }) => (
        <ServiceCard key={id} name={name} img={img} />
      ))}
    </ul>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  })).isRequired,
};

export default List;
