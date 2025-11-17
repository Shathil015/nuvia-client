import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Header from "../components/Header";
import Swal from "sweetalert2";

const MyGallery = () => {
  const { user } = use(AuthContext);
  const [myAdd, setMyADD] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://nuvia-brand-server.onrender.com/gallery?=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyADD(data);
        });
    }
  }, [user?.email]);

  const handleRemoveAdd = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://nuvia-brand-server.onrender.com/gallery/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto">
      <Header></Header>

      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myAdd.map((add) => (
          <div
            key={add._id}
            className="card lg:card-side bg-base-100 shadow-sm"
          >
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Update</button>
                <button
                  onClick={() => handleRemoveAdd(add._id)}
                  className="btn btn-primary"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyGallery;
