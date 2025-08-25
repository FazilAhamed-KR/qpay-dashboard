export default function HistoryHeader() {
  return (
    <div className="p-3 mb-3">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="m-0 fw-bold">Settlement History</h4>
        <button className="btn btn-outline-success">Download statement</button>
      </div>

      {/* Search + Filter */}
      <div className="d-flex gap-2 mb-3">
        <div className="flex-grow-1 position-relative">
          <i className="mdi mdi-magnify search-icon" />
          <input className="form-control ps-5" placeholder="Search" />
        </div>
        <button className="btn btn-light border">
          <i className="mdi mdi-filter-variant"></i>
        </button>
      </div>

      {/* Notice Bar */}
      <div className="notice-box d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <i className="mdi mdi-clock-outline fs-5 text-success"></i>
          <span>
            Today’s total collection will be auto-settled by{" "}
            <strong>08:00AM, 23rd Oct’22</strong> Tomorrow.
          </span>
        </div>
        <button className="btn btn-success fw-semibold">
          <i className="mdi mdi-cash-fast me-1"></i> Settle Now!
        </button>
      </div>
    </div>
  );
}
