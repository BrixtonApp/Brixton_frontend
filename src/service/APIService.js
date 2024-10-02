import axios from "axios";

export default class APIService {
  static getHeader() {
    const token = localStorage.getItem("token");

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  // Auth API

  static async registerUser(data) {
    try {
      const response = await axios.post(
        `${process.env.BASE_URL}/auth/register`,
        data
      );
      return response.data;
    } catch (error) {
      console.log("APIService registerUser ", error);
    }
  }

  static async loginUser(data) {
    try {
      const response = await axios.post(
        `${process.env.BASE_URL}/auth/login`,
        data
      );
      return response.data;
    } catch (error) {
      console.log("APIService loginUser ", error);
    }
  }

  // User API

  static async getAllUsers() {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/users/all`, {
        headers: this.getHeader(),
      });
      return response.data;
    } catch (error) {
      console.log("APIService getUser ", error);
    }
  }

  static async getUserById(id) {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/users/get-by-id/${id}`,
        {
          headers: this.getHeader(),
        }
      );
      return response.data;
    } catch (error) {
      console.log("APIService getUserById ", error);
    }
  }

  static async deleteUser(id) {
    try {
      const response = await axios.delete(
        `${process.env.BASE_URL}/users/delete/${id}`,
        {
          headers: this.getHeader(),
        }
      );
      return response.data;
    } catch (error) {
      console.log("APIService deleteUser ", error);
    }
  }

  static async getLoggedInProfileInfo() {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/users/get-logged-in-profile-info`,
        {
          headers: this.getHeader(),
        }
      );
      return response.data;
    } catch (error) {
      console.log("APIService getLoggedInProfile ", error);
    }
  }

  static async getUserBookingHistory(id) {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/users/get-user-bookings/${id}`
      );
      return response.data;
    } catch (error) {
      console.log("APIService getUserBookingHistory ", error);
    }
  }

  // Rooms API
  static async addRoom(formData) {
    const result = await axios.post(`${this.BASE_URL}/rooms/add`, formData, {
      headers: {
        ...this.getHeader(),
        "Content-Type": "multipart/form-data",
      },
    });
    return result.data;
  }

  static async getAllRooms() {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/rooms/all`);
      return response.data;
    } catch (error) {
      console.log("APIService getAllRooms ", error);
    }
  }
  static async getRoomTypes() {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/rooms/types`);
      return response.data;
    } catch (error) {
      console.log("APIService getRoomTypes ", error);
    }
  }

  static async getRoomById(id) {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/rooms/get-by-id/${id}`
      );
      return response.data;
    } catch (error) {
      console.log("APIService getRoomById ", error);
    }
  }

  static async getAllAvailableRooms() {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/rooms/all-available-rooms`
      );
      return response.data;
    } catch (error) {
      console.log("APIService getAllAvailableRooms ", error);
    }
  }

  static async getAvailableRoomsByDateAndType(
    checkInDate,
    checkOutDate,
    roomType
  ) {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/rooms/available-rooms-by-date-and-type?checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&roomType=${roomType}`
      );
      return response.data;
    } catch (error) {
      console.log("APIService getAvailableRoomsByDateAndType ", error);
    }
  }
  /* This  gets all room types from thee database */

  /* This  gets all rooms from the database */

  /* This funcction gets a room by the id */

  /* This  deletes a room by the Id */
  static async deleteRoom(roomId) {
    const result = await axios.delete(
      `${process.env.BASE_URL}/rooms/delete/${roomId}`,
      {
        headers: this.getHeader(),
      }
    );
    return result.data;
  }

  /* This updates a room */
  static async updateRoom(roomId, formData) {
    const result = await axios.put(
      `${process.env.BASE_URL}/rooms/update/${roomId}`,
      formData,
      {
        headers: {
          ...this.getHeader(),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return result.data;
  }

  /**BOOKING */
  /* This  saves a new booking to the databse */
  static async bookRoom(roomId, userId, booking) {
    console.log("USER ID IS: " + userId);

    const response = await axios.post(
      `${process.env.BASE_URL}/bookings/book-room/${roomId}/${userId}`,
      booking,
      {
        headers: this.getHeader(),
      }
    );
    return response.data;
  }

  /* This  gets alll bokings from the database */
  static async getAllBookings() {
    const result = await axios.get(`${this.BASE_URL}/bookings/all`, {
      headers: this.getHeader(),
    });
    return result.data;
  }

  /* This  get booking by the cnfirmation code */
  static async getBookingByConfirmationCode(bookingCode) {
    const result = await axios.get(
      `${this.BASE_URL}/bookings/get-by-confirmation-code/${bookingCode}`
    );
    return result.data;
  }

  /* This is the  to cancel user booking */
  static async cancelBooking(bookingId) {
    const result = await axios.delete(
      `${this.BASE_URL}/bookings/cancel/${bookingId}`,
      {
        headers: this.getHeader(),
      }
    );
    return result.data;
  }

  /**AUTHENTICATION CHECKER */
  static logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  }

  static isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  }

  static isAdmin() {
    const role = localStorage.getItem("role");
    return role === "ADMIN";
  }

  static isUser() {
    const role = localStorage.getItem("role");
    return role === "USER";
  }
}
