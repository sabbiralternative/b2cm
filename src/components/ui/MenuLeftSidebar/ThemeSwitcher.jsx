import useTheme from "../../../hooks/useTheme";

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme();
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
    <div className="position-sticky w-100 bottom-0 end-0 pb-1">
      <div className="card card-style mb-3">
        <div className="content my-0 py-">
          <div className="list-group list-custom-small list-icon-0">
            <a
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
  );
};

export default ThemeSwitcher;
