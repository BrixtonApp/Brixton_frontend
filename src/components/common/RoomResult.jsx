import React from "react";
import { FaTv } from "react-icons/fa";
import { TiCoffee } from "react-icons/ti";
import { IoWifi } from "react-icons/io5";
import APIService from "../../service/APIService";
import { useNavigate } from "react-router-dom";
const RoomResult = ({ results }) => {
  const isAdmin = APIService.isAdmin();
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-4 py-8">
      {results && results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={room.roomPhotoUrl || "/api/placeholder/626/350"}
                className="w-full h-64 object-cover"
                alt={`Room ${index + 1}`}
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-2xl font-semibold text-customOrange">
                    {room.name || "The Royal Room"}
                  </h2>
                  <span className="text-sm text-green-600 font-medium">
                    {room.bookings.length ? "Available" : "Not Available"}
                  </span>
                </div>
                <p className="text-2xl font-bold text-customOrange mb-4">
                  ${room.roomPrice?.toLocaleString() || "190,000"} / night
                </p>
                <hr className="my-3 border border-b-2 " />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full ">
                      <FaTv size={20} className="text-black" />
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full ">
                      <TiCoffee size={20} className="text-black" />
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full ">
                      <IoWifi size={20} className="text-black" />
                    </div>
                  </div>
                  {isAdmin ? (
                    <button
                      onClick={() => navigate(`/admin/edit-room/${room._id}`)}
                      className="bg-customOrange text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors duration-300"
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate(`/room-details-book/${room.id}`)}
                      className="bg-customOrange text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors duration-300"
                    >
                      Book now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default RoomResult;
