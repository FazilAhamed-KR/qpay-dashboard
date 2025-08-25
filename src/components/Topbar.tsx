import { useApp } from "../Context/AppContext"

export default function Topbar(){
  const { user } = useApp()
  return (
    <header className="topbar d-flex align-items-center px-3 justify-content-end">
      <div className="d-flex align-items-center gap-2">
        <img src={user.avatar} alt="avatar" className="rounded-circle" width={36} height={36} />
        <div className="fw-semibold">{user.name}</div>
        <i className="bi bi-chevron-down" />
      </div>
    </header>
  )
}