/* eslint-disable react/prop-types */

const DisplayCard = ({ title, amount, icon, profit, isLoss }) => {
  return (
    <>
      <div className="w-full px-6 py-4 mx-auto bg-white rounded-10px border border-[#E4E4E7] flex flex-col items-start space-y-3 ">
        <p className="uppercase text-secondary text-[11px] tracking-[1px]">
          {title}
        </p>

        <div className="w-full flex flex-row justify-between items-center ">
          <p className={`text-xl text-primary font-extrabold`}> {amount} </p>
          <div className="flex flex-row gap-x-1 items-center ">
            <p
              className={`text-sm font-semibold  ${
                isLoss ? "text-errorText" : "text-successText"
              }`}
            >
              {" "}
              {profit}{" "}
            </p>
            <img src={icon} alt="profit or loss.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCard;
