import ProfileCard from "../components/ProfileCard";
import ServiceCard from "../components/ProfileFooter";

const businessServices = [
  { id: 1, title: "Smart Speaker", icon: "mdi-speaker" },
  { id: 2, title: "POS Machine", icon: "mdi-cellphone-nfc" },
];

const manageBusiness = [
  { id: 1, title: "Payment Settings", icon: "mdi-cog" },
  { id: 2, title: "Manage Staff", icon: "mdi-account-group" },
  { id: 3, title: "Change Language", icon: "mdi-translate" },
];

export default function Profile() {
  return (
    <div className="container-xxl">
      {/* Promo Banner */}
      <div className="promo-banner p-4 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3 rounded">
        <div>
          <div className="fs-4 fw-bold text-white">
            Pay ₹1/month* for the QPay POS Device
          </div>
          <div className="text-white-50">
            One device for accepting all modes of payments
          </div>
          <button className="btn btn-light btn-sm mt-2 fw-semibold">
            Download App Now
          </button>
        </div>
        <img
          src="/assets/pos-illustration.png"
          alt="POS Device"
          className="banner-img"
        />
      </div>

      {/* Profile Quick Actions */}
      <ProfileCard />

      {/* Business Sections */}
      <div className="container-xxl">
        <div className="row g-3 mt-1">
          {/* Business Services */}
          <div className="col-md-6">
            <div className="card-soft p-3 h-100">
              <div className="fw-semibold text-muted mb-3">
                BUSINESS SERVICES
              </div>
              <div className="d-flex gap-3">
                {businessServices.map((s) => (
                  <ServiceCard key={s.id} {...s} />
                ))}
              </div>
            </div>
          </div>

          {/* Manage Business */}
          <div className="col-md-6">
            <div className="card-soft p-3 h-100">
              <div className="fw-semibold text-muted mb-3">MANAGE BUSINESS</div>
              <div className="d-flex gap-3">
                {manageBusiness.map((s) => (
                  <ServiceCard key={s.id} {...s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
