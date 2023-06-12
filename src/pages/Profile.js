import React from "react";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="bg-[--bg-card] rounded mt-10 px-4 py-10  lg:p-10">
        <h2 className="text-2xl mb-4">Profile</h2>
        <form className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col">
            <label className="mb-1">Name</label>
            <input
              type="text"
              name="name"
              className="input-field"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="input-field"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Email</label>
            <input
              type="email"
              name="location"
              className="input-field"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Location</label>
            <input
              type="text"
              name="location"
              className="input-field"
            />
          </div>
          <button className="submit-button mt-6">
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Profile;
