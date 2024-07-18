import React, { useState } from "react";

export default function APQR() {
  const [tab, setTab] = useState("GI");
  const [pQRData, setPQRData] = useState({
    pqrNO: "",
    productName: "",
    productCode: "",
    genericName: "",
    reviewStartDate: "",
    reviewEndDate: "",
    mfgLicNo: "",
  });
  return (
    <div>
      <div className="form-tabs">
        <div
          className={`${tab === "GI" ? "active" : ""}`}
          onClick={() => setTab("GI")}
        >
          General Information
        </div>
        <div
          className={`${tab === "MR" ? "active" : ""}`}
          onClick={() => setTab("MR")}
        >
          Manufacturing Review
        </div>
        <div
          className={`${tab === "LR" ? "active" : ""}`}
          onClick={() => setTab("LR")}
        >
          Laboratory Review
        </div>
        <div
          className={`${tab === "EAMR" ? "active" : ""}`}
          onClick={() => setTab("EAMR")}
        >
          Engineering And Maintenance Review
        </div>
        <div
          className={`${tab === "QSR" ? "active" : ""}`}
          onClick={() => setTab("QSR")}
        >
          Quality System Review
        </div>
        <div
          className={`${tab === "RR" ? "active" : ""}`}
          onClick={() => setTab("RR")}
        >
          Regulatory Review
        </div>
        <div
          className={`${tab === "R" ? "active" : ""}`}
          onClick={() => setTab("R")}
        >
          Recommendations{" "}
        </div>
        <div
          className={`${tab === "CAPA" ? "active" : ""}`}
          onClick={() => setTab("CAPA")}
        >
          CAPA
        </div>
        <div
          className={`${tab === "DEAC" ? "active" : ""}`}
          onClick={() => setTab("DEAC")}
        >
          Discussion, Evaluation And Conclusion
        </div>
        <div
          className={`${tab === "LOA" ? "active" : ""}`}
          onClick={() => setTab("LOA")}
        >
          List Of Annexures/Attachments
        </div>
      </div>

      {tab === "GI" ? (
        <div className="p-4">
          <div className="dual-group-input ">
            <div className="group-input">
              <label>PQR No</label>
              <input
                value={pQRData.pqrNO}
                onChange={(e) => {
                  setPQRData({ pqrNO: e.target.value });
                }}
              />
            </div>
            <div className="group-input">
              <label>Product Name</label>
              <input
                value={pQRData.productName}
                onChange={(e) => {
                  setPQRData({ productName: e.target.value });
                }}
              />
            </div>
            <div className="group-input">
              <label>Product Code</label>
              <input
                value={pQRData.productCode}
                onChange={(e) => {
                  setPQRData({ productCode: e.target.value });
                }}
              />
            </div>

            <div className="group-input">
              <label>Generic Name</label>
              <input
                value={pQRData.genericName}
                onChange={(e) => {
                  setPQRData({ genericName: e.target.value });
                }}
              />
            </div>
            <div className="group-input">
              <label>Review Start Date</label>
              <input
                type="date"
                value={pQRData.reviewStartDate}
                onChange={(e) => {
                  setPQRData({ reviewStartDate: e.target.value });
                }}
              />
            </div>
            <div className="group-input">
              <label>Review End Date</label>
              <input
                type="date"
                value={pQRData.reviewEndDate}
                onChange={(e) => {
                  setPQRData({ reviewEndDate: e.target.value });
                }}
              />
            </div>
            <div className="group-input">
              <label>MFG. LIC. No</label>
              <input
                value={pQRData.mfgLicNo}
                onChange={(e) => {
                  setPQRData({ mfgLicNo: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="sub-head">Manufacturing Site Address</div>

          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>SFG Code</th>
                <th>FG Code </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product 1for injection 6 mg/0.6 mL</td>
                <td>BS YY XXXXXX</td>
                <td>BF YY XXXXXX</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}

      {tab === "MR" ? (
        <>
          <div className="p-4"></div>
        </>
      ) : null}
      {tab === "LR" ? <></> : null}
      {tab === "EAMR" ? <></> : null}
      {tab === "QSR" ? <></> : null}
      {tab === "RR" ? <></> : null}
      {tab === "R" ? (
        <>
          <div className="flex items-center justify-center text-[28px] text-yellow-500 font-semibold animate-ping">
            {" "}
            Work In Progress. .........
          </div>
        </>
      ) : null}
      {tab === "CAPA" ? (
        <>
          <div className="flex items-center justify-center text-[28px] text-green-500 font-semibold animate-bounce">
            {" "}
            Work In Progress. .........
          </div>
        </>
      ) : null}
      {tab === "DEAC" ? (
        <>
          <div className="flex items-center justify-center text-[28px] text-red-500 font-semibold animate-spin">
            {" "}
            Work In Progress. .........
          </div>{" "}
        </>
      ) : null}
      {tab === "LOA" ? (
        <>
          <div className="flex items-center justify-center text-[28px] text-blue-500 font-semibold animate-pulse">
            {" "}
            Work In Progress. .........
          </div>
        </>
      ) : null}
    </div>
  );
}
