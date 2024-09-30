import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
