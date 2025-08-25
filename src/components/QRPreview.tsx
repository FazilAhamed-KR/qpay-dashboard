import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";

export default function QRPreview({
  upiId = "9876543210@qpay",
  name = "Ibrahim Mohammedali",
}) {
  const qrRef = useRef<HTMLDivElement | null>(null);

  // Download QR as PNG
  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = `${upiId}-qr.png`;
    a.click();
  };

  const handleShare = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (!blob) return;
      const file = new File([blob], `${upiId}-qr.png`, { type: "image/png" });

      if (navigator.share) {
        navigator
          .share({
            title: "My QR Code",
            text: `Scan this QR to pay me via UPI: ${upiId}`,
            files: [file],
          })
          .catch((err) => console.log("Share failed:", err));
      } else {
        alert("Sharing is not supported in this browser.");
      }
    });
  };

  return (
    <div className="card-soft p-3 qr-panel">
      <div ref={qrRef} className="text-center mb-3">
        <QRCodeCanvas value={`upi://${upiId}`} size={260} includeMargin />
      </div>

      <div className="text-center">
        <div className="fw-semibold small">
          UPI ID: {upiId} <i className="bi bi-clipboard" />
        </div>
        <div className="text-muted small">{name}</div>
      </div>

      <div className="d-flex gap-2" style={{ marginTop: "30%" }}>
        <button className="btn btn-light w-50" onClick={handleDownload}>
          <i className="bi bi-download me-1" />
          Download
        </button>
        <button className="btn btn-light w-50" onClick={handleShare}>
          <i className="bi bi-share me-1" />
          Share
        </button>
      </div>
    </div>
  );
}
