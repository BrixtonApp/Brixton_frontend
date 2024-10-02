import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import NavBar from "./components/common/NavBar";
import AllRooms from "./components/booking_rooms/AllRooms";
import FindBookings from "./components/booking_rooms/FindBookings";
import RoomDetails from "./components/booking_rooms/RoomDetails";
import { ProtectedRoute, AdminRoute } from "./service/middleware";
import EditProfile from "./components/profile/EditProfile";
import AdminPage from "./components/admin/AdminPage";
import AddRoomPage from "./components/admin/AddRoomPage";
import EditBookingPage from "./components/admin/EditBookingPage";
import ManageRoomPage from "./components/admin/ManageRoomPage";
import ManageBookingsPage from "./components/admin/ManageBookingsPage";
import EditRoomPage from "./components/admin/EditRoomPage";
import Footer from "./components/common/Footer";
function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/auth/login" element={<LoginPage />} />
            <Route exact path="/auth/register" element={<RegisterPage />} />
            <Route exact path="/rooms" element={<AllRooms />} />
            <Route exact path="/find-my-bookings" element={<FindBookings />} />

            <Route
              path="/room-details-book/:roomId"
              element={<ProtectedRoute element={<RoomDetails />} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute element={<RoomDetails />} />}
            />
            <Route
              path="/edit-profile"
              element={<ProtectedRoute element={<EditProfile />} />}
            />

            <Route
              path="/admin"
              element={<AdminRoute element={<AdminPage />} />}
            />
            <Route
              path="/admin/manage-rooms"
              element={<AdminRoute element={<ManageRoomPage />} />}
            />
            <Route
              path="/admin/edit-booking/:bookingId"
              element={<AdminRoute element={<EditBookingPage />} />}
            />
            <Route
              path="/admin/add-room"
              element={<AdminRoute element={<AddRoomPage />} />}
            />
            <Route
              path="/admin/manage-bookings"
              element={<AdminRoute element={<ManageBookingsPage />} />}
            />
            <Route
              path="/admin/edit-room/:roomId"
              element={<AdminRoute element={<EditRoomPage />} />}
            />
            <Route path="*" element={<Navigate to={"/login"} />} />
          </Routes>
        </div>
        <RoomDetails />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
