import DisplayCard from "./DisplayCard";
import SportsCard from "./SportsCard";
import TransactionCard from "./TransactionsCard";
import { displayCardArray } from "./constants";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-72px) px-14 py-6 overflow-y-auto overflow-x-hidden]">
        <div className="flex flex-row items-start justify-evenly gap-x-7">
          {displayCardArray.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <DisplayCard
                  title={item.title}
                  amount={item.amount}
                  profit={item.profit}
                  icon={item.icon}
                  isLoss={item.isLoss}
                />
              </React.Fragment>
            );
          })}
        </div>

        <div className="w-full mt-7 flex flex-row gap-x-4 items-start">
          <div className="w-[70%]">
            <TransactionCard />
          </div>
          <div className="w-[30%]">
            <SportsCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
