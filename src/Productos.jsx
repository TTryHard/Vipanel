import React from "react";
import imagen1 from "./imagen1.png";
import imagen2 from "./imagen2.jpg";
import imagen3 from "./imagen3.jpg";

const Productos = () => {
  return (
    <div className="container text-center">
      <h1 className="mt-5">Productos</h1>

      <div className="row align-items-center">

      <div className=" col-md-6 card m-5 " style={{ width: "18rem" }}>
        <h3>Vigas, Pilates y Paneles</h3>
        <img src={imagen1} className="card-img-top" alt="imagen" />
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            ab neque rerum laudantium mollitia voluptas.
          </p>
        </div>
      </div>

      <div className=" col-md-6 card m-5 " style={{ width: "18rem" }}>
        <h3>Tableros</h3>
        <div className="row">
          <div className="col-6">
            <img src={imagen2} className="card-img-top" alt="imagen" />
          </div>
          <div className="col-6">
            <img src={imagen3} className="card-img-top" alt="imagen" />
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            ab neque rerum laudantium mollitia voluptas.
          </p>
        </div>
      </div>

      </div>


      
    </div>
  );
};
export default Productos;
