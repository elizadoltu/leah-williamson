import React from "react";
import { NavLink } from "react-router-dom";

const MenuHeader = () => {
    return (
      <div className="flex justify-end mt-6 mr-12">
        <div className="flex w-96 justify-between text-xl">
          <div className="text-font font-urbanist font-bold">
            <NavLink to="/Home">
              <p>Home</p>
            </NavLink>
          </div>
          <div className="text-font font-urbanist font-bold">
            <NavLink to="/General">
              <p>About</p>
            </NavLink>
          </div>
          <div className="text-font font-urbanist font-bold">
            <NavLink to="/Career">
              <p>Career</p>
            </NavLink>
          </div>
          <div className="text-font font-urbanist font-bold">
            <NavLink to="/Contact">
              <p>Contact</p>
            </NavLink>
          </div>
        </div>
      </div>
    );
};

export default MenuHeader;