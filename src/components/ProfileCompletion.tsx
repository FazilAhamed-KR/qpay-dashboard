import ProgressRing from "./ProgressRing";

const ProfileCompletion = () => {
  return (
    <div className="card-soft p-3 h-100 d-flex flex-column align-items-center justify-content-center text-center">
      <h6 className="text-muted text-start d-flex w-100" style={{ marginBottom: "5%" }}>
        PROFILE
      </h6>
      <div className="d-flex" style={{ marginBottom: "8%" }}>
        <div className="mb-3">
          <ProgressRing percent={30} />
        </div>
        <div className="d-flex flex-column">
          <p className="fw-bold mb-2">Complete your profile</p>
          <ol className="text-muted mb-3">
            <li>Personal KYC</li>
            <li>Company KYC</li>
            <li>Onboarding details</li>
          </ol>
        </div>
      </div>
      <button className="btn btn-brand w-100 rounded-pill">Next</button>
    </div>
  );
};

export default ProfileCompletion;
