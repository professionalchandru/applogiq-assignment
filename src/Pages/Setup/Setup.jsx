/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import chevronDown from "../../Assets/svg/cheveron-down.svg";
import plusIcon from "../../Assets/svg/plus.svg";
import filtersIcon from "../../Assets/svg/filters.svg";
import checkBoxIcon from "../../Assets/svg/checkbox.svg";
import arrowDown from "../../Assets/svg/arrow-down-black.svg";
import helpIcon from "../../Assets/svg/help.svg";
import userIcon from "../../Assets/png/user1.png";
import user2Icon from "../../Assets/png/user2.png";
import user3Icon from "../../Assets/png/user3.png";
import user4Icon from "../../Assets/png/user4.png";
import trashIcon from "../../Assets/svg/trash.svg";
import editIcon from "../../Assets/svg/edit.svg";

import Tag from "../../Components/UiElements/Tag";
import { Fragment, useEffect, useMemo, useState } from "react";
import { getTableList } from "../../Redux/Actions/AppActions";
import { connect } from "react-redux";
import Pagination from "./Pagination";

export const PageSize = 10;

const Setup = ({ getList, tableArrayList }) => {
  const [tableList, setTableList] = useState(tableArrayList);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentTab, setCurrentTab] = useState(1);

  useEffect(() => {
    getList(currentTab);
    setCurrentPage(1);
  }, [currentTab, getList]);

  useEffect(() => {
    setTableList(tableArrayList);
  }, [tableArrayList]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tableList.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, tableList]);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const chooseUserImg = () => {
    const list = [userIcon, user2Icon, user3Icon, user4Icon];
    const result = list[Math.floor(Math.random() * list.length)];
    return result;
  };

  return (
    <>
      <div className="w-full h-[calc(100vh-72px) px-8 py-4 overflow-y-auto overflow-x-hidden]">
        <div className="w-full bg-white rounded-10px border border-[#E4E4E7]">
          {/* Header Section */}
          <div className=" p-4 flex flex-row justify-between items-center">
            <div className=" flex flex-col items-start gap-y-1">
              <p className="capitalize text-primary text-base font-semibold">
                Setup
              </p>
              <p className="text-secondary text-sm font-medium">
                Get you basic setups here
              </p>
            </div>
            <div className=" relative w-[400px] search-box">
              <input
                type="text"
                className="w-full pr-4 px-[40px] py-2.5 border border-[#CFCFCF] rounded-lg bg-white placeholder-[#9C9C9C] focus:outline-none text-primary"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Title Section */}
          <div className="px-4 py-3 border-t border-[#EAECF0] flex flex-row items-center justify-between">
            {/* Tab Section */}
            <div className="inline-flex">
              <div
                onClick={() => handleTabClick(1)}
                className={`px-6 py-2.5 border border-borderPrimary rounded-l-lg cursor-pointer ${
                  currentTab === 1 ? "bg-white" : "bg-background2"
                }`}
              >
                <p className="text-primary text-sm font-semibold">Title 1</p>
              </div>
              <div
                onClick={() => handleTabClick(2)}
                className={`px-6 py-2.5 border-y border-borderPrimary cursor-pointer ${
                  currentTab === 2 ? "bg-white" : "bg-background2"
                }`}
              >
                <p className="text-primary text-sm font-semibold">Title 2</p>
              </div>
              <div
                onClick={() => handleTabClick(3)}
                className={`px-6 py-2.5 border border-borderPrimary rounded-r-lg cursor-pointer ${
                  currentTab === 3 ? "bg-white" : "bg-background2"
                }`}
              >
                <p className="text-primary text-sm font-semibold">Title 3</p>
              </div>
            </div>
            {/* Buttons Section */}
            <div className="flex flex-row items-center gap-x-3">
              <div className="w-[300px] py-2.5 px-3 flex items-center justify-between border border-[#CFCFCF] rounded-lg bg-white text-primary">
                <p className="text-primary text-sm font-medium">Select</p>
                <img src={chevronDown} alt="Chevron-down.svg" />
              </div>

              <div className="px-4 py-2.5 flex items-center gap-x-2 border border-special rounded-lg text-white text-sm bg-special add-new-button-shadow">
                <img src={plusIcon} alt="Plus-icon.svg" />
                <p className="text-sm text-white font-normal">Add new</p>
              </div>

              <div className="px-4 py-2.5 flex items-center gap-x-2 border border-borderPrimary rounded-lg bg-white add-new-button-shadow">
                <img src={filtersIcon} alt="Plus-icon.svg" />
                <p className="text-sm text-[#344054] font-medium">Filters</p>
              </div>
            </div>
          </div>

          {/* TableSection */}
          <table className="w-full">
            {/* Table Head */}
            <thead>
              <tr className="bg-background2 border-b border-[#EAECF0]">
                <th className="w-[5%] h-11 text-left pl-6">
                  <img src={checkBoxIcon} alt="checkbox.svg" />
                </th>
                <th className="w-[20%] h-11 text-left text-sm font-medium text-[#667085]">
                  Name
                </th>
                <th className="w-[12.5%] h-11 text-left text-sm font-medium text-[#667085] ">
                  <div className="flex flex-row items-center gap-x-1">
                    <span className="">Status</span>
                    <img src={arrowDown} alt="arrow-down.svg" />
                  </div>
                </th>
                <th className="w-[12.5%] h-11 text-left text-sm font-medium text-[#667085]">
                  <div className="flex flex-row items-center gap-x-1">
                    <span>Role</span>
                    <img src={helpIcon} alt="help.svg" />
                  </div>
                </th>
                <th className="w-[20%]  h-11 text-left text-sm font-medium text-[#667085]">
                  Email address
                </th>
                <th className="w-[20%] h-11 text-left text-sm font-medium text-[#667085]">
                  Teams
                </th>
                <th className="w-[10%] h-11 text-left"></th>
              </tr>
            </thead>

            {/* Table Row */}
            <tbody>
              {currentTableData?.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <tr className="bg-white border-b border-[#EAECF0]">
                      <td className="w-[5%] h-[72px] text-left pl-6">
                        <img src={checkBoxIcon} alt="checkbox.svg" />
                      </td>
                      <td className="w-[20%] h-[72px] text-left text-sm">
                        <div className="flex flex-row gap-x-3">
                          <img src={chooseUserImg()} alt="user.png" />
                          <div className="flex flex-col gap-x-0.5">
                            <p className="text-primary text-sm font-semibold">
                              {item.name}
                            </p>
                            <p className="text-[#667085] text-sm font-medium">
                              {item.username}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="w-[12.5%] h-[72px] text-left text-sm">
                        <Tag
                          text={item.status}
                          isBullet={true}
                          type={
                            item.status === "Active" ? "success" : "warning"
                          }
                        />
                      </td>
                      <td className="w-[12.5%] h-[72px] text-left text-sm font-normal text-[#667085]">
                        {item.role}
                      </td>
                      <td className="w-[20%]  h-[72px] text-left text-sm font-normal text-[#667085]">
                        {item.email}
                      </td>
                      <td className="w-[20%] h-[72px] text-left">
                        <div className="flex flex-row gap-x-1">
                          <Tag
                            text={"Design"}
                            isBullet={false}
                            type={"purple"}
                          />
                          <Tag
                            text={"Product"}
                            isBullet={false}
                            type={"blue"}
                          />
                          <Tag
                            text={"Marketing"}
                            isBullet={false}
                            type={"indigo"}
                          />
                          <Tag text={"+4"} isBullet={false} type={"default"} />
                        </div>
                      </td>
                      <td className="w-[10%] h-[72px] text-left">
                        <div className="flex flex-row gap-x-1">
                          <img src={trashIcon} alt="trash.svg" />
                          <img src={editIcon} alt="edit.svg" />
                        </div>
                      </td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>

          {/* Footer Section */}
          <Pagination
            currentPage={currentPage}
            totalCount={tableList?.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    tableArrayList: state.app.tableList,
  };
};
const mapDispatchToProps = {
  getList: (tabNumber) => getTableList(tabNumber),
};

export default connect(mapStateToProps, mapDispatchToProps)(Setup);
