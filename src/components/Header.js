import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const tittle = props.tittle;
  return (
    <header>
      <h1 className="text-center">{tittle}</h1>
    </header>
  );
};

Header.propTypes = {
  tittle: PropTypes.string.isRequired
};

export default Header;
