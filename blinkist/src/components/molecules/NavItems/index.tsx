import React, { ReactElement } from "react";

interface Props {
  title: string;
  icon?: ReactElement;
}
const NavItems: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="nav-items">
        {props.title}

        {props.icon}

        {/* <ButtonComponent title={props.title}/> */}
      </div>
    </React.Fragment>
  );
};
export default NavItems;
