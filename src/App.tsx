import { Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Home from "./Pages/Home";
import ManageQR from "./Pages/ManageQR";
import Profile from "./Pages/Profile";
import History from "./Pages/History";

export default function App() {
  return (
    <AppProvider>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Topbar />
          <main className="container-fluid py-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/qr" element={<ManageQR />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/history" element={<History />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </AppProvider>
  );
}
