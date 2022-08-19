import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div >
        <NavLink to="/" className="link" activeClassName="active" exact style={{marginLeft:'10px'}}>
          Books List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active" style={{marginLeft:'40px'}}>
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;