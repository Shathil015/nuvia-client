import React from "react";
import { Link } from "react-router";

const LatestCart = ({ art }) => {
  const { _id, photoURL, title, user_name, category } = art;
  return (
    <div className="card mt-5 bg-base-100 w-100 shadow-sm">
      <figure className="px-5 pt-5">
        <img src={photoURL} className="h-100 w-90 rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-semibold text-2xl">{title}</h2>
        <p className="text-xl">
          <span className="font-semibold">Artist Name</span> : {user_name}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Category </span>: {category}
        </p>
        <div className="card-actions">
          <Link to={`/auth/artDetails/${_id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestCart;
