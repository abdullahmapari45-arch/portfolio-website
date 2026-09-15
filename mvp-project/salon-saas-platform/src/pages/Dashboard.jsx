import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      {/* Top Navbar */}
      <div
        style={{
          background: "#1e293b",
          color: "white",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>Salon SaaS Platform</h1>

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Main Layout */}
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <div
          style={{
            width: "220px",
            minHeight: "100vh",
            background: "#02132f",
            color: "white",
            padding: "20px",
          }}
        >
          <h2>Menu</h2>

          <div style={{ marginTop: "30px" }}>
            <p>
              <Link
                to="/dashboard"
                style={{ color: "white", textDecoration: "none" }}
              >
                Dashboard
              </Link>
            </p>

            <p>
              <Link
                to="/users"
                style={{ color: "white", textDecoration: "none" }}
              >
                Users
              </Link>
            </p>

            <p>
              <Link
                to="/profile"
                style={{ color: "white", textDecoration: "none" }}
              >
                Profile
              </Link>
            </p>
          </div>
        </div>

        {/* Dashboard Content */}
        <div
          style={{
            flex: 1,
            minHeight: "100vh",
            padding: "40px",
            background: "linear-gradient(to right, #5ee7df, #b490ca)",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "56px",
              marginBottom: "40px",
            }}
          >
            Dashboard
          </h1>

          {/* Statistics Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
              marginBottom: "40px",
            }}
          >
            <div style={cardStyle}>
              <h2>Customers</h2>
              <h1>150</h1>
            </div>

            <div style={cardStyle}>
              <h2>Appointments</h2>
              <h1>45</h1>
            </div>

            <div style={cardStyle}>
              <h2>Revenue</h2>
              <h1>₹50,000</h1>
            </div>

            <div style={cardStyle}>
              <h2>Staff</h2>
              <h1>8</h1>
            </div>
          </div>

          {/* Recent Activities */}
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
          >
            <h2>Recent Activities</h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "15px",
              }}
            >
              <thead>
                <tr>
                  <th style={tableStyle}>Customer</th>
                  <th style={tableStyle}>Service</th>
                  <th style={tableStyle}>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td style={tableStyle}>Customer 1</td>
                  <td style={tableStyle}>Haircut</td>
                  <td style={tableStyle}>Completed</td>
                </tr>

                <tr>
                  <td style={tableStyle}>Customer 2</td>
                  <td style={tableStyle}>Facial</td>
                  <td style={tableStyle}>Pending</td>
                </tr>

                <tr>
                  <td style={tableStyle}>Customer 3</td>
                  <td style={tableStyle}>Hair Spa</td>
                  <td style={tableStyle}>Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "35px",
  borderRadius: "15px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  minHeight: "180px",
};

const tableStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "left",
};

export default Dashboard;