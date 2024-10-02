import React, { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Add logic to handle registration here (e.g., API call)
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      style={{
        backgroundImage: "url(/assets/room4.jpg)",
      }}
      className="hero bg-white min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse isolate aspect-video rounded-xl px-12 bg-black/70 shadow-lg ring-1 ring-black/5 ">
        <div className="card bg-customOrange text-white w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body text-white" onSubmit={handleRegister}>
            {/* Username Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered bg-white"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered bg-white"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Register Button */}
            <div className="form-control mt-6">
              <button className="btn bg-[#050a30] text-white">Register</button>
            </div>
          </form>
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Join us to experience the best luxury and comfort in our hotel. Sign
            up to enjoy exclusive offers and services!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
