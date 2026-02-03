const DashboardDW = ({ data, emptyMessage, title }) => {
  return (
    <div className="" style={{ marginBottom: "40px" }}>
      <div className="content mb-2">
        <h3 style={{ marginBottom: "5px", fontSize: "15px" }}>{title}</h3>
        {/* <p>Dark tables are always gorgeous.</p> */}
        <table
          className="table table-borderless text-center rounded-sm shadow-l"
          style={{ overflow: "hidden" }}
        >
          <thead>
            <tr>
              <th
                scope="col"
                className="bg-night-light border-dark-dark py-3 color-white"
              >
                BranchName
              </th>
              <th
                scope="col"
                className="bg-night-light border-dark-dark py-3 color-white"
              >
                Count
              </th>
              <th
                scope="col"
                className="bg-night-light border-dark-dark py-3 color-white"
              >
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data?.length > 0 ? (
              data?.map((dw, i) => {
                return (
                  <tr className="bg-dark-light" key={i}>
                    <td scope="row">{dw?.branchName}</td>
                    <td>{dw?.count}</td>
                    <td>{dw?.amount}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td></td>
                <td>
                  <h6 style={{ marginTop: "10px" }}> {emptyMessage}</h6>
                </td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardDW;
