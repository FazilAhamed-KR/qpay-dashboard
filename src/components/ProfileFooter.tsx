function ServiceCard({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="text-center service-card">
      <div className="icon-box mx-auto mb-2">
        <i className={`mdi ${icon} text-success fs-4`} />
      </div>
      <div className="small fw-medium">{title}</div>
    </div>
  );
}

export default ServiceCard