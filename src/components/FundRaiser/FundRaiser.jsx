import React from "react";
import doordash from "../../images/doordash-cj-zQaOOMtY-unsplash.jpg";
import doordashPdBg from "../../images/doordash-ePdBgYsfmRc-unsplash.jpg";
import doordash2 from "../../images/doordash-GlSMQq7kUF0-unsplash.jpg";

const FundRaiser = () => {
  const data = [
    {
      id: 1,
      imgsrc: doordash,
      imgsrc2: doordash2,
      imgsrc3: doordashPdBg,
      percentage: "55",
      desc: "Medical fundraisers",
    },
    {
      id: 2,
      imgsrc: doordash,
      imgsrc2: doordash2,
      imgsrc3: doordashPdBg,
      percentage: "55",
      desc: "Memorial fundraisers",
    },
    {
      id: 3,
      imgsrc: doordash,
      imgsrc2: doordash2,
      imgsrc3: doordashPdBg,
      percentage: "55",
      desc: "Emergency fundraisers",
    },
    {
      id: 4,
      imgsrc: doordash,
      imgsrc2: doordash2,
      imgsrc3: doordashPdBg,
      percentage: "55",
      desc: "Charity fundraisers",
    },
    {
      id: 5,
      imgsrc: doordash,
      imgsrc2: doordash2,
      imgsrc3: doordashPdBg,
      percentage: "55",
      desc: "Education fundraisers",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto">
      <div className="md:px-10 pb-8">
        <h1 className="md:text-7xl text-3xl font-normal py-10 max-w-3xl">
          Browse fundraisers by category
        </h1>
        <p className="text-xl font-normal text-gray-600 py-4">
          People around the world are raising money for what they are passionate
          about.
        </p>
        <div className="pt-4">
          <button className=" bg-green-600 hover:bg-green-700 py-2 px-6 text-white font-bold rounded-xl">
            Start a GoFundMe
          </button>
        </div>
      </div>
      {data.map((item) => {
        return (
          <div className="py-16 border-t-[1px] border-gray-400">
            <h1 className="pb-6 text-3xl">{item.desc}</h1>
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <img
                  src={item.imgsrc}
                  alt=""
                  className="h-56 w-full object-cover rounded-2xl"
                />
              </div>
              <div>
                <img
                  src={item.imgsrc2}
                  alt=""
                  className="h-56 w-full object-cover rounded-2xl"
                />
              </div>
              <div>
                <img
                  src={item.imgsrc3}
                  alt=""
                  className="h-56 w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FundRaiser;
