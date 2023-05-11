import React from 'react';
import List from './List';
import services from '../data/servicesData';

function Services() {
  return (
    <div className="list-container">
      <List list={services} />
    </div>
  );
}

export default Services;
