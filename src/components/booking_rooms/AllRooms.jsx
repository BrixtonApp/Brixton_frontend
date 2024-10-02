import React, { useEffect, useState } from "react";
import APIService from "../../service/APIService";
import RoomSearch from "../common/RoomSearch";
import RoomResult from "../common/RoomResult";
import Pagination from "../common/Pagination";

const AllRooms = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(6);

  const handleSearchResult = (results) => {
    setRooms(results);
    setFilteredRooms(results);
    setCurrentPage(1);
  };

  const fetchRooms = async () => {
    try {
      const response = await APIService.getAllRooms();
      const allRooms = response.roomList;
      setRooms(allRooms);
      setFilteredRooms(allRooms);
    } catch (error) {
      console.error("Error fetching rooms", error.message);
    }
  };

  const fetchRoomTypes = async () => {
    try {
      const response = await APIService.getRoomTypes();
      setRoomTypes(response);
    } catch (error) {
      console.error("Error fetching room types", error.message);
    }
  };

  useEffect(() => {
    fetchRoomTypes();
    fetchRooms();
  }, []);

  const handleRoomTypeChange = (e) => {
    setSelectedRoomType(e.target.value);
    filterRoom(e);
  };

  const filterRoom = (e) => {
    setSelectedRoomType(e.target.value);
    if (e.target.value === "") {
      setFilteredRooms(rooms);
    } else {
      const filtered = rooms.filter((room) => room.roomType === e.target.value);
      setFilteredRooms(filtered);
    }
    setCurrentPage(1);
  };

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">All Rooms</h1>

      <div className=" mt-10 flex flex-col md:flex-row gap-4">
        <div className="ml-4 w-52 md:w-40">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Room Type
          </label>
          <div className="relative">
            <select
              value={selectedRoomType}
              onChange={handleRoomTypeChange}
              className="w-full px-3 py-2 border text-black bg-white border-orange-500 rounded-md shadow-lg focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            >
              <option value="">All Types</option>
              {roomTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {/* <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} /> */}
          </div>
        </div>
        <div className="mt-[-30px]">
          <RoomSearch handleSearchResult={handleSearchResult} />
        </div>
      </div>

      <RoomResult results={currentRooms} />

      <div className="mt-8">
        <Pagination
          roomsPerPage={roomsPerPage}
          totalRooms={filteredRooms.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default AllRooms;
