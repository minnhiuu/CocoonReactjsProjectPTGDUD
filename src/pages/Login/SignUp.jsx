import { useState } from "react";
import {
  FaGoogle,
  FaFacebook,
  FaApple,
  FaPhone,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./LogIn.css";

export default function SignUpForm({ setShowSignUp }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ phone: "", password: "", confirmPassword: "" });

  const validatePhone = (phone) => /^\d{10,11}$/.test(phone);
  const validatePassword = (password) => password.length >= 6;

  const handleSignUp = (e) => {
    e.preventDefault();
    let newErrors = { phone: "", password: "", confirmPassword: "" };

    if (!phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại!";
    } else if (!validatePhone(phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ!";
    }

    if (!password.trim()) {
      newErrors.password = "Vui lòng nhập mật khẩu!";
    } else if (!validatePassword(password)) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
    }

    if (confirmPassword !== password) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp!";
    }

    setErrors(newErrors);

    if (!newErrors.phone && !newErrors.password && !newErrors.confirmPassword) {
      console.log("Phone:", phone, "Password:", password);
      alert("Đăng ký thành công!");
      setShowSignUp(false);
    }
  };

  return (
    <div>
      <div className="bg-white p-4 rounded-3 shadow-lg" style={{ width: "600px", height: "550px" }}>
        <header className="d-flex justify-content-between align-items-center border-bottom pb-3">
          <h2 className="m-0">Đăng ký</h2>
          <button onClick={() => setShowSignUp(false)} className="btn-close" />
        </header>

        <h2 className="text-center mt-3">Chào mừng bạn đến với Cocoon</h2>

        <form onSubmit={handleSignUp} className="mt-4">
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text text-warning">
                <FaPhone />
              </span>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Nhập số điện thoại"
              />
            </div>
            {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </div>

          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text text-warning">
                <FaLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
              />
              <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text text-warning">
                <FaLock />
              </span>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
          </div>

          <button type="submit" className="btn btn-dark w-100 mt-3">
            Đăng ký
          </button>
        </form>

        <p className="text-center mt-3">
          Bạn đã có tài khoản? <a href="#" className="text-warning text-decoration-none">Đăng nhập</a>
        </p>

        <footer className="text-center mt-3">
          <p>Hoặc đăng ký bằng</p>
          <div className="d-flex justify-content-center gap-3">
            <FaGoogle className="text-danger fs-3 cursor-pointer" />
            <FaFacebook className="text-primary fs-3 cursor-pointer" style={{ marginLeft: "30px" }} />
            <FaApple className="text-dark fs-3 cursor-pointer" style={{ marginLeft: "30px" }} />
          </div>
        </footer>
      </div>
    </div>
  );
}
