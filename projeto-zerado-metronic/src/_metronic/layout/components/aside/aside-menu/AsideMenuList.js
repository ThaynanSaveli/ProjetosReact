/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink}  from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
        ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
        : "";
  };

  return (
      <>
        {/* begin::Menu Nav */}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          {/*begin::1 Level*/}
          {/* <li
              className={`menu-item ${getMenuItemActive("/dashboard")}`}
              aria-haspopup="true"
          >
              <NavLink className="menu-link" to="/dashboard">
                  <span className="svg-icon menu-icon">
                      <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}/>
                  </span>
                  <span className="menu-text">Dashboard</span>
              </NavLink>
          </li> */}

          <li
              className={`menu-item ${getMenuItemActive("/my-page")}`}
              aria-haspopup="true"
          >
              <NavLink className="menu-link" to="/my-page">
                  <span className="svg-icon menu-icon">
                      <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}/>
                  </span>
                  <span className="menu-text">My Page</span>
              </NavLink>
          </li>
          {/*end::1 Level*/}

          {/* Components */}
          
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text">Custom</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
        </ul>

        {/* end::Menu Nav */}
      </>
  );
}
