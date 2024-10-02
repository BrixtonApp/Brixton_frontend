import React, { useState } from "react";
import RoomSearch from "../common/RoomSearch";

const HomePage = () => {
  const [roomSearchResults, setRoomSearchResults] = useState([]);

  // Function to handle search results
  const handleSearchResult = (results) => {
    setRoomSearchResults(results);
  };
  return (
    <>
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: "url(./assets/room2.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-35"></div>
        <div className="hero-content  text-center text-white">
          <div className="max-w-md">
            <h1 className=" text-5xl ">Welcome to </h1>
            <h1 className="mt-3 text-5xl font-bold  bg-customOrange whitespace-nowrap ">
              Brixton Hotels
            </h1>{" "}
            <p className="my-5 text-3xl text-center">
              Hotel for every moment rich in emotion
            </p>
            <button className="btn p-3 border-none hover:bg-customOrange bg-customOrange text-white rounded-3xl ">
              Book now
            </button>
          </div>
        </div>
      </div>
      <RoomSearch handleSearchResult={handleSearchResult} />
    </>
  );
};

export default HomePage;
