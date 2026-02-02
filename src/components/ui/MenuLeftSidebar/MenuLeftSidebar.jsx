import { Fragment } from "react";
import assets from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../../modal/ModalWrapper/ModalWrapper";
import { setShowLeftSidebar } from "../../../redux/features/global/globalSlice";
import DropDown from "./DropDown";
import ThemeSwitcher from "./ThemeSwitcher";
import Settings from "./Settings";
import Navigation from "./Navigation";

const MenuLeftSidebar = () => {
  const { adminName, adminRole } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { showLeftSidebar } = useSelector((state) => state.global);

  const closeLeftSidebar = () => {
    dispatch(setShowLeftSidebar(false));
  };

  return (
    <Fragment>
      {showLeftSidebar && <div className="menu-hider menu-active"></div>}

      <ModalWrapper onClose={closeLeftSidebar}>
        <div
          id="menu-sidebar-left-1"
          className="menu menu-box-left menu-box-detached menu-sidebar"
          data-menu-width={310}
          style={{
            display: "block",
            width: "310px",
            visibility: "visible",
            transform: showLeftSidebar ? "none" : " translate3d(-100%, 0, 0)",
            transition: "0.5s",
          }}
        >
          <div className="sidebar-content notch-clear">
            <div className="bg-theme mx-3 rounded-m shadow-m my-3">
              <div className="d-flex px-2 pb-2 pt-2">
                <div className="align-self-center">
                  <a>
                    <img
                      src={assets.user}
                      width={40}
                      className="rounded-sm"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="ps-2 align-self-center">
                  <h5 className="ps-1 mb-1 pt-1 line-height-xs font-17">
                    {adminName}
                  </h5>
                  <h6 className="ps-1 mb-0 font-400 opacity-40 font-12">
                    {adminRole}
                  </h6>
                </div>
                <DropDown />
              </div>
            </div>
            <Navigation />

            <Settings />
          </div>
          <ThemeSwitcher />
        </div>
      </ModalWrapper>
    </Fragment>
  );
};

export default MenuLeftSidebar;
