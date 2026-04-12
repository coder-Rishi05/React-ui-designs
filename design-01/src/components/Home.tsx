import React, { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaArrowUpLong } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";

const Home = () => {
  const [img, setImg] = useState([
    "https://i.pinimg.com/736x/76/88/ee/7688ee43bc56a8b49fab745baa861040.jpg",

    "https://i.pinimg.com/736x/22/ca/35/22ca3587329e169c384367b339c95d20.jpg",

    "https://i.pinimg.com/1200x/ba/f6/bd/baf6bd4a51702db98b538d76e7f9b07a.jpg",
  ]);

  return (
    <div className="">
      <div className="top flex items-center justify-center flex-col">
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
          <div className="icons  overflow-hidden size-10 rounded-full ">
            <img
              className="w-full object-top object-cover  "
              src="https://i.pinimg.com/736x/38/5d/f7/385df70326f274df800a0a2c7ce3509b.jpg"
              alt=""
            />
          </div>
          <div className="icons border overflow-hidden bg-black rotate-45 size-10 rounded-full ">
            <FaArrowUpLong size={40} className="text-white px-3 " />
          </div>
          <p className="px-6 font-semibold text-zinc-800/60 font-mono ">
            Over 1k happy users
          </p>
        </div>
        <div className="text w-[50vw] flex items-center justify-center flex-col ">
          <h1 className="text-7xl font-bold  text-center font-mono">
            Regulate your Mood with our videos
          </h1>
        </div>
        <p className=" text-center w-1/2 px-2 py-4">
          Our prerecorded sessions contain all the essentials to help you fix
          your mood in few sessions
        </p>
        <div className="btns flex gap-10 ">
          <div className="bg-black flex items-center justify-center gap-2 text-white px-8 py-3 rounded-xl">
            Play Video{" "}
            <span>
              {" "}
              <SlEnergy />
            </span>{" "}
          </div>
          <button className="bg-white border border-zinc-400  px-8 py-3 rounded-xl">
            Learn More
          </button>
        </div>
      </div>

      <div className="bottom  h-[40vw] py-10 flex items-center justify-center">
        {img.map((item, key) => (
          <div className="boxes relative   flex items-center justify-center ">
            <div
              key={key}
              className="box w-60  absolute overflow-hidden border rounded-md border-zinc-800 "
            >
              <img src={item} className="object-center  object-cover" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
