import React from "react";
import chevronDown from "../../Assets/svg/cheveron-down.svg";
import { sportsArray } from "./constants";

const SportsCard = () => {
  return (
    <>
      <div className="w-full min-h-[321px] px-8 py-5 mx-auto bg-white rounded-10px border border-[#E4E4E7]">
        <div className="flex flex-row justify-between items-center">
          <p className="capitalize text-primary text-base font-extrabold">
            Sports
          </p>
          <div className="inline-flex items-center gap-x-2">
            <p className="text-primary text-xs font-semibold">Last 7 Days</p>
            <img src={chevronDown} alt="chevron-down.svg" />
          </div>
        </div>

        <div className="w-full pt-10 space-y-6">
          {sportsArray.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="w-full flex flex-col items-start gap-y-2">
                  <div className="w-full flex flex-row items-center justify-between gap-y-2">
                    <p className="capitalize text-primary text-[13px] font-semibold">
                      {item.title}
                    </p>
                    <p className="capitalize text-primary text-[13px] font-semibold">
                      {item.weight}
                    </p>
                  </div>
                  <div className="w-full h-[5px] bg-[#F4F4F5] rounded-10px">
                    <div
                      className={`${item.width} h-[5px] bg-special rounded-10px`}
                    />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SportsCard;
