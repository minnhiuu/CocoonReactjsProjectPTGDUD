import "./UserProfile.css";

export default function UserProfile({ user, setUser, showProfile }) {

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(); // Thực hiện reload sau khi đăng xuất
  };

  return (
    showProfile && user && (
      <div className="user-profile position-absolute bg-white p-3 rounded shadow mt-2" style={{ width: "400px" }}>
        <p><strong>Họ và tên:</strong> {user.name}</p>
        <p><strong>Số điện thoại:</strong> {user.phone}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button className="btn btn-sm btn-danger w-100" onClick={handleLogout}>Đăng xuất</button>
      </div>
    )
  );
}
