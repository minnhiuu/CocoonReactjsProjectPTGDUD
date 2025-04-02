import "./UserProfile.css";

export default function UserProfile({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  if (!user) return null;

  return (
    <div className="user-profile position-absolute bg-white p-3 rounded shadow mt-2" style={{ width: "450px" }}>
      <div className="d-flex align-items-center">
        <img
          src={user.avatar || "/images/default-avatar.png"}
          alt="Avatar"
          className="me-3"
          width="100"
          height="150"
        />
        <div>
          <p><strong>Họ và tên:</strong> {user.name}</p>
          <p><strong>Số điện thoại:</strong> {user.phone}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
      <button className="btn btn-sm btn-danger w-100 mt-3" onClick={handleLogout}>Đăng xuất</button>
    </div>
  );
}