import { useState } from "react";
import QRPreview from "../components/QRPreview";
import StatusSection from "../components/StatusSection";

const mock = Array.from({ length: 4 }).map((_, i) => ({
  id: `Q201946579`,
  title: "All Marketing Sales- MS1903041155331648980231",
  terminal: `Terminal ${i + 1}`,
}));

const requestMock = Array.from({ length: 2 }).map(() => ({
  id: `Q${Math.floor(100000 + Math.random() * 900000)}`,
  title: "All Marketing Sales",
  address: "45, Bharathi Nagar, VOC Port Authority, Tuticorin, 628004.",
  requestedOn: "26.04.2023",
  status: "QR Request Accepted",
}));

export default function ManageQR() {
  const [activeTab, setActiveTab] = useState<"active" | "requests">("active");

  return (
    <div className="container-xxl py-3">
      <h5 className="mb-3 fw-bold" style={{ marginLeft: "13%" }}>
        Manage QR/POS
      </h5>
      <div className="row g-3">
        {/* Left QR Preview */}
        <div className="col-lg-6 d-flex justify-content-center">
          <QRPreview />
        </div>

        {/* Right QR List */}
        <div className="col-lg-6">
          <div className="card-soft p-3">
            {/* Tabs */}
            <ul className="nav nav-pills mb-3 gap-2">
              <li className="nav-item flex-grow-1">
                <button
                  className={`nav-link  w-100 ${
                    activeTab === "active" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("active")}
                >
                  Active QR Codes
                </button>
              </li>
              <li className="nav-item flex-grow-1">
                <button
                  className={`nav-link ${
                    activeTab === "requests" ? "active" : ""
                  } w-100`}
                  onClick={() => setActiveTab("requests")}
                >
                  QR Code Requests
                </button>
              </li>
            </ul>

            {/* QR List */}
            {activeTab === "active" && (
              <div className="list-group mb-3">
                {mock.map((m, idx) => (
                  <div
                    key={idx}
                    className="list-group-item d-flex align-items-center gap-3"
                  >
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=upi://pay"
                      alt="QR Thumbnail"
                      className="rounded"
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold">{m.id}</div>
                      <div className="text-muted small">{m.title}</div>
                      <div className="text-muted small">{m.terminal}</div>
                    </div>
                    <i className="bi bi-chevron-right text-muted" />
                  </div>
                ))}
              </div>
            )}

            {activeTab === "requests" && (
              <div className="list-group">
                {requestMock.map((req) => (
                  <div key={req.id} className="list-group-item mb-3">
                    <div className="d-flex gap-3">
                      <div className="border rounded d-flex align-items-center justify-content-center p-2">
                        {/* <i className="bi bi-qr-code fs-4" /> */}
                        <img
                          src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=upi://pay"
                          alt="QR Thumbnail"
                          className="rounded"
                        />
                      </div>
                      <div>
                        <div className="fw-semibold">{req.title}</div>
                        <div className="text-muted small">{req.address}</div>
                        <div className="text-muted small">
                          Requested on {req.requestedOn}
                        </div>
                      </div>
                    </div>

                    {/* Status Box */}
                    <StatusSection req={req} />
                  </div>
                ))}
              </div>
            )}

            {/* Request Button */}
            <button className="btn btn-brand w-100 rounded-pill">
              Request more QR Codes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
