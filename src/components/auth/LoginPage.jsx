import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic to handle login here (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      style={{
        backgroundImage: "url(/assets/room3.jpg)",
      }}
      className="hero bg-white min-h-screen "
    >
      <div className="hero-content flex-col lg:flex-row-reverse isolate aspect-video  rounded-xl px-12  bg-black/70 shadow-lg ring-1 ring-black/5 ">
        <div className="card bg-customOrange text-white w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body text-white ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white ">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#050a30] text-white">Login</button>
            </div>
          </form>
        </div>
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            exc
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
