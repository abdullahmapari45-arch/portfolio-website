import { Link } from "react-router-dom";

function Users() {
  const users = [
    {
      id: 1,
      name: "Team Member 1",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Team Member 2",
      role: "Manager",
      status: "Active",
    },
    {
      id: 3,
      name: "Team Member 3",
      role: "Staff",
      status: "Active",
    },
    {
      id: 4,
      name: "Team Member 4",
      role: "Staff",
      status: "Active",
    },
    {
      id: 5,
      name: "Team Member 5",
      role: "Staff",
      status: "Active",
    },
    {
      id: 6,
      name: "Team Member 6",
      role: "Staff",
      status: "Inactive",
    },
    {
      id: 7,
      name: "Team Member 7",
      role: "Staff",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Team Member 8",
      role: "Staff",
      status: "Active",
    },
  ];

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

      <h1
        style={{
          color: "white",
          fontSize: "56px",
          marginBottom: "40px",
        }}
      >
        Users Management
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "#667eea",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "36px",
                marginBottom: "20px",
              }}
            >
              {user.id}
            </div>

            <h2>{user.name}</h2>

            <p>
              <strong>Role:</strong> {user.role}
            </p>

            <p>
              <strong>Status:</strong> {user.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;