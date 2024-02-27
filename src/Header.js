import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-primary text-white py-2 justify-content-between align-items-center">
            <h1 className="text-center">Header</h1>
          </div>
        </div>
      </div>
    </header>
  );
};
Header.defaultProps = {
  title: "Welcome to our website!",
};
export default Header;
