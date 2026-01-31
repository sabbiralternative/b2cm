import { Fragment } from "react";
import assets from "../../../assets";
import { useDispatch, useSelector } from "react-redux";
import ModalWrapper from "../../modal/ModalWrapper/ModalWrapper";
import { setShowLeftSidebar } from "../../../redux/features/global/globalSlice";
import useTheme from "../../../hooks/useTheme";

const MenuLeftSidebar = () => {
  const { setTheme, theme } = useTheme();
  const dispatch = useDispatch();
  const { showLeftSidebar } = useSelector((state) => state.global);

  const closeLeftSidebar = () => {
    dispatch(setShowLeftSidebar(false));
  };

  const handleChangeTheme = (e) => {
    if (e.target.checked) {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
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
                  <a href="#">
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
                    Magicadmin
                  </h5>
                  <h6 className="ps-1 mb-0 font-400 opacity-40 font-12">
                    hyper_master
                  </h6>
                </div>
                <div className="ms-auto">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    className="icon icon-m ps-3"
                  >
                    <i className="fa fa-ellipsis-v font-18 color-theme" />
                  </a>
                  <div className="dropdown-menu bg-transparent border-0 mb-n5">
                    <div className="card card-style rounded-m shadow-xl me-1">
                      <div className="list-group list-custom-small list-icon-0 px-3 mt-n1">
                        <a href="#" className="mb-n2 mt-n1">
                          <span>Your Profile</span>
                          <i className="fa fa-angle-right" />
                        </a>
                        <a href="#" className="mb-n2">
                          <span>Messages</span>
                          <i className="fa fa-angle-right" />
                        </a>
                        <a href="#" className="mb-n2">
                          <span>Settings</span>
                          <i className="fa fa-angle-right" />
                        </a>
                        <a href="#" className="mb-n1">
                          <span>Sign Out</span>
                          <i className="fa fa-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-style">
              <div className="content my-0">
                <h5 className="font-700 text-uppercase opacity-40 font-12 pt-2 mb-0">
                  Navigation
                </h5>
                <div className="list-group list-custom-small list-icon-0">
                  <a href="#">
                    <i className="fa font-12 fa-home gradient-green rounded-sm color-white" />
                    <span>Homepage</span>
                    <i className="fa fa-angle-right" />
                  </a>
                  <div className="collapse show" id="collapse-1">
                    <div className="list-group list-custom-small ps-3">
                      <a href="#">
                        <i className="fab font-13 fa-facebook-square color-facebook"></i>
                        <span>Facebook</span>
                        <i className="fa fa-angle-right"></i>
                      </a>
                      <a href="#">
                        <i className="fab font-13 fa-twitter-square color-twitter"></i>
                        <span>Twitter</span>
                        <i className="fa fa-angle-right"></i>
                      </a>
                      <a href="#" className="border-0">
                        <i className="fab font-13 fa-linkedin color-linkedin"></i>
                        <span>Linkedin</span>
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                  <a href="#">
                    <i className="fa font-12 fa-cog gradient-red rounded-sm color-white" />
                    <span>Components</span>
                    <span className="badge bg-highlight">NEW</span>
                    <i className="fa fa-angle-right" />
                  </a>
                  <a href="#">
                    <i className="fa font-12 fa-file gradient-blue rounded-sm color-white" />
                    <span>Page Packs</span>
                    <i className="fa fa-angle-right" />
                  </a>
                  <a href="#">
                    <i className="fa font-12 fa-camera gradient-yellow rounded-sm color-white" />
                    <span>Media</span>
                    <i className="fa fa-angle-right" />
                  </a>
                  <a href="#">
                    <i className="fa font-12 fa-image gradient-teal rounded-sm color-white" />
                    <span>Contact</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card card-style">
              <div className="content my-0">
                <h5 className="font-700 text-uppercase opacity-40 font-12 pt-2 mb-0">
                  Contacts
                </h5>
                <div className="list-group list-custom-small list-icon-0">
                  <a href="#">
                    <img
                      src="images/avatars/5s.png"
                      className="gradient-blue rounded-sm"
                      width={27}
                    />
                    <span>Steve Johnson</span>
                    <span className="badge bg-highlight badge-small rounded-xl me-n1">
                      2
                    </span>
                    <i className="fa fa-angle-right" />
                  </a>
                  <a href="#">
                    <img
                      src="images/avatars/1s.png"
                      className="gradient-magenta rounded-sm"
                      width={27}
                    />
                    <span>Anna Smith</span>
                    <span className="badge bg-highlight badge-small rounded-xl me-n1">
                      15
                    </span>
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="card card-style">
              <div className="content my-0">
                <h5 className="font-700 text-uppercase opacity-40 font-12 pt-2 mb-0">
                  Settings
                </h5>
                <div className="list-group list-custom-small list-icon-0">
                  <a href="#" data-menu="menu-highlights">
                    <i className="fa font-12 fa-droplet gradient-blue rounded-sm color-white" />
                    <span>Highlights</span>
                    <i className="fa fa-angle-right" />
                  </a>
                  <a href="#" data-menu="menu-backgrounds">
                    <i className="fa font-12 fa-paint-brush gradient-orange rounded-sm color-white" />
                    <span>Backgrounds</span>
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="position-sticky w-100 bottom-0 end-0 pb-1">
            <div className="card card-style mb-3">
              <div className="content my-0 py-">
                <div className="list-group list-custom-small list-icon-0">
                  <a
                    href="#"
                    data-toggle-theme
                    data-trigger-switch="switch-dark2-mode"
                    className="border-0"
                  >
                    <i className="fa font-12 fa-moon gradient-yellow color-white rounded-sm" />
                    <span>Dark Mode</span>
                    <div className="custom-control ios-switch">
                      <input
                        checked={theme === "dark"}
                        onChange={handleChangeTheme}
                        data-toggle-theme
                        type="checkbox"
                        className="ios-input"
                        id="switch-dark2-mode"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="switch-dark2-mode"
                      />
                    </div>
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </Fragment>
  );
};

export default MenuLeftSidebar;
