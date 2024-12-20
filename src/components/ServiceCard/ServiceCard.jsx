import React from "react";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { treatment, image, description, cost, id} = service;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img className="w-full md:h-40 h-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {treatment}
          <p className="text-green-700">$ {cost}</p>
        </h2>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <NavLink to={`/details/${id}`}>
            
            <button className="badge badge-outline border-2 border-blue-700">
              Checkout More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
