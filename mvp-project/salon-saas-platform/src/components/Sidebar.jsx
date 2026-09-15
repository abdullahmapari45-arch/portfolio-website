import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#111827",
        color: "white",
        minHeight: "calc(100vh - 65px)",
        padding: "20px",
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Menu</h3>

      <ul>
        <li style={{ marginBottom: "15px" }}>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <Link to="/users">Users</Link>
        </li>

        <li style={{ marginBottom: "15px" }}>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;