import React from "react";
import Discover from "../Discover/Discover";
import Featured from "../Featured /Featured";
import Covered from "../Covered/Covered";
import Role from "../Role/Role";
import Group from "../../images/Group 469461.png";
import { PlayIcon } from "@heroicons/react/24/outline";
import TrustBuilder from "../TrustBuilder/TrustBuilder";
import HowItWorks from "../HowItWorks/HowItWorks";

const Home = () => {
  return (
    <>
      <div className="absolute top-0 w-full bg-[url('https://images.unsplash.com/photo-1518799937599-77763326c394?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] text-center py-40 flex justify-center">
        <div className="">
          <p className="text-xl text-white font-normal">
            Leading crowdfunding platform
          </p>
          <h1 className="text-white text-5xl py-4 font-semibold leading-[60px]">
            Your home <br /> for help
          </h1>
          <div className="py-5">
            <button className="py-1.5 bg-white px-6 rounded-lg text-green-600 hover:text-green-700 border-[1px] font-bold border-green-600">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="h-[500px]"></div>
      <Discover />
      <Featured />
      <Covered />
      <div className="max-w-6xl mx-auto py-32">
        <div className="flex items-center justify-between py-6">
          <h1 className="md:text-3xl text-2xl font-medium">
            How GoFundMe works
          </h1>
          <button className="flex items-center space-x-1 px-6 text-nowrap py-2 rounded-xl border-[1px] border-gray-700 hover:bg-slate-100 ">
            Learn More
          </button>
        </div>
        <div className="relative overflow-hidden  rounded-lg w-full">
          <video
            controls
            poster={Group}
            className="w-full h-[500px] object-cover"
          >
            <source src="your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="button py-1 px-3 rounded-lg hover:bg-inherit">
            <PlayIcon className="h-6 w-6" />
            Paly 1 min video
          </div>
        </div>
      </div>
      <TrustBuilder />
      <Role />
    </>
  );
};

export default Home;
