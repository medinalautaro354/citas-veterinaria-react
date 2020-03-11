import React from "react";

const Header = props => {
  const tittle = props.tittle;
  return (
    <header>
      <h1 className="text-center">{tittle}</h1>
    </header>
  );
};

export default Header;
