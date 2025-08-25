// interface StausProps {
//   status: any;
// }

// export default function StatusPill({ status }: StausProps) {
//   const s = (status || "").toLowerCase();
//   const cls = s.includes("success")
//     ? "status-success"
//     : s.includes("fail")
//     ? "status-failed"
//     : "status-pending";
//   return <span className={`status-pill ${cls}`}>{status}</span>;
// }

type StatusPillProps = {
  status: string;
};

export default function StatusPill({ status }: StatusPillProps) {
  let cls = "status-pill ";
  switch (status.toLowerCase()) {
    case "success":
      cls += "status-success";
      break;
    case "failed":
    case "failure":
      cls += "status-failed";
      break;
    default:
      cls += "status-pending";
  }

  return <span className={cls}>{status}</span>;
}
