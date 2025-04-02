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
import SignUpForm from "./SignUp";

export default function LoginForm({ setShowLogin }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ phone: "", password: "" });
  const [showSignUp, setShowSignUp] = useState(false);
  const validatePhone = (phone) => {
    return /^\d{10,11}$/.test(phone); // Chỉ nhận số, từ 10-11 chữ số
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let newErrors = { phone: "", password: "" };
  
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
  
    setErrors(newErrors);
  
    if (!newErrors.phone && !newErrors.password) {
      console.log("Phone:", phone, "Password:", password, "Remember:", remember);
      alert("Đăng nhập thành công!"); 
      setShowLogin(false); 
    }
  };
  
  if (showSignUp) {
    return <SignUpForm setShowSignUp={setShowSignUp} />;
  }
  return (
    <div>
      <div
        className="bg-white p-4 rounded-3 shadow-lg d-flex flex-column"
        style={{ width: "600px", height: "600px" }}
      >
        <header className="d-flex justify-content-between align-items-center border-bottom pb-3">
          <h2 className="m-0">Đăng nhập</h2>
          <button onClick={() => setShowLogin(false)} className="btn-close" />
        </header>

        <h2 className="text-center mt-3">Cocoon chào bạn trở lại</h2>

        <form onSubmit={handleLogin} className="mt-4 flex-grow-1">
          {/* Số điện thoại */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text text-warning" style={{ marginTop: "10px" }}>
                <FaPhone />
              </span>
              <input
                type="text"
                className="form-control"
                style={{ marginTop: "10px" }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Nhập số điện thoại"
              />
            </div>
            {errors.phone && <small className="text-danger">{errors.phone}</small>}
          </div>

          {/* Mật khẩu */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text text-warning" style={{ marginTop: "20px" }}>
                <FaLock />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                style={{ marginTop: "20px" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Nhập mật khẩu"
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          {/* Ghi nhớ mật khẩu + Quên mật khẩu */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input border-warning"
                style={{ marginTop: "20px" }}
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label className="form-check-label" style={{ marginTop: "20px" }}>
                Ghi nhớ mật khẩu
              </label>
            </div>
            <a href="#" className="text-decoration-none text-warning" style={{ marginTop: "20px" }}>
              Quên mật khẩu?
            </a>
          </div>

          {/* Nút đăng nhập */}
          <button type="submit" className="btn btn-dark w-100" style={{ marginTop: "10px" }}>
            Đăng nhập
          </button>
        </form>

        {/* Tạo tài khoản */}
        <p className="text-center mt-3">
          Bạn chưa có tài khoản?{" "}
          <a href="#" className="text-warning text-decoration-none" onClick={() => setShowSignUp(true)}>
            Tạo tài khoản
          </a>
        </p>

        {/* Đăng nhập bằng MXH */}
        <footer className="text-center mt-3">
          <p>Hoặc đăng nhập bằng</p>
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
