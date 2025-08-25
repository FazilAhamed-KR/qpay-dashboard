import { useState } from "react";

const StatusSection = ({ req }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-success bg-opacity-10 mt-3 rounded">
      <div
        className="fw-semibold text-success d-flex align-items-center justify-content-between p-2"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <div className="d-flex align-items-center">
          <i className="mdi mdi-check-circle me-2" /> {/* ✅ Green tick icon */}
          {req.status}
        </div>
        <i className={`mdi ${open ? "mdi-chevron-up" : "mdi-chevron-down"}`} />{" "}
        {/* ⬆️⬇️ Dropdown chevron */}
      </div>

      {open && (
        <ul className="list-unstyled small mb-0 ps-4 pb-2 text-muted">
          <li>
            <i className="mdi mdi-circle-outline me-2" />
            Awaiting Production
          </li>
          <li>
            <i className="mdi mdi-circle-outline me-2" />
            Awaiting Dispatch
          </li>
          <li>
            <i className="mdi mdi-circle-outline me-2" />
            Awaiting Delivery
          </li>
        </ul>
      )}
    </div>
  );
};

export default StatusSection;
