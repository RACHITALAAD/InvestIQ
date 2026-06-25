import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { getProfile } from "../../api/auth";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return (
      <div className="container-fluid p-4">
        <h2 className="fw-bold">Loading Profile...</h2>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      <h2 className="fw-bold mb-4">Profile</h2>

      <div className="bg-white rounded-4 shadow-sm p-5">
        <div className="text-center">
          <FaUserCircle
            size={120}
            className="mb-3"
            style={{ color: "#008080" }}
          />

          <h3 className="fw-bold">{user.userName}</h3>

          <p className="text-muted">Investor & Portfolio Manager</p>
        </div>

        <hr className="my-4" />

        <div className="row">
          <div className="col-md-6 mb-3">
            <h6 className="text-muted">Email</h6>
            <p className="fw-semibold">{user.email}</p>
          </div>

          <div className="col-md-6 mb-3">
            <h6 className="text-muted">Mobile</h6>
            <p className="fw-semibold">+91 98765 43210</p>
          </div>

          <div className="col-md-6 mb-3">
            <h6 className="text-muted">Risk Preference</h6>
            <p className="fw-semibold">Moderate</p>
          </div>

          <div className="col-md-6 mb-3">
            <h6 className="text-muted">Member Since</h6>
            <p className="fw-semibold">June 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;