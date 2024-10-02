import React from "react";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const { roomId } = useParams();
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Room Details</h1>

      {/* Room Image */}
      <div className="flex justify-center mb-8">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Room"
          className="w-full h-96 object-cover rounded-lg shadow-xxl"
        />
      </div>

      {/* Room Information */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Deluxe Room</h2>
        <p className="text-gray-700 mb-6">
          This deluxe room offers you the best comfort and luxury for your stay.
          Enjoy the spacious and modern design, with all the amenities you need
          for a relaxing experience.
        </p>

        <ul className="list-disc pl-5 mb-6 text-gray-700">
          <li>King-size bed</li>
          <li>Free Wi-Fi</li>
          <li>Air conditioning</li>
          <li>Private balcony</li>
          <li>Room service</li>
        </ul>

        <p className="text-2xl font-bold mb-4">Price: $120/night</p>

        {/* Book Now Button */}
        <div className="flex justify-center">
          <button className="bg-customOrange text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
