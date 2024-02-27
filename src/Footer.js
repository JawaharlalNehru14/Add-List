import React from "react";

const Footer = ({ item }) => {
  /* const year = new Date(); */

  return (
    <>
      {/* <footer>Copyrights &copy; {year.getFullYear()}</footer> */}
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-primary text-white py-2 justify-content-between align-items-center fixed-bottom">
              <h1 className="text-center">
                You have {item.length} {item.length === 1 ? `Item` : `Items`}.
              </h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
