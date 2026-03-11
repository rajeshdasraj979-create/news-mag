import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) return alert("Fill all fields!");
    alert("Login successful!");
    navigate("/news"); // go straight to news
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Login</h3>
      <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
      <p className="text-center mt-3">New user? <a href="/register">Register</a></p>
    </div>
  );
};

export default Login;