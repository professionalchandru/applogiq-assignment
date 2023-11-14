import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import notificationIcon from "../Assets/svg/notification.svg";
import user1 from "../Assets/png/user1.png";

/* eslint-disable react/prop-types */
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activePage, setActivepage] = useState("");

  useEffect(() => {
    setActivepage(location.pathname);
  }, [location]);

  const handleClick = useCallback(
    (active) => {
      setActivepage(active);
      navigate(active);
    },
    [navigate]
  );

  return (
    <>
      <div className="w-full h-[72px] px-8 inline-flex items-center justify-between bg-white border-b border-[#ECECEC]">
        <ul className="inline-flex gap-x-6">
          <Li
            isActive={activePage === "/"}
            text="Dashboard"
            onClick={() => handleClick("/")}
          />
          <Li
            isActive={activePage === "/setup"}
            text="Setup"
            onClick={() => handleClick("/setup")}
          />
          <Li isActive={false} text="Product" />
          <Li isActive={false} text="Accounts" />
          <Li isActive={false} text="Reports" />
        </ul>
        <div className="flex items-center gap-x-2.5">
          <img src={notificationIcon} alt="notification.svg" />
          <img src={user1} alt="user.svg" />
        </div>
      </div>
    </>
  );
};

export default NavBar;

const Li = ({ isActive, text, onClick }) => {
  return (
    <>
      <li
        className={`${
          isActive ? "text-special" : "text-primary"
        } font-bold text-base cursor-pointer`}
        onClick={onClick}
      >
        {text}
      </li>
    </>
  );
};
