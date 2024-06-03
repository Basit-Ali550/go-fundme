import React from "react";
import ShareSection from "./ShareSection";
import Rectangle from "../../images/Rectangle 7583.png";
import Stories from "./Stories";
import Group from "../../images/Group 469461.png";
import { PlayIcon } from "@heroicons/react/24/outline";

const HowItWorks = () => {
  return (
    <div className="py-10 ">
      <div className="pt-20 px-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold  py-8">How GoFundMe Works</h1>
        <p className="text-sm pb-8 text-center">
          GoFundMe is the best place to fundraise, whether you are an
          individual, group, or organisation.
        </p>
        <div>
          <button className="py-1 px-6 rounded-lg bg-green-500 hover:bg-green-700">
            Start a GoFundMe
          </button>
        </div>
      </div>
      {/*-------------- Video about How it Work------------------*/}
      <div className="">
        <div className="max-w-5xl mx-auto  relative top-52">
          <div className="relative overflow-hidden  rounded-lg w-full">
            <video
              controls
              poster={Group}
              className="w-full h-[400px] object-cover"
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
        <div className="h-72 bg-[#fbf8f6]"></div>
      </div>

      <ShareSection />
      {/*--------------------customer service  section ---------------*/}
      <div className="py-32 bg-[#fbf8f6] flex justify-center items-center gap-y-10 flex-col ">
        <p className="text-center mx-auto max-w-2xl px-6">
          “This website rocks! I raised close to £10,000 in less than 48 hours
          for my nephew’s medical needs, and your customer service was so prompt
          and helpful.”
        </p>
        <img
          src={Rectangle}
          alt=""
          className="h-16 w-16 rounded-full bg-gray-100"
        />
        <h3 className="text-xl font-medium">Monica S.</h3>
        <p className="text-gray-500">Raised £16,000 on GoFundMe</p>
      </div>
      {/*--------------------customer service  section ---------------*/}

      <div className="h-72 px-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold  py-8">Fast and safe</h1>
        <p className="text-sm pb-8 text-center">
          Millions trust GoFundMe as the #1 online fundraising expert. That’s
          why more people start fundraisers on GoFundMe than any other platform.
        </p>
        <div>
          <button className="py-1.5 px-6 rounded-lg text-green-600 hover:text-green-700 border-[1px] font-bold border-green-600">
            Learn more
          </button>
        </div>
      </div>
      {/*--------------------Success Stories  section ---------------*/}

      <Stories />
    </div>
  );
};

export default HowItWorks;
