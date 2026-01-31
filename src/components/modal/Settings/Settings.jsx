import { Fragment } from "react";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import useTheme from "../../../hooks/useTheme";

const Settings = ({ setShowSettings }) => {
  const { setTheme, theme } = useTheme();
  const closeModal = () => {
    setShowSettings(false);
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
      <div className="menu-hider menu-active"></div>
      <ModalWrapper onClose={closeModal}>
        <div
          id="menu-settings"
          className="menu menu-box-bottom menu-box-detached menu-active"
          style={{ display: "block" }}
        >
          <div className="menu-title mt-0 pt-0">
            <h1>Settings</h1>
            <p className="color-highlight">Flexible and Easy to Use</p>
            <a onClick={closeModal} className="close-menu">
              <i className="fa fa-times" />
            </a>
          </div>
          <div className="divider divider-margins mb-n2" />
          <div className="content">
            <div className="list-group list-custom-small">
              <a
                href="#"
                data-toggle-theme
                data-trigger-switch="switch-dark-mode"
                className="pb-2 ms-n1"
              >
                <i className="fa font-12 fa-moon rounded-s bg-highlight color-white me-3" />
                <span>Dark Mode</span>
                <div className="custom-control scale-switch ios-switch">
                  <input
                    checked={theme === "dark"}
                    onChange={handleChangeTheme}
                    data-toggle-theme
                    type="checkbox"
                    className="ios-input"
                    id="switch-dark-mode"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="switch-dark-mode"
                  />
                </div>
                <i className="fa fa-angle-right" />
              </a>
            </div>
            <div className="list-group list-custom-large">
              <a data-menu="menu-highlights" href="#">
                <i className="fa font-14 fa-tint bg-green-dark rounded-s" />
                <span>Page Highlight</span>
                <strong>16 Colors Highlights Included</strong>
                <span className="badge bg-highlight color-white">HOT</span>
                <i className="fa fa-angle-right" />
              </a>
              <a data-menu="menu-backgrounds" href="#" className="border-0">
                <i className="fa font-14 fa-cog bg-blue-dark rounded-s" />
                <span>Background Color</span>
                <strong>10 Page Gradients Included</strong>
                <span className="badge bg-highlight color-white">NEW</span>
                <i className="fa fa-angle-right" />
              </a>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </Fragment>
  );
};

export default Settings;
