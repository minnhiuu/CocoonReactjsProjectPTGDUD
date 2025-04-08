import "./UserProfile.css";
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake } from "react-icons/fa";

export default function UserProfile({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload();
  };

  const formatDate = (isoDate) => {
    if (!isoDate) return "";
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };

  if (!user) return null;

  return (
    <div className="user-profile bg-light p-4 rounded-4 shadow-lg mt-3" style={{ width: "500px" }}>
      <div className="text-center mb-4">
      <div className="d-flex justify-content-center">
    <img
      src={user.avatar || "/images/default-avatar.png"}
      alt="Avatar"
      className="rounded-circle shadow"
      width="120"
      height="120"
      style={{ objectFit: "cover", border: "4px solid #fff" }}
    />
  </div>
        <h4 className="mt-3">{user.name}</h4>
      </div>

      <div className="user-info px-2">
        <p><FaBirthdayCake className="me-2 text-danger" /> <strong>Ngày sinh:</strong> {formatDate(user.dob)}</p>
        <p><FaPhone className="me-2 text-success" /> <strong>Số điện thoại:</strong> {user.phone}</p>
        <p><FaEnvelope className="me-2 text-primary" /> <strong>Email:</strong> {user.email}</p>
        <p><FaMapMarkerAlt className="me-2 text-warning" /> <strong>Địa chỉ:</strong> {user.address}</p>
      </div>

      <button className="btn btn-danger w-100 mt-4 py-2 rounded-3 fw-bold" onClick={handleLogout}>
        Đăng xuất
      </button>
    </div>
  );
}
