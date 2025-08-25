const cards = [
  {
    id: 1,
    title: "XXXX 9820",
    subtitle: "ICICI Bank | Chennai Egmore Branch",
    icon: "mdi-bank",
  },
  {
    id: 2,
    title: "Business Profile",
    subtitle: "View and edit your business details",
    icon: "mdi-briefcase",
  },
  {
    id: 3,
    title: "KYC Verification",
    subtitle: "Unlock exclusive benefits with KYC",
    icon: "mdi-card-account-details",
  },
  {
    id: 4,
    title: "Order QR",
    subtitle: "Get paid, manage & order QRs",
    icon: "mdi-cart",
  },
];

export default function ProfileCard() {
  return (
    <div className="container-xxl">
      <div className="row g-3">
        {cards.map((c) => (
          <div className="col-md-3" key={c.id}>
            <div className="profile-card p-3 h-100 d-flex flex-column justify-content-between">
              <div className="d-flex align-items-start gap-3 justify-content-between">
                <div className="icon-circle">
                  <i className={`mdi ${c.icon} fs-4 text-white`} />
                </div>
                <i className="mdi mdi-chevron-right text-success" />
              </div>
              <div className="flex-grow-1">
                <div className="fw-bold text-success">{c.title}</div>
                <div className="text-muted small">{c.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
