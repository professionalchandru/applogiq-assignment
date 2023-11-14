/* eslint-disable react/prop-types */
const Tag = ({ text, isBullet, type }) => {
  return (
    <>
      {type === "default" ? (
        <div
          className={`max-w-min px-2 py-1 bg-[#F2F4F7] text-[#344054] font-semibold text-xs rounded-2xl text-center`}
        >
          {text}
        </div>
      ) : type === "success" ? (
        <div
          className={`inline-flex items-center gap-x-1 max-w-max ${
            isBullet ? "pl-2 pr-4" : "px-2"
          } py-1 bg-successBackground text-successDarker font-semibold text-xs rounded-2xl text-center`}
        >
          {isBullet ? (
            <div className="w-2 h-2 rounded-full bg-successText"></div>
          ) : null}
          {text}
        </div>
      ) : type === "warning" ? (
        <div
          className={`inline-flex items-center gap-x-1 max-w-max ${
            isBullet ? "pl-2 pr-4" : "px-2"
          } py-1 bg-[#FEF9C3] text-[#713F12] font-semibold text-xs rounded-2xl text-center`}
        >
          {isBullet ? (
            <div className="w-2 h-2 rounded-full bg-[#FACC15]"></div>
          ) : null}
          {text}
        </div>
      ) : type === "purple" ? (
        <div
          className={`max-w-min px-2 py-1 bg-[#F9F5FF] text-[#6941C6] font-semibold text-xs rounded-2xl text-center`}
        >
          {text}
        </div>
      ) : type === "blue" ? (
        <div
          className={`max-w-min px-2 py-1 bg-[#EFF8FF] text-[#175CD3] font-semibold text-xs rounded-2xl text-center`}
        >
          {text}
        </div>
      ) : type === "indigo" ? (
        <div
          className={`max-w-min px-2 py-1 bg-[#EEF4FF] text-[#3538CD] font-semibold text-xs rounded-2xl text-center`}
        >
          {text}
        </div>
      ) : (
        <div
          className={`max-w-min px-2 py-1 bg-[#F2F4F7] text-[#344054] font-semibold text-xs rounded-2xl text-center`}
        >
          {text}
        </div>
      )}
    </>
  );
};

export default Tag;
