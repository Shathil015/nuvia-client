import React from "react";
import { Link } from "react-router";

const LatestCart = ({ art }) => {
  const { _id, photoURL, title, name, category } = art;
  return (
    <div className="card mt-5 bg-base-100 w-80 shadow-sm">
      <figure className="px-5 pt-5">
        <img src={photoURL} className="h-100 rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>Artist Name : {name}</p>
        <p>Category : {category}</p>
        <div className="card-actions">
          <Link to={`/artDetails/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestCart;
