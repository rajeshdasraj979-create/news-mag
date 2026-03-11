import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !password) return alert("Fill all fields!");
    alert("Registration successful!");
    navigate("/news"); // go straight to news
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Register</h3>
      <input type="text" className="form-control mb-3" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" className="form-control mb-3" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary w-100" onClick={handleRegister}>Register</button>
      <p className="text-center mt-3">Already have an account? <a href="/">Login</a></p>
    </div>
  );
};

export default Register;