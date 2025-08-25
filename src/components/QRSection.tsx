import { QRCodeCanvas } from "qrcode.react";

const QRSection = () => {
  return (
    <div className="card-soft p-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
      <h6
        className="text-muted text-start d-flex w-100"
        style={{ marginBottom: "5%" }}
      >
        QR
      </h6>

      <div className="d-flex" style={{ marginBottom: "5%" }}>
        <div className="qr-code mb-3">
          <QRCodeCanvas
            value="https://your-link-or-order-id.com" // 👉 dynamic value goes here
            size={120} // size of QR
            bgColor="#ffffff"
            fgColor="#000000"
            level="H" // error correction level (L, M, Q, H)
            includeMargin={true}
          />
        </div>
        <div className="d-flex flex-column">
          <p className="fw-bold mb-2 text-start">Order QR</p>
          <ol className="text-muted mb-3">
            <li>Receive Payment</li>
            <li>Order new QRs</li>
            <li>Download QR</li>
          </ol>
        </div>
      </div>
      <button className="btn btn-brand w-100 rounded-pill">View More</button>
    </div>
  );
};

export default QRSection;
