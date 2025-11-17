import React, { use, useRef } from "react";
import { Outlet, useLoaderData } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const ArtDetails = () => {
  const product = useLoaderData([]);

  const { _id: productId } = useLoaderData();

  const addModalRef = useRef(null);

  // console.log(product);

  const handleModalOpen = () => {
    addModalRef.current.showModal();
  };

  const { user } = use(AuthContext);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    // console.log(productId, name, email);
    const newAdd = {
      product: productId,
      adder_name: name,
      adder_email: email,
      status: "pending",
    };

    fetch("https://nuvia-brand-server.onrender.com/gallery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          addModalRef.current.close();
          Swal.fire({
            title: "Art Save",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  const {
    photoURL,
    title,
    category,
    created_at,
    price_min,
    price_max,
    user_name,
    description,
  } = product;
  return (
    <div className="w-9/12 mx-auto my-12">
      <div className="relative flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
        {/* Artwork Image */}
        <div className="md:w-1/2 h-96 md:h-auto overflow-hidden">
          <img
            src={photoURL}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Card Body */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between bg-gradient-to-b from-white to-gray-50">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{title}</h2>
            <p className="text-gray-500 mb-6">
              Category: <span className="font-medium">{category}</span>
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <p className="px-4 py-2 bg-purple-100 rounded-xl text-purple-700 font-medium">
                Posted: {created_at}
              </p>
              <p className="px-4 py-2 bg-green-100 rounded-xl text-green-700 font-medium">
                Price: ${price_min} - ${price_max}
              </p>
              <p className="px-4 py-2 bg-blue-100 rounded-xl text-blue-700 font-medium col-span-2">
                Seller: {user_name}
              </p>
              <p className="px-4 py-2 bg-green-100 rounded-xl text-green-700 font-medium col-span-2">
                Description : {description}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={handleModalOpen}
              className="w-full sm:w-auto btn btn-primary text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300"
            >
              Add To Gallery
            </button>
          </div>
        </div>

        {/* Modal */}
        <dialog
          ref={addModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box rounded-2xl">
            <h3 className="font-bold text-2xl mb-4">Add to Your Gallery</h3>
            <p className="mb-6 text-gray-600">
              Save this artwork in your personal gallery.
            </p>
            <form onSubmit={handleAddSubmit} className="flex flex-col gap-4">
              <label className="label font-medium">Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="name"
                defaultValue={user.displayName}
                readOnly
              />

              <label className="label font-medium">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                name="email"
                defaultValue={user.email}
                readOnly
              />

              <div className="flex justify-end gap-4 mt-6">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => addModalRef.current.close()}
                  className="btn btn-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ArtDetails;
