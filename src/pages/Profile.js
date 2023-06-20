import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { updateUser } from "../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setProfileData({ ...profileData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, lastName, email, location } = profileData;
    if (!name || !lastName || !email || !location) {
      toast.error("please fill out all fields...");
      return;
    }
    dispatch(updateUser({name, lastName, email, location}))
    // return profileData
  }

  return (
    <React.Fragment>
      <div className="bg-[--bg-card] rounded mt-10 px-4 py-10  lg:p-10">
        <h2 className="text-2xl mb-4">Profile</h2>
        <form className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" onSubmit={handleSubmit}>
          <FormRow
            type="next"
            name="name"
            labelText="name"
            handleChange={handleChange}
            value={profileData.name}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="Last Name"
            value={profileData.lastName}
            handleChange={handleChange}
          />

          <FormRow
            type="email"
            name="email"
            labelText="email"
            value={profileData.email}
            handleChange={handleChange}
          />

          <FormRow
            type="text"
            name="location"
            labelText="location"
            value={profileData.location}
            handleChange={handleChange}
          />
          <button className="submit-button mt-6">{isLoading ? 'Updating...' : 'Submit'}</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Profile;
