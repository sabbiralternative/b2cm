const Home = () => {
  return (
    <div id="page">
      <div className="header header-fixed header-logo-center header-auto-show">
        <a href="index.html" className="header-title">
          Sticky Mobile
        </a>
        <a href="#" data-back-button className="header-icon header-icon-1">
          <i className="fas fa-arrow-left" />
        </a>
        <a href="#" data-toggle-theme className="header-icon header-icon-4">
          <i className="fas fa-lightbulb" />
        </a>
      </div>
      <div id="footer-bar" className="footer-bar-1">
        <a href="index.html">
          <i className="fa fa-home" />
          <span>Home</span>
        </a>
        <a href="index-components.html">
          <i className="fa fa-star" />
          <span>Features</span>
        </a>
        <a href="index-pages.html" className="active-nav">
          <i className="fa fa-heart" />
          <span>Menu</span>
        </a>
        <a href="index-search.html">
          <i className="fa fa-search" />
          <span>Search</span>
        </a>
        <a href="#" data-menu="menu-settings">
          <i className="fa fa-cog" />
          <span>Settings</span>
        </a>
      </div>
      <div className="page-content">
        <div className="content notch-clear">
          <div className="d-flex pt-2">
            <div className="align-self-center me-auto">
              <strong className="text-uppercase opacity-60 font-11">
                Welcome Back
              </strong>
              <h1 className="mt-n2 font-27">magicadmin</h1>
            </div>
            <div className="align-self-center ms-auto">
              <a href="#" className="d-block" data-menu="menu-settings">
                <img
                  src="images/pictures/faces/2s.png"
                  className="img-fluid shadow-xl rounded-circle"
                  width={45}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="card card-style mb-3">
          <div className="content m-0 mb-n3">
            <div className="input-style input-style-always-active has-borders no-icon mb-n3">
              <select id="form5" className="border-0">
                <option value={1} disabled selected>
                  Select Time Frame
                </option>
                <option value={2} selected>
                  Last 7 Days
                </option>
                <option value={3}>Last 15 Days</option>
                <option value={4}>Last 30 Days</option>
                <option value={5}>Last 3 Months</option>
                <option value={6}>Last 6 Months</option>
              </select>
              <span>
                <i className="fa fa-chevron-down" />
              </span>
              <i className="fa fa-check pb-1 disabled valid color-green-dark" />
              <i className="fa fa-check pb-1 disabled invalid color-red-dark" />
            </div>
          </div>
        </div>
        <div className="content mb-2">
          <div className="row mb-0">
            <div className="col-6 pe-2">
              <div className="card card-style mx-0 mb-3" data-card-height={80}>
                <div className="d-flex p-3">
                  <div>
                    <h1 className="mb-n2">58,88,555</h1>
                    <span className="font-11">Upper Level</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-green-dark fa fa-angle-up font-18" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 ps-2">
              <div className="card card-style mx-0 mb-3" data-card-height={80}>
                <div className="d-flex p-3">
                  <div>
                    <h1 className="mb-n2">15.3k</h1>
                    <span className="font-11">P/L Today</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-blue-dark fa fa-minus font-18" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pe-2">
              <div className="card card-style mx-0 mb-3" data-card-height={80}>
                <div className="d-flex p-3">
                  <div>
                    <h1 className="mb-n2">35.1k</h1>
                    <span className="font-11">Deposit Today</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-red-dark fa fa-angle-down font-18" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 ps-2">
              <div className="card card-style mx-0 mb-3" data-card-height={80}>
                <div className="d-flex p-3">
                  <div>
                    <h1 className="mb-n2">1.361</h1>
                    <span className="font-11">Withdraw Today</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-green-dark fa fa-angle-up font-18" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content mt-0">
          <div className="row mb-n3">
            <div className="col-4 pe-2">
              <div className="card card-style mx-0 mb-3">
                <div className="p-3">
                  <h4 className="font-700 text-uppercase font-12 opacity-50 mt-n2">
                    New users
                  </h4>
                  <h1 className="font-700 font-34 color-red-dark mb-0">29</h1>
                  <i className="fa fa-arrow-right float-end mt-n3 opacity-20" />
                </div>
              </div>
            </div>
            <div className="col-4 ps-2 pe-2">
              <div className="card card-style mx-0 mb-3">
                <div className="p-3">
                  <h4 className="font-700 text-uppercase font-12 opacity-50 mt-n2">
                    Pending Dep.
                  </h4>
                  <h1 className="font-700 font-34 color-blue-dark mb-0">15</h1>
                  <i className="fa fa-arrow-right float-end mt-n3 opacity-20" />
                </div>
              </div>
            </div>
            <div className="col-4 ps-2">
              <div className="card card-style mx-0 mb-3">
                <div className="p-3">
                  <h4 className="font-700 text-uppercase font-12 opacity-50 mt-n2">
                    PEnding WD.
                  </h4>
                  <h1 className="font-700 font-34 color-green-dark mb-0">37</h1>
                  <i className="fa fa-arrow-right float-end mt-n3 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-style">
          <div className="content mb-0">
            <div className="row mb-2 mt-n2">
              <div className="col-6 text-start">
                <h4 className="font-700 text-uppercase font-12 opacity-50">
                  Notifications
                </h4>
              </div>
              <div className="col-6 text-end">
                <a href="#" className="font-12">
                  View All
                </a>
              </div>
            </div>
            <div className="divider mb-3" />
            <a href="#" className="item">
              <div className="d-flex mb-4">
                <div className="pe-3">
                  <span className="icon icon-xs bg-fade-blue-light rounded-sm">
                    <i className="color-blue-dark fa fa-plus" />
                  </span>
                </div>
                <div className="align-self-center w-100">
                  <p className="line-height-s font-12 font-400">
                    Your account has been added to
                    <strong className="font-800">Web Design</strong> by
                    <strong className="font-800">Admin</strong>
                    <span className="badge bg-blue-dark color-white ms-2">
                      UPDATE
                    </span>
                  </p>
                </div>
                <div className="align-self-center flex-grow-1">
                  <p className="ps-3 font-10 line-height-xs text-center opacity-40">
                    15 sec
                  </p>
                </div>
              </div>
            </a>
            <a href="#" className="item">
              <div className="d-flex mb-4">
                <div className="pe-3">
                  <span className="icon icon-xs bg-fade-green-light rounded-sm">
                    <i className="color-green-dark fa fa-check" />
                  </span>
                </div>
                <div className="align-self-center w-100">
                  <p className="line-height-s font-12 font-400">
                    <strong className="font-800">AppKit</strong> Mobile update
                    has been completed. Good job!
                    <span className="badge bg-green-dark color-white ms-2">
                      COMPLETE
                    </span>
                  </p>
                </div>
                <div className="align-self-center flex-grow-1">
                  <p className="ps-3 font-10 line-height-xs text-center opacity-40">
                    10 min
                  </p>
                </div>
              </div>
            </a>
            <a href="#" className="item">
              <div className="d-flex mb-4">
                <div className="pe-3">
                  <span className="icon icon-xs bg-fade-red-light rounded-sm">
                    <i className="color-red-dark fa fa-times" />
                  </span>
                </div>
                <div className="align-self-center w-100">
                  <p className="line-height-s font-12 font-400">
                    Mockups Rejected. Event
                    <strong className="font-800">Emergency Meeting</strong>{" "}
                    created by <strong className="font-800">Admin</strong>.
                    <span className="badge bg-red-dark color-white ms-2">
                      URGENT
                    </span>
                  </p>
                </div>
                <div className="align-self-center flex-grow-1">
                  <p className="ps-3 font-10 line-height-xs text-center opacity-40">
                    10 hrs
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* End of Page Content*/}
      {/* All Menus, Action Sheets, Modals, Notifications, Toasts, Snackbars get Placed outside the <div class="page-content"> */}
      <div
        id="menu-settings"
        className="menu menu-box-bottom menu-box-detached"
      >
        <div className="menu-title mt-0 pt-0">
          <h1>Settings</h1>
          <p className="color-highlight">Flexible and Easy to Use</p>
          <a href="#" className="close-menu">
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
      {/* Menu Settings Highlights*/}
      <div
        id="menu-highlights"
        className="menu menu-box-bottom menu-box-detached"
      >
        <div className="menu-title">
          <h1>Highlights</h1>
          <p className="color-highlight">
            Any Element can have a Highlight Color
          </p>
          <a href="#" className="close-menu">
            <i className="fa fa-times" />
          </a>
        </div>
        <div className="divider divider-margins mb-n2" />
        <div className="content">
          <div className="highlight-changer">
            <a href="#" data-change-highlight="blue">
              <i className="fa fa-circle color-blue-dark" />
              <span className="color-blue-light">Default</span>
            </a>
            <a href="#" data-change-highlight="red">
              <i className="fa fa-circle color-red-dark" />
              <span className="color-red-light">Red</span>
            </a>
            <a href="#" data-change-highlight="orange">
              <i className="fa fa-circle color-orange-dark" />
              <span className="color-orange-light">Orange</span>
            </a>
            <a href="#" data-change-highlight="pink2">
              <i className="fa fa-circle color-pink2-dark" />
              <span className="color-pink-dark">Pink</span>
            </a>
            <a href="#" data-change-highlight="magenta">
              <i className="fa fa-circle color-magenta-dark" />
              <span className="color-magenta-light">Purple</span>
            </a>
            <a href="#" data-change-highlight="aqua">
              <i className="fa fa-circle color-aqua-dark" />
              <span className="color-aqua-light">Aqua</span>
            </a>
            <a href="#" data-change-highlight="teal">
              <i className="fa fa-circle color-teal-dark" />
              <span className="color-teal-light">Teal</span>
            </a>
            <a href="#" data-change-highlight="mint">
              <i className="fa fa-circle color-mint-dark" />
              <span className="color-mint-light">Mint</span>
            </a>
            <a href="#" data-change-highlight="green">
              <i className="fa fa-circle color-green-light" />
              <span className="color-green-light">Green</span>
            </a>
            <a href="#" data-change-highlight="grass">
              <i className="fa fa-circle color-green-dark" />
              <span className="color-green-dark">Grass</span>
            </a>
            <a href="#" data-change-highlight="sunny">
              <i className="fa fa-circle color-yellow-light" />
              <span className="color-yellow-light">Sunny</span>
            </a>
            <a href="#" data-change-highlight="yellow">
              <i className="fa fa-circle color-yellow-dark" />
              <span className="color-yellow-light">Goldish</span>
            </a>
            <a href="#" data-change-highlight="brown">
              <i className="fa fa-circle color-brown-dark" />
              <span className="color-brown-light">Wood</span>
            </a>
            <a href="#" data-change-highlight="night">
              <i className="fa fa-circle color-dark-dark" />
              <span className="color-dark-light">Night</span>
            </a>
            <a href="#" data-change-highlight="dark">
              <i className="fa fa-circle color-dark-light" />
              <span className="color-dark-light">Dark</span>
            </a>
            <div className="clearfix" />
          </div>
          <a
            href="#"
            data-menu="menu-settings"
            className="mb-3 btn btn-full btn-m rounded-sm bg-highlight shadow-xl text-uppercase font-900 mt-4"
          >
            Back to Settings
          </a>
        </div>
      </div>
      {/* Menu Settings Backgrounds*/}
      <div
        id="menu-backgrounds"
        className="menu menu-box-bottom menu-box-detached"
      >
        <div className="menu-title">
          <h1>Backgrounds</h1>
          <p className="color-highlight">
            Change Page Color Behind Content Boxes
          </p>
          <a href="#" className="close-menu">
            <i className="fa fa-times" />
          </a>
        </div>
        <div className="divider divider-margins mb-n2" />
        <div className="content">
          <div className="background-changer">
            <a href="#" data-change-background="default">
              <i className="bg-theme" />
              <span className="color-dark-dark">Default</span>
            </a>
            <a href="#" data-change-background="plum">
              <i className="body-plum" />
              <span className="color-plum-dark">Plum</span>
            </a>
            <a href="#" data-change-background="magenta">
              <i className="body-magenta" />
              <span className="color-dark-dark">Magenta</span>
            </a>
            <a href="#" data-change-background="dark">
              <i className="body-dark" />
              <span className="color-dark-dark">Dark</span>
            </a>
            <a href="#" data-change-background="violet">
              <i className="body-violet" />
              <span className="color-violet-dark">Violet</span>
            </a>
            <a href="#" data-change-background="red">
              <i className="body-red" />
              <span className="color-red-dark">Red</span>
            </a>
            <a href="#" data-change-background="green">
              <i className="body-green" />
              <span className="color-green-dark">Green</span>
            </a>
            <a href="#" data-change-background="sky">
              <i className="body-sky" />
              <span className="color-sky-dark">Sky</span>
            </a>
            <a href="#" data-change-background="orange">
              <i className="body-orange" />
              <span className="color-orange-dark">Orange</span>
            </a>
            <a href="#" data-change-background="yellow">
              <i className="body-yellow" />
              <span className="color-yellow-dark">Yellow</span>
            </a>
            <div className="clearfix" />
          </div>
          <a
            href="#"
            data-menu="menu-settings"
            className="mb-3 btn btn-full btn-m rounded-sm bg-highlight shadow-xl text-uppercase font-900 mt-4"
          >
            Back to Settings
          </a>
        </div>
      </div>
      {/* Menu Share */}
      <div id="menu-share" className="menu menu-box-bottom menu-box-detached">
        <div className="menu-title mt-n1">
          <h1>Share the Love</h1>
          <p className="color-highlight">
            Just Tap the Social Icon. Well add the Link
          </p>
          <a href="#" className="close-menu">
            <i className="fa fa-times" />
          </a>
        </div>
        <div className="content mb-0">
          <div className="divider mb-0" />
          <div className="list-group list-custom-small list-icon-0">
            <a
              href="auto_generated.html"
              className="shareToFacebook external-link"
            >
              <i className="font-18 fab fa-facebook-square color-facebook" />
              <span className="font-13">Facebook</span>
              <i className="fa fa-angle-right" />
            </a>
            <a
              href="auto_generated.html"
              className="shareToTwitter external-link"
            >
              <i className="font-18 fab fa-twitter-square color-twitter" />
              <span className="font-13">Twitter</span>
              <i className="fa fa-angle-right" />
            </a>
            <a
              href="auto_generated.html"
              className="shareToLinkedIn external-link"
            >
              <i className="font-18 fab fa-linkedin color-linkedin" />
              <span className="font-13">LinkedIn</span>
              <i className="fa fa-angle-right" />
            </a>
            <a
              href="auto_generated.html"
              className="shareToWhatsApp external-link"
            >
              <i className="font-18 fab fa-whatsapp-square color-whatsapp" />
              <span className="font-13">WhatsApp</span>
              <i className="fa fa-angle-right" />
            </a>
            <a
              href="auto_generated.html"
              className="shareToMail external-link border-0"
            >
              <i className="font-18 fa fa-envelope-square color-mail" />
              <span className="font-13">Email</span>
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
