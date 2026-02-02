import { useState } from "react";
import ModalWrapper from "../../modal/ModalWrapper/ModalWrapper";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { setShowLeftSidebar } from "../../../redux/features/global/globalSlice";

const DropDown = () => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);

  const close = () => {
    setShowDropdown(false);
  };
  return (
    <div className="ms-auto">
      <a
        onClick={() => setShowDropdown((prev) => !prev)}
        data-bs-toggle="dropdown"
        className="icon icon-m ps-3 show"
        aria-expanded="true"
      >
        <i className="fa fa-ellipsis-v font-18 color-theme" />
      </a>
      {showDropdown && (
        <ModalWrapper onClose={close}>
          <div
            className={`dropdown-menu bg-transparent border-0 mb-n5 show`}
            data-popper-placement="bottom-end"
            style={{
              margin: "0px",
              position: "absolute",
              inset: "0px auto auto 0px",
              transform: "translate(149.167px, 68.3333px)",
            }}
          >
            <div className="card card-style rounded-m shadow-xl me-1">
              <div className="list-group list-custom-small list-icon-0 px-3 mt-n1">
                <a className="mb-n2 mt-n1">
                  <span>Change Password</span>
                  <i className="fa fa-angle-right" />
                </a>

                <a
                  onClick={() => {
                    dispatch(logout());
                    setShowDropdown(false);
                    dispatch(setShowLeftSidebar(false));
                  }}
                  className="mb-n1"
                >
                  <span>Sign Out</span>
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};

export default DropDown;
