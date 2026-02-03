import { Link, useNavigate } from "react-router-dom";
import useContextState from "../../../hooks/useContextState";
import { Fragment, useState } from "react";
import { usePermission } from "../../../hooks/use-permission";
import { getNavItems } from "./navConfig";
import { useSelector } from "react-redux";

const Navigation = () => {
  const { adminRole } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const {
    setShowSidebar,
    setShowAddSuperBranch,
    setShowAddBranch,
    setShowSocialLink,
    setShowAddStaff,
    setShowAddBranchStaff,
    setAddWhiteLabel,
    setShowDWLimit,
  } = useContextState();
  const [sidebarItem, setSidebarItem] = useState(null);
  const [childTabList, setChildTabList] = useState(null);
  const { permissions } = usePermission();
  const handleOpenSidebarItem = (item) => {
    if (sidebarItem === item) {
      setSidebarItem(null);
    } else {
      setSidebarItem(item);
    }
  };
  const handleOpenSidebarChildTabItem = (item) => {
    if (childTabList === item) {
      setChildTabList(null);
    } else {
      setChildTabList(item);
    }
  };

  const navItems = getNavItems(permissions, adminRole, {
    setShowSocialLink,
    setShowAddStaff,
    setAddWhiteLabel,
    setShowAddSuperBranch,
    setShowAddBranch,
    setShowAddBranchStaff,
    setShowDWLimit,
  });

  const handleRenderSidebar = (navItems) => {
    return navItems?.map((navItem, navIndex) => {
      /*! Dashboard text start  */
      if (navItem?.label) {
        if (!navItem?.show) return;
        return (
          <Link
            onClick={() => setShowSidebar(false)}
            to={navItem?.href}
            key={navIndex}
          >
            <i className="fa font-12 fa-file gradient-blue rounded-sm color-white" />
            <span>{navItem?.label}</span>
            <i className="fa fa-angle-right" />
          </Link>
        );
      }
      /*! Dashboard text end  */

      if (navItem?.tab) {
        if (!navItem?.show) return;
        return (
          <Fragment key={navIndex}>
            {/* All link start */}
            <a onClick={() => handleOpenSidebarItem(navItem?.key)}>
              <i className="fa font-12 fa-file gradient-blue rounded-sm color-white" />
              <span>{navItem?.tab}</span>

              <i className="fa fa-angle-right" />
            </a>
            {/* All link end */}

            {/* Miscellaneous start */}
            {navItem?.willSubTab && sidebarItem === navItem?.key ? (
              navItem?.children?.map((child, childIndex) => {
                if (!child?.show) return;
                return (
                  <div
                    key={childIndex}
                    className={`collapse show`}
                    id="collapse-1"
                  >
                    <div className="list-group list-custom-small ps-3">
                      <a
                        onClick={() =>
                          handleOpenSidebarChildTabItem(child?.key)
                        }
                      >
                        <i className="fab font-13 fa-facebook-square color-facebook"></i>
                        <span>{child?.tab}</span>
                        <i className="fa fa-angle-right"></i>
                      </a>
                      <div
                        className="ps-3"
                        style={{
                          display:
                            childTabList === child?.key ? "flex" : "none",
                          flexDirection: "column",
                        }}
                      >
                        {child?.children?.map((child) => {
                          if (!child?.show) return;
                          if (child?.href) {
                            return (
                              <a
                                key={child?.href}
                                onClick={() => {
                                  navigate(child?.href);
                                  setShowSidebar(false);
                                }}
                              >
                                <i className="fab font-13 fa-facebook-square color-facebook"></i>
                                <span>{child?.label}</span>
                                {/* <i className="fa fa-angle-right"></i> */}
                              </a>
                            );
                          }
                          if (child?.setState) {
                            return (
                              <a
                                key={child?.label}
                                onClick={() => {
                                  child?.setState(true);
                                  setShowSidebar(false);
                                }}
                              >
                                <i className="fab font-13 fa-facebook-square color-facebook"></i>
                                <span>{child?.label}</span>
                                {/* <i className="fa fa-angle-right"></i> */}
                              </a>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div
                className={`collapse ${
                  sidebarItem === navItem?.key ? "show" : ""
                }`}
                id="collapse-1"
              >
                <div className="list-group list-custom-small ps-3">
                  {navItem?.children?.map((child, childIndex) => {
                    if (!child?.show) return;

                    /* Loss back start */
                    if (child?.willSubTab) {
                      return (
                        <div
                          key={childIndex}
                          className={`collapse show`}
                          id="collapse-1"
                        >
                          <div className="list-group list-custom-small">
                            <a
                              onClick={() =>
                                handleOpenSidebarChildTabItem(child?.key)
                              }
                            >
                              <i className="fab font-13 fa-facebook-square color-facebook"></i>
                              <span>{child?.label}</span>
                              <i className="fa fa-angle-right"></i>
                            </a>
                            <div
                              className="ps-3"
                              style={{
                                display:
                                  childTabList === child?.key ? "flex" : "none",
                                flexDirection: "column",
                              }}
                            >
                              {child?.children?.map((child) => {
                                if (!child?.show) return;
                                if (child?.href) {
                                  return (
                                    <a
                                      key={child?.href}
                                      onClick={() => {
                                        navigate(child?.href);
                                        setShowSidebar(false);
                                      }}
                                    >
                                      <i className="fab font-13 fa-facebook-square color-facebook"></i>
                                      <span>{child?.label}</span>
                                      {/* <i className="fa fa-angle-right"></i> */}
                                    </a>
                                  );
                                }
                                if (child?.setState) {
                                  return (
                                    <a
                                      key={child?.label}
                                      onClick={() => {
                                        child?.setState(true);
                                        setShowSidebar(false);
                                      }}
                                    >
                                      <i className="fab font-13 fa-facebook-square color-facebook"></i>
                                      <span>{child?.label}</span>
                                      {/* <i className="fa fa-angle-right"></i> */}
                                    </a>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    }
                    /* Loss back end */

                    /* Child link start */
                    if (child?.href) {
                      return (
                        <a
                          key={child?.href}
                          onClick={() => {
                            navigate(child?.href);
                            setShowSidebar(false);
                          }}
                        >
                          <i className="fab font-13 fa-facebook-square color-facebook"></i>
                          <span>{child?.label}</span>
                          {/* <i className="fa fa-angle-right"></i> */}
                        </a>
                      );
                    }
                    if (child?.setState) {
                      return (
                        <a
                          key={child?.label}
                          onClick={() => {
                            child?.setState(true);
                            setShowSidebar(false);
                          }}
                        >
                          <i className="fab font-13 fa-facebook-square color-facebook"></i>
                          <span>{child?.label}</span>
                          {/* <i className="fa fa-angle-right"></i> */}
                        </a>
                      );
                    }
                    /* Child link end */
                  })}
                </div>
              </div>
            )}
          </Fragment>
        );
      }
    });
  };

  return (
    <div className="card card-style">
      <div className="content my-0">
        <h5 className="font-700 text-uppercase opacity-40 font-12 pt-2 mb-0">
          Navigation
        </h5>
        <div className="list-group list-custom-small list-icon-0">
          {handleRenderSidebar(navItems)}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
