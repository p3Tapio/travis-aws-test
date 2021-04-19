import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Hima</Link>
      <Link to="/sunshine">Aurinko</Link>
      <Link to="/selitysta">Selitystä</Link>
    </div>
  );
};

export default Header;
