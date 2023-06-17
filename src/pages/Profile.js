import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });
  const dispatch = useDispatch();

  function handleChange (e){
    const name = e.target.name
    const value = e.target.value
    setProfileData({...profileData, [name]: value})
  }

  console.log(profileData)
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
              labelText="name"
              value={profileData.name}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              labelText="Last Name"
              value={profileData.lastName}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Email</label>
            <input
              type="email"
              name="location"
              labelText="email"
              value={profileData.email}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1">Location</label>
            <input
              type="text"
              name="location"
              labelText="location"
              value={profileData.location}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          <button className="submit-button mt-6">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Profile;
