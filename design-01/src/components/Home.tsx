import React from "react";

const Home = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="top flex items-center justify-center gap-10 flex-col">
        <div className="user-icons py-10 flex items-center justify-center ">
          <div className="icons overflow-hidden  size-10 rounded-full ">
            <img
              className="w-full object-top object-cover  "
              src="https://i.pinimg.com/1200x/5a/8a/81/5a8a81dc91bf8c406e23c121b2125237.jpg"
              alt=""
            />
          </div>
          <div className="icons overflow-hidden size-10 rounded-full ">
            <img
              className="w-full object-top object-cover  "
              src="https://i.pinimg.com/736x/1f/92/9b/1f929b53103d7b144eb615cf41c0f083.jpg"
              alt=""
            />
          </div>
          <div className="icons overflow-hidden size-10 rounded-full ">
            <img
              className="w-full object-top object-cover  "
              src="https://i.pinimg.com/736x/38/5d/f7/385df70326f274df800a0a2c7ce3509b.jpg"
              alt=""
            />
          </div>
          <div className="icons overflow-hidden size-10 rounded-full ">
            <img
              className="w-full object-top object-cover  "
              src="https://i.pinimg.com/1200x/24/25/a8/2425a8aadf99487da63b3edf886594ec.jpg"
              alt=""
            />
          </div>
          <p className="px-10  font-semibold text-zinc-800/60 " >Over 1k happy users</p>
        </div>
        <div className="text ">
          <h1 className="text-7xl font-bold px-40 text-center font-mono">
            Regulate your Mood with our videos
          </h1>
          <p>
            Our prerecorded sessions contain all the essentials to help you fix
            your mood in few sessions
          </p>
        </div>
        <div className="btns">
          <button>Play Video</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Home;
