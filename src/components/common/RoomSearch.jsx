import React, { useState, useEffect } from "react";
import APIService from "../../service/APIService";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const RoomSearch = ({ handleSearchResult }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [roomTypes, setRoomTypes] = useState([]);
  const [error, setError] = useState();

  const fetchRoomTypes = async () => {
    try {
      console.log("fetch");
      const response = await APIService.getRoomTypes();
      console.log("response");
      console.log(response);

      setRoomTypes(response);
    } catch (error) {
      console.error("Error fetching room types", error.message);
    }
  };
  const showError = (message, timeout = 5000) => {
    setError(message);
    setTimeout(() => {
      setError("");
    }, timeout);
  };

  useEffect(() => {
    fetchRoomTypes();
  }, []);
  const handleInternalSearch = async () => {
    console.log(startDate);
    console.log(endDate);
    console.log(roomType);
    if (!startDate || !endDate || !roomType) {
      showError("Please select all fields");
      return false;
    }
    try {
      // Convert startDate to the desired format
      const formattedStartDate = startDate
        ? startDate.toISOString().split("T")[0]
        : null;
      const formattedEndDate = endDate
        ? endDate.toISOString().split("T")[0]
        : null;
      // Call the API to fetch available rooms
      const response = await APIService.getAvailableRoomsByDateAndType(
        formattedStartDate,
        formattedEndDate,
        roomType
      );
      console.log("getAvailableRoomsByDateAndType", response);

      // Check if the response is successful
      if (response.statusCode === 200) {
        if (response.roomList.length === 0) {
          showError(
            "Room not currently available for this date range on the selected rom type."
          );
          return;
        }
        handleSearchResult(response.roomList);
        setError("");
      }
    } catch (error) {
      showError("Unown error occured: " + error.response.data.message);
    }
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-black mb-1">
              Check-in Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Check-in Date"
              className="w-full px-3 py-2 border text-black bg-white border-orange-500 rounded-md shadow-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check-out Date
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select Check-out Date"
              className="w-full px-3 py-2 border text-black bg-white border-orange-500 rounded-md shadow-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Room Type
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full px-3 py-2 border text-black bg-white border-orange-500 rounded-md shadow-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            >
              <option disabled value="" className="bg-white">
                Select Room Type
              </option>
              {/* {roomTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))} */}
            </select>
          </div>
          <div>
            <button
              onClick={handleInternalSearch}
              className="mt-5 w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-customOrange hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Search Rooms
            </button>
          </div>
        </div>
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </div>
    </section>
  );
};

export default RoomSearch;
