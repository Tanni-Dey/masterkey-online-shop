import React from "react";
import searchIcon from "../../../../images/search_icon.svg";
import searchBarIcon from "../../../../images/searchbar_icon.svg";
import message from "../../../../images/message.svg";
import notification from "../../../../images/notification.svg";
import user from "../../../../images/user.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="grid grid-cols-12 mb-[26px] items-center">
      <div className="col-span-4 text-left">
        <h2 className="text-xl3 font-semibold">Headphone</h2>
        <p className="text-sm pl-[20px] font-semibold">For the top band</p>
      </div>
      <div className="col-span-4">
        <div className="search_div">
          <img className="masterkey_searchIcon" src={searchIcon} alt="" />
          <input
            type="text"
            className="masterkey_search focus:outline-none"
            placeholder="Search Product"
          />
          <img className="masterkey_searchBarIcon" src={searchBarIcon} alt="" />
        </div>
      </div>
      <div className="col-span-4">
        <div className="mastrekey_header_icon flex pl-[28px]">
          <img
            className="mr-[18px] pt-[7px] pr-[6px] pb-[6px] pl-[7px] rounded-[5px] bg-[#17FF3C]"
            src={message}
            alt="message"
          />
          <img
            className="mr-[18px] p-[5px] rounded-[5px] bg-[#53FF027D] opacity-[49%]"
            src={notification}
            alt="notification"
          />
          <img className="bg-[#50D322] rounded-[5px]" src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
