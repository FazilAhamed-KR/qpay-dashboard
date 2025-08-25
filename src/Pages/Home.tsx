const stats = [
  { value: "1.5k", label: "Account Holders" },
  { value: "2.1k", label: "Transactions" },
  { value: "2.3k", label: "Settlement" },
  { value: "45k", label: "QR Orders" },
];
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProfileCompletion from "../components/ProfileCompletion";
import QRSection from "../components/QRSection";

const Home = () => {
  return (
    <div className="container-xxl d-flex">
      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Banner */}
        <Container fluid className="my-4">
          <Row className="align-items-center promo-banner rounded-3 p-4">
            {/* Left Content */}
            <Col md={7} className="text-white">
              <h3 className="fw-bold">
                Pay ₹1/month* for the{" "}
                <span className="fw-bold">QPay POS Device</span>
              </h3>
              <p className="mb-3">
                One device for accepting all modes of payments
              </p>
              <Button
                variant="light"
                className="fw-bold px-4 py-2 rounded-pill"
              >
                Download App Now!
              </Button>
            </Col>

            {/* Right Illustration */}
            <Col md={5} className="text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Promo Illustration"
                className="img-fluid"
                style={{ maxHeight: "200px" }}
              />
            </Col>
          </Row>
        </Container>

        {/* Stats */}
        <div className="my-4">
          <Row className="g-3">
            {stats.map((item, idx) => (
              <Col md={3} sm={6} xs={12} key={idx}>
                <Card className="shadow-sm border rounded-3 text-center p-3">
                  <h4 className="fw-bold text-success">{item.value}</h4>
                  <p className="mb-0 text-muted">{item.label}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Profile + QR */}
        <Row className="mb-4">
          <Col md={6}>
            <ProfileCompletion />
          </Col>
          <Col md={6}>
            <QRSection />
          </Col>
        </Row>

        {/* Settlement + Transactions */}
        <Row>
          <Col md={6}>
            <Card className="card-soft p-3 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="text-muted mb-0">SETTLEMENT</h6>
                <span className="text-muted">&gt;</span>
              </div>
              <h5 className="fw-bold mb-3">₹1,23,816.19</h5>

              <div className="transaction-list mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <p className="mb-0 fw-semibold">Ibrahim</p>
                    <small className="text-muted">23 Oct, 09:15 AM</small>
                  </div>
                  <span className="fw-bold text-success">+₹90</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <p className="mb-0 fw-semibold">Ibrahim</p>
                    <small className="text-muted">23 Oct, 09:15 AM</small>
                  </div>
                  <span className="fw-bold text-success">+₹90</span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fw-semibold">Ibrahim</p>
                    <small className="text-muted">23 Oct, 09:15 AM</small>
                  </div>
                  <span className="fw-bold text-success">+₹90</span>
                </div>
              </div>

              <Button className="btn-brand w-100 rounded-pill">
                Settle Now
              </Button>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="card-soft p-3 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="text-muted mb-0">TOTAL TRANSACTIONS</h6>
                <span className="text-muted">&gt;</span>
              </div>
              <h5 className="fw-bold mb-3">₹1,23,816.19</h5>

              <div className="transaction-list mb-3">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <p className="mb-0 fw-semibold">Ibrahim</p>
                    <small className="text-muted">23 Oct, 09:15 AM</small>
                  </div>
                  <span className="fw-bold text-success">+₹90</span>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <p className="mb-0 fw-semibold">Ibrahim</p>
                    <small className="text-muted">23 Oct, 09:15 AM</small>
                  </div>
                  <span className="fw-bold text-success">+₹90</span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-0 fw-semibold">Ibrahim</p>
                    <small className="text-muted">23 Oct, 09:15 AM</small>
                  </div>
                  <span className="fw-bold text-success">+₹90</span>
                </div>
              </div>

              <Button className="btn-brand w-100 rounded-pill">View All</Button>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
