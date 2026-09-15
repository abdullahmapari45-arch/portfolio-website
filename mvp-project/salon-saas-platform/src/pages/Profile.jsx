import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "System Administrator",
    role: "Admin",
    email: "admin@salonsaas.com",
    department: "Operations",
    status: "Active",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #5ee7df, #b490ca)",
      }}
    >
      <Link
        to="/dashboard"
        style={{
          background: "#1e293b",
          color: "white",
          padding: "12px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          display: "inline-block",
          marginBottom: "30px",
        }}
      >
        ← Back to Dashboard
      </Link>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            background: "#667eea",
            color: "white",
            fontSize: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 30px",
          }}
        >
          {profile.name.charAt(0)}
        </div>

        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Name"
              style={inputStyle}
            />

            <input
              type="text"
              name="role"
              value={profile.role}
              onChange={handleChange}
              placeholder="Role"
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Email"
              style={inputStyle}
            />

            <input
              type="text"
              name="department"
              value={profile.department}
              onChange={handleChange}
              placeholder="Department"
              style={inputStyle}
            />

            <input
              type="text"
              name="status"
              value={profile.status}
              onChange={handleChange}
              placeholder="Status"
              style={inputStyle}
            />

            <button
              onClick={() => setIsEditing(false)}
              style={saveButton}
            >
              Save Changes
            </button>
          </>
        ) : (
          <>
            <h1>{profile.name}</h1>

            <p>
              <strong>Role:</strong> {profile.role}
            </p>

            <p>
              <strong>Email:</strong> {profile.email}
            </p>

            <p>
              <strong>Department:</strong> {profile.department}
            </p>

            <p>
              <strong>Status:</strong> {profile.status}
            </p>

            <button
              onClick={() => setIsEditing(true)}
              style={editButton}
            >
              Edit Profile
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const editButton = {
  background: "#667eea",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "15px",
};

const saveButton = {
  background: "#16a34a",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "10px",
};

export default Profile;