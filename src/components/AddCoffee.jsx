import React from "react";

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const details = form.details.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const photo = form.photo.value;
        const newCoffee = { name, quantity, category, details, supplier, taste, photo };
        //data send to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }

  return (
    <div>
      <h2 className="text-5xl text-pink-700 my-10">Add a Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form row name & quantity */}
        <div className="flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-2xl">Coffee Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered input-info w-full"
            />
          </div>
          <div className="form-control md:w-1/2 ml-6">
            <label className="label">
              <span className="text-2xl">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="Type here"
              className="input input-bordered input-info w-full"
            />
          </div>
        </div>
        {/* form row category & details */}
        <div className="flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-2xl">Category</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Type here"
              className="input input-bordered input-info w-full"
            />
          </div>
          <div className="form-control md:w-1/2 ml-6">
            <label className="label">
              <span className="text-2xl">Details</span>
            </label>
            <input
              type="text"
              name="details"
              placeholder="Type here"
              className="input input-bordered input-info w-full"
            />
          </div>
        </div>
        {/* form row supplier & taste */}
        <div className="flex mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-2xl">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Type here"
              className="input input-bordered input-info w-full"
            />
          </div>
          <div className="form-control md:w-1/2 ml-6">
            <label className="label">
              <span className="text-2xl">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Type here"
              className="input input-bordered input-info w-full"
            />
          </div>
        </div>
        {/* form row photo */}
        <div className="flex mb-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="text-2xl">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Type here"
              className="input input-bordered input-info w-full"
            />
          </div>
        </div>
        <input type="submit" value="ADD COFFEE" className="btn btn-block mt-6" />
      </form>
    </div>
  );
};

export default AddCoffee;
