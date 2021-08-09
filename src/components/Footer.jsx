import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-success text-white  p-4 position-absolute w-100 mb-0 "
      style={{ height: "8rem" }}
    >
      <div className="container text-center">
        <nav className="row">
          <ul className="col-6 list-unstyled">
            <li className="font-weight-bold text-uppercase">Productos</li>
            <li className="a text-reset">producto</li>
            <li className="a text-reset">producto</li>
            <li className="a text-reset">producto</li>
          </ul>
        <ul className="col-6 list-unstyled">
            <li className="font-weight-bold text-uppercase">Redes</li>
            <li>
                <a href="#">
                    <img src="./facebook.svg" alt="" />
                </a>
            </li>
        </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
