import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import { getProfile } from "../../api/auth";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await getProfile();
      setProfile(response.data.profile);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container-fluid p-4">
        <h4>Loading Profile...</h4>
      </div>
    );
  }

  const cardStyle = {
    border: "1px solid #E8ECEF",
    transition: "all 0.3s ease",
    cursor: "pointer",
    borderRadius: "18px",
    padding: "28px",
    height: "100%",
    background: "#fff",
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-5px)";
    e.currentTarget.style.boxShadow = "0 14px 30px rgba(53,128,130,0.12)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div className="container-fluid p-4">

      <div className="mb-4">
        <h2
          style={{
            fontSize: "25px",
            fontWeight: 680,
            color: "#1F2937",
            marginBottom: "6px",
          }}
        >
          Profile
        </h2>

        <p
          className="text-muted"
          style={{
            fontSize: "18px",
            fontWeight: 480,
            color: "#333436",
          }}
        >
          Manage your account information
        </p>
      </div>

      <div
        className="bg-white rounded-4 shadow-sm p-5"
        style={{
          border: "1px solid #EDF2F7",
        }}
      >

        <div className="text-center">
          <div
            className="mx-auto d-flex justify-content-center align-items-center"
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              background: "#E8F6F5",
              marginBottom: "20px",
            }}
          >
            <FaUserCircle size={72} color="#358082" />
          </div>

          <h2
            style={{
              fontSize:"25px",
              fontWeight: 700,
              color: "#1F2937",
              marginBottom: "10px",
            }}
          >
            {profile.userName}
          </h2>

          <p
            className="text-muted"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              marginBottom: "45px",
            }}
          >
            InvestIQ Member
          </p>
        </div>

        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaUser size={18} color="#358082" />

                <span
                  className="text-muted"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  Username
                </span>
              </div>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#1F2937",
                  marginBottom: 0,
                }}
              >
                {profile.userName}
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaEnvelope size={18} color="#358082" />

                <span
                  className="text-muted"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  Email Address
                </span>
              </div>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#1F2937",
                  marginBottom: 0,
                  wordBreak: "break-word",
                }}
              >
                {profile.email}
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div
              style={cardStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaCalendarAlt size={18} color="#358082" />

                <span
                  className="text-muted"
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  Member Since
                </span>
              </div>

              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#1F2937",
                  marginBottom: 0,
                }}
              >
                {new Date(profile.createdAt)
                  .toLocaleDateString("en-GB")
                  .replace(/\//g, "-")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
