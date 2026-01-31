import { Fragment, useState } from "react";
import Settings from "../../modal/Settings/Settings";
import { useDispatch } from "react-redux";
import { setShowLeftSidebar } from "../../../redux/features/global/globalSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const [showSettings, setShowSettings] = useState(false);
  return (
    <Fragment>
      {showSettings && <Settings setShowSettings={setShowSettings} />}
      <div id="footer-bar" className="footer-bar-1">
        <a>
          <i className="fa fa-home" />
          <span>Home</span>
        </a>
        <a>
          <i className="fa fa-star" />
          <span>Features</span>
        </a>
        <a
          onClick={() => dispatch(setShowLeftSidebar(true))}
          className="active-nav"
        >
          <i className="fa fa-heart" />
          <span>Menu</span>
        </a>
        <a>
          <i className="fa fa-search" />
          <span>Search</span>
        </a>
        <a onClick={() => setShowSettings(true)}>
          <i className="fa fa-cog" />
          <span>Settings</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
