import { useEffect, useRef, useState } from "react";
import useGetDWCountQuery from "../../../hooks/dwCount";
import Loader from "../../shared/Loader/Loader";
import assets from "../../../assets";

const UserDepositWithdrawCount = ({ isLoading, isPending, balanceData }) => {
  const { data: dwCount } = useGetDWCountQuery();
  const [depositCount, setDepositCount] = useState(null);
  const [withdrawCount, setWithdrawCount] = useState(null);
  const depositRefCount = useRef(depositCount);
  const withdrawRefCount = useRef(withdrawCount);
  const [playSound, setPlaySound] = useState(false);

  useEffect(() => {
    if (dwCount?.depositCount >= 0 || dwCount?.withdrawCount >= 0) {
      if (
        (playSound &&
          depositCount !== null &&
          depositCount > depositRefCount.current) ||
        (playSound &&
          withdrawCount !== null &&
          withdrawCount > withdrawRefCount.current)
      ) {
        new Audio(assets.notification).play();
      }
      depositRefCount.current = depositCount;
      withdrawRefCount.current = withdrawCount;
      setDepositCount(dwCount?.depositCount);
      setWithdrawCount(dwCount?.withdrawCount);
      setPlaySound(true);
    }
  }, [depositCount, withdrawCount, playSound, dwCount]);

  return (
    <div className="content mt-0">
      <div className="row mb-n3">
        <div className="col-4 pe-2">
          <div className="card card-style mx-0 mb-3">
            <div className="p-3">
              <h4 className="font-700 text-uppercase font-12 opacity-50 mt-n2">
                New users
              </h4>
              <h1 className="font-700 font-34 color-red-dark mb-0">
                {" "}
                {isLoading || isPending ? <Loader /> : balanceData?.usersToday}
              </h1>
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
              <h1 className="font-700 font-34 color-blue-dark mb-0">
                {depositCount}
              </h1>
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
              <h1 className="font-700 font-34 color-green-dark mb-0">
                {withdrawCount}
              </h1>
              <i className="fa fa-arrow-right float-end mt-n3 opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDepositWithdrawCount;
