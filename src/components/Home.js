import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div>
        <h1 className="heading">This is the home page</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <p>
          Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
        </p>
        <p>
          An unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <p>
          It has survived not centuries,
        </p>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets containing
        </p>
        <p>
          Lorem Ipsum passages, and more recently with desktop publishing software.
        </p>
        <Link to="/services">
          <button type="button" className="go-to-services">Services</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
