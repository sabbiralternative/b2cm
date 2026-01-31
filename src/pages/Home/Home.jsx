import { useSelector } from "react-redux";
import assets from "../../assets";
import { useUser } from "../../hooks/use-user";
import { usePermission } from "../../hooks/use-permission";
import { useState } from "react";
import { useGetIndexQuery } from "../../hooks";
import { useBalanceQuery } from "../../hooks/balance";
import moment from "moment";
import Loader from "../../components/shared/Loader/Loader";

const Home = () => {
  const { adminRole } = useSelector((state) => state.auth);
  const today = new Date();
  const { user } = useUser();
  const [date, setDate] = useState(new Date());
  const { permissions } = usePermission();
  const { data } = useGetIndexQuery({ type: "getDashboardDW" });
  const {
    data: balanceData,
    isLoading,
    isPending,
  } = useBalanceQuery({
    date: moment(date).format("YYYY-MM-DD"),
    user_id: user?.user_id,
    role: user?.role,
  });

  const defineBalanceColor = (amount) => {
    if (amount) {
      const parseAmount = parseFloat(amount);
      if (parseAmount === 0) {
        return "white";
      } else if (parseAmount > 0) {
        return "#39da8a";
      } else {
        return "#ff5b5c";
      }
    }
  };
  const deposit = data?.result?.deposit;
  const withdraw = data?.result?.withdraw;
  const rejected_deposit = data?.result?.rejected_deposit;
  const rejected_withdraw = data?.result?.rejected_withdraw;

  const disableOutsideLast14Days = (date) => {
    const start = new Date();
    start.setDate(today.getDate() - 14);

    return date < start || date > today;
  };

  return (
    <div id="page">
      <div className="page-content">
        <div className="content notch-clear">
          <div className="d-flex pt-2">
            <div className="align-self-center me-auto">
              <strong className="text-uppercase opacity-60 font-11">
                Welcome Back
              </strong>
              <h1 className="mt-n2 font-27">{adminRole}</h1>
            </div>
            <div className="align-self-center ms-auto">
              <a href="#" className="d-block" data-menu="menu-settings">
                <img
                  src={assets.user}
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
                    <h1 className="mb-n2">
                      {" "}
                      {isLoading || isPending ? (
                        <Loader />
                      ) : (
                        balanceData?.upperLevel
                      )}
                    </h1>
                    <span className="font-11">Upper Level</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-green-dark fa fa-angle-up font-18" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pe-2">
              <div className="card card-style mx-0 mb-3" data-card-height={80}>
                <div className="d-flex p-3">
                  <div>
                    <h1 className="mb-n2">
                      {isLoading || isPending ? (
                        <Loader />
                      ) : (
                        balanceData?.downLevelOccupyBalance
                      )}
                    </h1>
                    <span className="font-11">Total Client Balance</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-green-dark fa fa-angle-up font-18" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pe-2">
              <div className="card card-style mx-0 mb-3" data-card-height={80}>
                <div className="d-flex p-3">
                  <div>
                    <h1 className="mb-n2">
                      {isLoading || isPending ? (
                        <Loader />
                      ) : (
                        balanceData?.availableBalance ||
                        (balanceData?.availableBalance == 0 &&
                          balanceData?.availableBalance?.toFixed(2))
                      )}
                    </h1>
                    <span className="font-11">Available Balance</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-green-dark fa fa-angle-up font-18" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pe-2">
              <div className="card card-style mx-0 mb-3" data-card-height={80}>
                <div className="d-flex p-3">
                  <div>
                    <h1 className="mb-n2">
                      {isLoading || isPending ? (
                        <Loader />
                      ) : (
                        balanceData?.totalMasterBalance
                      )}
                    </h1>
                    <span className="font-11">Total Master Balance</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-green-dark fa fa-angle-up font-18" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pe-2">
              <div className="card card-style mx-0 mb-3" data-card-height={80}>
                <div className="d-flex p-3">
                  <div>
                    <h1 className="mb-n2">
                      {isLoading || isPending ? (
                        <Loader />
                      ) : (
                        balanceData?.usersToday
                      )}
                    </h1>
                    <span className="font-11">New Users Today</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-green-dark fa fa-angle-up font-18" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pe-2">
              <div className="card card-style mx-0 mb-3" data-card-height={80}>
                <div className="d-flex p-3">
                  <div>
                    <h1 className="mb-n2">
                      {" "}
                      {isLoading || isPending ? (
                        <Loader />
                      ) : (
                        balanceData?.depositToday
                      )}
                    </h1>
                    <span className="font-11">Total Deposit Today</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-red-dark fa fa-angle-down font-18" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pe-2">
              <div className="card card-style mx-0 mb-3" data-card-height={80}>
                <div className="d-flex p-3">
                  <div>
                    <h1 className="mb-n2">
                      {isLoading || isPending ? (
                        <Loader />
                      ) : (
                        balanceData?.withdrawToday
                      )}
                    </h1>
                    <span className="font-11">Total Withdraw Today</span>
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
                    <h1
                      style={{
                        color: `${defineBalanceColor(balanceData?.pnlToday)}`,
                      }}
                      className="mb-n2"
                    >
                      {" "}
                      {isLoading || isPending ? (
                        <Loader />
                      ) : (
                        balanceData?.pnlToday
                      )}
                    </h1>
                    <span className="font-11">P/L Today</span>
                  </div>
                  <div className="ms-auto align-self-center">
                    <i className="color-blue-dark fa fa-minus font-18" />
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
    </div>
  );
};

export default Home;
