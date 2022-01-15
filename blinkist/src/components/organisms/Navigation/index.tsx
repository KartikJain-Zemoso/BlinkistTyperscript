/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import NavItems from "../../molecules/NavItems";
import "./navigation.css";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NaviagtionDropDown from "../dropdown";

const Navigation: React.FC = (props) => {
  const [dropdownToggle, toggleDropDown] = useState<boolean | null | []>(false);
  console.log(dropdownToggle);
  return (
    <>
      <div className="navigation">
        <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="Card" />
        <div className="navLeft">
          <div onClick={() => toggleDropDown(!dropdownToggle)}>
            <NavItems
              title={"Explore"}
              icon={dropdownToggle ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            />
          </div>

          <Link to="/library">
            <NavItems title={"My Library"} />
          </Link>
        </div>
        <div className="navRight">
          <NavItems title={"Account"} icon={<ExpandMoreIcon />} />
        </div>
      </div>

      {dropdownToggle && <NaviagtionDropDown onClick={toggleDropDown} />}
    </>
  );
};

export default Navigation;
