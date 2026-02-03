import { useSelector } from "react-redux";
import assets from "../../assets";
import { useUser } from "../../hooks/use-user";
import { usePermission } from "../../hooks/use-permission";
import { useState } from "react";
import { useGetIndexQuery } from "../../hooks";
import { useBalanceQuery } from "../../hooks/balance";
import moment from "moment";
import Loader from "../../components/shared/Loader/Loader";
import UserDepositWithdrawCount from "../../components/module/Home/UserDepositWithdrawCount";
import DashboardDW from "../../components/module/Home/DashboardDW";
import { AdminRole, Permission } from "../../constant/constant";

const Home = () => {
  const { adminRole, adminName } = useSelector((state) => state.auth);
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
              <h1 className="mt-n2 font-27">{adminName}</h1>
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
                <option style={{ color: "black" }} value={2} selected>
                  Today
                </option>
                <option style={{ color: "black" }} value={3}>
                  Last 15 Days
                </option>
                <option style={{ color: "black" }} value={4}>
                  Last 30 Days
                </option>
                <option style={{ color: "black" }} value={5}>
                  Last 3 Months
                </option>
                <option style={{ color: "black" }} value={6}>
                  Last 6 Months
                </option>
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
        <UserDepositWithdrawCount />
        {permissions.includes(Permission.deposit) && (
          <DashboardDW
            data={deposit}
            title="Pending Deposit"
            emptyMessage="No pending deposit"
          />
        )}
        {permissions.includes(Permission.withdraw) && (
          <DashboardDW
            data={withdraw}
            title="Pending Withdraw"
            emptyMessage="No pending withdraw"
          />
        )}
        {(adminRole === AdminRole.hyper_master ||
          adminRole === AdminRole.admin_staff) &&
          permissions.includes(Permission.deposit) && (
            <DashboardDW
              data={rejected_deposit}
              title="Rejected Deposit"
              emptyMessage="No rejected deposit"
            />
          )}
        {(adminRole === AdminRole.hyper_master ||
          adminRole === AdminRole.admin_staff) &&
          permissions.includes(Permission.withdraw) && (
            <DashboardDW
              data={rejected_withdraw}
              title="Rejected Withdraw"
              emptyMessage="No rejected withdraw"
            />
          )}
      </div>
    </div>
  );
};

export default Home;
