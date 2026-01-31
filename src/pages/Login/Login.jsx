const Login = () => {
  return (
    <div id="page">
      <div className="page-content pb-0">
        <div data-card-height="cover" className="card">
          <div className="card-top notch-clear">
            <a href="#" data-back-button className="me-auto icon icon-m">
              <i className="font-14 fa fa-arrow-left color-white" />
            </a>
          </div>
          <div className="card-center bg-theme rounded-m mx-3">
            <div className="p-4">
              <h1 className="text-center font-800 font-40 mb-1">Sign In</h1>
              <p className="color-highlight text-center font-12">
                Let&apos;s get you logged in
              </p>
              <div className="input-style no-borders has-icon validate-field">
                <i className="fa fa-user" />
                <input
                  type="name"
                  className="form-control validate-name"
                  id="form1a"
                  placeholder="Name"
                />
                <label
                  htmlFor="form1a"
                  className="color-blue-dark font-10 mt-1"
                >
                  Name
                </label>
                <i className="fa fa-times disabled invalid color-red-dark" />
                <i className="fa fa-check disabled valid color-green-dark" />
                <em>(required)</em>
              </div>
              <div className="input-style no-borders has-icon validate-field mt-4">
                <i className="fa fa-lock" />
                <input
                  type="password"
                  className="form-control validate-password"
                  id="form3a"
                  placeholder="Password"
                />
                <label
                  htmlFor="form3a"
                  className="color-blue-dark font-10 mt-1"
                >
                  Password
                </label>
                <i className="fa fa-times disabled invalid color-red-dark" />
                <i className="fa fa-check disabled valid color-green-dark" />
                <em>(required)</em>
              </div>
              <a
                href="#"
                className="back-button btn btn-full btn-m shadow-large rounded-sm text-uppercase font-900 bg-highlight"
              >
                LOGIN
              </a>
            </div>
          </div>
          <div
            className="card-overlay-infinite preload-img"
            data-src="images/pictures/_bg-infinite.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
