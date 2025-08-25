import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [historyOpen, setHistoryOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleHistoryClick = () => {
    if (location.pathname !== "/history") {
      // First click → navigate to /history
      navigate("/history");
    } else {
      // Second click → toggle submenu
      setHistoryOpen(!historyOpen);
    }
  };
  return (
    <aside className="sidebar p-3 d-flex flex-column">
      <div className="text-white fw-bold fs-4 mb-4 d-flex align-items-center gap-2">
        <span className="badge bg-light text-dark rounded-circle">₹</span>
        QPay
      </div>
      <nav className="nav nav-pills flex-column gap-1">
        <NavLink
          className={({ isActive }) =>
            `nav-link ${isActive ? "active bg-white text-black" : ""}`
          }
          to="/"
        >
          <i className="mdi mdi-home-outline me-2" />
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `nav-link  ${isActive ? "active bg-white text-black" : ""}`
          }
          to="/qr"
        >
          <i className="mdi mdi-qrcode me-2" /> QR
        </NavLink>
        <div
          className={`nav-link d-flex justify-content-between ${
            location.pathname.startsWith("/history")
              ? "active bg-white text-black"
              : ""
          }`}
          onClick={handleHistoryClick}
        >
          <i className="mdi mdi-history me-2" />
          <span>History</span>
          <i
            className={`mdi ms-auto ${
              historyOpen ? "mdi-chevron-up" : "mdi-chevron-down"
            }`}
          />
        </div>

        {/* Submenu */}
        {historyOpen && (
          <div className="submenu-card">
            <NavLink to="/history/transactions" className="nav-link">
              <i className="mdi mdi-clock-outline me-2" />
              <span>Transaction History</span>
            </NavLink>
            <NavLink to="/history/settlements" className="nav-link">
              <i className="mdi mdi-clock-outline me-2" />
              <span>Settlement History</span>
            </NavLink>
          </div>
        )}
        <NavLink
          className={({ isActive }) =>
            `nav-link  ${isActive ? "active bg-white text-black" : ""}`
          }
          to="/profile"
        >
          <i className="mdi mdi-account-outline me-2" /> Profile
        </NavLink>
      </nav>
      <div className="mt-auto text-center text-white-50 small">
        Bharat Connect
      </div>
    </aside>
  );
}
