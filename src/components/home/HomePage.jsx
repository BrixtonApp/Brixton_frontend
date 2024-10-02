import React, { useState } from "react";
import RoomSearch from "../common/RoomSearch";
import { NavLink } from "react-router-dom";
import RoomResult from "../common/RoomResult";
import { TiCoffee } from "react-icons/ti";
import { IoWifi } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { LuGamepad2 } from "react-icons/lu";
import { TiLightbulb } from "react-icons/ti";
import { TbBuildingWarehouse } from "react-icons/tb";
import { LuParkingSquare } from "react-icons/lu";
import { FaSwimmingPool } from "react-icons/fa";

const HomePage = () => {
  const [roomSearchResults, setRoomSearchResults] = useState([]);

  // Function to handle search results
  const handleSearchResult = (results) => {
    setRoomSearchResults(results);
  };
  const FacilityCard = ({ name, Icon }) => (
    <div className="bg-orange-200 p-4 rounded-lg flex flex-col items-center justify-center">
      <Icon className="text-gray-700 mb-2" size={24} />
      <span className="text-sm text-gray-700 text-center">{name}</span>
    </div>
  );
  const facilities = [
    { name: "Swimming Pool", icon: FaSwimmingPool },
    { name: "Wifi", icon: IoWifi },
    { name: "Breakfast", icon: TiCoffee },
    { name: "Gym", icon: CgGym },
    { name: "Game center", icon: LuGamepad2 },
    { name: "24/7 Light", icon: TiLightbulb },
    { name: "Laundry", icon: TbBuildingWarehouse },
    { name: "Parking space", icon: LuParkingSquare },
  ];
  return (
    <>
      <div
        className="hero h-[500px] bg-white"
        style={{
          backgroundImage: "url(./assets/room2.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-35 "></div>
        <div className="hero-content  text-center text-white">
          <div className="max-w-md">
            <h1 className=" text-5xl ">Welcome to </h1>
            <h1 className="mt-3 text-5xl font-bold  bg-customOrange whitespace-nowrap ">
              Brixton Hotels
            </h1>{" "}
            <p className="my-5 text-3xl text-center">
              Hotel for every moment rich in emotion
            </p>
            <NavLink to={"/rooms"}>
              <button className="btn p-3 border-none hover:bg-customOrange bg-customOrange text-white rounded-3xl ">
                Book now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <RoomSearch handleSearchResult={handleSearchResult} />
      <RoomResult results={roomSearchResults} />

      <div className="container mx-auto px-4 py-12 text-black">
        <h2 className="text-3xl font-bold text-center mb-2">Our Facilities</h2>
        <p className="text-center text-gray-600 mb-8">
          We offer modern (5 star) hotel facilities for your comfort.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              name={facility.name}
              Icon={facility.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
