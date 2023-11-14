/* eslint-disable react/prop-types */
import chevronRight from "../../Assets/svg/cheveron-right.svg";
import Tag from "../../Components/UiElements/Tag";
import dot from "../../Assets/svg/dots-horizontal.svg";
import { transactionArray } from "./constants";
import React from "react";

const TransactionCard = () => {
  return (
    <>
      <div className="w-full pt-5 mx-auto bg-white rounded-10px border border-[#E4E4E7]">
        <div className="px-[30px] flex flex-row justify-between items-center">
          <div className="flex flex-col items-start gap-y-1">
            <p className="capitalize text-primary text-base font-extrabold">
              Transactions
            </p>
            <p className="text-secondary text-[13px] font-medium">
              Lorem ipsum dolor sit amet, consectetur adipis.
            </p>
          </div>

          <div className="flex flex-row items-center gap-x-2">
            <p className="capitalize text-[#F5821F] text-xs font-semibold">
              See All Transactions
            </p>
            <img src={chevronRight} alt="right-arrow.svg" />
          </div>
        </div>

        <div className="">
          {transactionArray.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <TransactionRow
                  isEven={index % 2 !== 0}
                  status={item.status}
                  statusText={item.statusText}
                  isBullet={item.isBullet}
                  bankText={item.bankText}
                  bankPayType={item.bankPayType}
                  amount={item.amount}
                  date={item.date}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TransactionCard;

const TransactionRow = ({
  status,
  statusText,
  isBullet,
  bankPayType,
  bankText,
  amount,
  date,
  isEven,
}) => {
  return (
    <>
      <div
        className={`w-full pl-[30px] h-[84px] ${
          isEven && "transaction-row-shadow"
        }`}
      >
        <table className="w-full h-full">
          <tr className="w-full h-full">
            <td className="w-[21%]">
              <Tag text={statusText} type={status} isBullet={isBullet} />
            </td>

            <td className="w-[31%]">
              <div className="flex flex-col gap-y-1">
                <p className="text-primary font-semibold text-[13px]">
                  {bankText}
                </p>
                <p className="text-secondary font-semibold text-[13px]">
                  {bankPayType}
                </p>
              </div>
            </td>

            <td className="w-[22%]">
              <div className="flex flex-col gap-y-1">
                <p className="text-primary font-semibold text-[13px]">
                  {amount}
                </p>
                <p className="text-secondary font-semibold text-[13px]">
                  {date}
                </p>
              </div>
            </td>

            <td className="w-[21%]">
              <p className="text-secondary font-semibold text-[13px]">Ticket</p>
            </td>

            <td className="w-[5%]">
              <img src={dot} alt="dot-icon.svg" />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
