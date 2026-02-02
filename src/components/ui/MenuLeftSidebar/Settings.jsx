const Settings = () => {
  return (
    <div className="card card-style">
      <div className="content my-0">
        <h5 className="font-700 text-uppercase opacity-40 font-12 pt-2 mb-0">
          Settings
        </h5>
        <div className="list-group list-custom-small list-icon-0">
          <a data-menu="menu-highlights">
            <i className="fa font-12 fa-droplet gradient-blue rounded-sm color-white" />
            <span>Highlights</span>
            <i className="fa fa-angle-right" />
          </a>
          <a data-menu="menu-backgrounds">
            <i className="fa font-12 fa-paint-brush gradient-orange rounded-sm color-white" />
            <span>Backgrounds</span>
            <i className="fa fa-angle-right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
