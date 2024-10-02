import React from "react";

const FindBookings = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./assets/qr.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[600px] hero flex items-center justify-center"
    >
      <div className="pb-3 w-full max-w-md h-auto text-black bg-blue-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-customOrange">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center text-white mb-8">
            Find Booking
          </h1>
          <form className="space-y-4">
            <div>
              <input
                type="text"
                value={""}
                placeholder="Enter your booking confirmation code"
                className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-customOrange focus:border-customOrange"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-customOrange text-white px-4 py-2 rounded-md hover:bg-customOrange focus:outline-none focus:ring-2 focus:ring-customOrange focus:ring-offset-2"
              >
                Find
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FindBookings;
