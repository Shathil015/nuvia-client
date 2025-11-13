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
    console.log(productId, name, email);
    const newAdd = {
      product: productId,
      adder_name: name,
      adder_email: email,
      status: "pending",
    };

    fetch("http://localhost:3000/gallery", {
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

  const { photoURL, title, name, category, created_at } = product;
  return (
    <div className=" w-8/12 mx-auto ">
      <div className="card card-side bg-base-200 shadow-sm">
        <figure>
          <img className="w-100" src={photoURL} />
        </figure>
        <div className="card-body w-100 ml-10">
          <h2 className="card-title">{title}</h2>
          <p className="mb-10">category : {category}</p>
          <div className="">
            <h2 className="mb-10 px-3 py-2 bg-secondary h-10 rounded-2xl ">
              Products Details
            </h2>
            <p className="mb-10 px-3 py-2 bg-secondary h-10 rounded-2xl">
              Posted :{created_at}
            </p>
            <p className="mb-10 px-3 py-2 bg-secondary h-10 rounded-2xl">
              price:$110 - $220
            </p>
            <p className="mb-10 px-3 py-2 bg-secondary h-10 rounded-2xl">
              Seller name : {name}
            </p>
          </div>
          <div className="card-actions  max-w-full">
            <button onClick={handleModalOpen} className="btn btn-primary">
              Add To Gallery
            </button>
            <dialog
              ref={addModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Save art on your gallery now...!</p>
                <form onSubmit={handleAddSubmit}>
                  <fieldset className="fieldset">
                    {/* name */}
                    <label className="label">Name</label>
                    <input
                      type="Text"
                      className="input"
                      name="name"
                      defaultValue={user.displayName}
                      readOnly
                    />
                    {/*  */}
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input"
                      name="email"
                      defaultValue={user.email}
                      readOnly
                    />

                    <button className="btn btn-primary mt-4">Save</button>
                  </fieldset>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Cancel</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDetails;
