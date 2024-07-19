import React, { useState } from "react";
import Header from "../Component/Header";

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
    <>
      <Header />
      <div className="inner-container pqrform-topdiv">
        <h1 className="text-2xl font-bold mb-4 border-l-8 border-lime-400  pl-10">
          Annual Product Quality Review
        </h1>
      </div>
      <div className="pqrform">
        <div className="form-tabs">
          <div className={`${tab === "GI" ? "active" : ""}`} onClick={() => setTab("GI")}>
            General Information
          </div>
          <div className={`${tab === "WR" ? "active" : ""}`} onClick={() => setTab("WR")}>
            Warehouse Review
          </div>
          <div className={`${tab === "MR" ? "active" : ""}`} onClick={() => setTab("MR")}>
            Manufacturing Review
          </div>
          <div className={`${tab === "LR" ? "active" : ""}`} onClick={() => setTab("LR")}>
            Laboratory Review
          </div>
          <div className={`${tab === "EAMR" ? "active" : ""}`} onClick={() => setTab("EAMR")}>
            Engineering And Maintenance Review
          </div>
          <div className={`${tab === "QSR" ? "active" : ""}`} onClick={() => setTab("QSR")}>
            Quality System Review
          </div>
          <div className={`${tab === "RR" ? "active" : ""}`} onClick={() => setTab("RR")}>
            Regulatory Review
          </div>
          <div className={`${tab === "R" ? "active" : ""}`} onClick={() => setTab("R")}>
            Recommendations{" "}
          </div>
          <div className={`${tab === "CAPA" ? "active" : ""}`} onClick={() => setTab("CAPA")}>
            CAPA
          </div>
          <div className={`${tab === "DEAC" ? "active" : ""}`} onClick={() => setTab("DEAC")}>
            Discussion, Evaluation And Conclusion
          </div>
          <div className={`${tab === "LOA" ? "active" : ""}`} onClick={() => setTab("LOA")}>
            List Of Annexures/Attachments
          </div>
        </div>

        {tab === "GI" ? (
          <div className="  p-4">
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

            <div className="py-4">
              <table>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Batch Code</th>
                    <th>SFG Code</th>
                    <th></th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {tab === "WR" ? (
          <>
            <div className="p-4">
              <div className="sub-head">
                <p>Review of Rejected Raw Materials and Packaging Materials</p>
              </div>
              <div className="pb-4">
                <h4 className="gridName">Raw Materials Rejection Summary</h4>
                <table>
                  <thead>
                    <tr>
                      <th>SI. No.</th>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th>Lot No./ A.R. No.</th>
                      <th>Reason for Rejection</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pb-4">
                <h4 className="gridName"> Packing Materials Rejection Summary</h4>
                <table>
                  <thead>
                    <tr>
                      <th>SI. No.</th>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th>Lot No./ A.R. No.</th>
                      <th>Reason for Rejection</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="sub-head">
                Review of Expired Raw Materials and Packaging Materials
              </div>
              <div className="pb-4">
                <h4 className="gridName">Expired Raw Materials Details</h4>
                <table>
                  <thead>
                    <tr>
                      <th>SI. No.</th>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th>Lot No./ A.R. No.</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="">
                <h4 className="gridName">Expired Packaging Materials Details</h4>
                <table>
                  <thead>
                    <tr>
                      <th>SI. No.</th>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th>Lot No./ A.R. No.</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="sub-head">Review of Approved Supplier List</div>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Sl. No.</th>
                      <th>Material Code</th>
                      <th>Material Name</th>
                      <th>Manufacturer / Supplier / Vendor</th>
                      <th>Facility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="sub-head">
                Vendor Qualification Details of Raw Material Excipients
              </div>
              <div>
                <table>
                  <thead>
                    <th>Material Name</th>
                    <th>Material Code</th>
                    <th>Manufacturer Name</th>
                    <th>Qualification Status</th>
                    <th>Remarks</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Acetic acid glacial</td>
                      <td>600001460</td>
                      <td>Merck KgaA Frankfurt, Strabe 250, Dramstadt 64293 GERMANY.</td>
                      <td>Approved</td>
                      <td>NA</td>
                    </tr>
                    <tr>
                      <td>Sorbitol</td>
                      <td>600000405</td>
                      <td>Roquette Freres 62136, Lestrem France</td>
                      <td>Approved</td>
                      <td>Temporarily Blocked as a part of CN/21/062</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="sub-head">
                Vendor Qualification Details of Primary Packing Materials
              </div>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Material Name</th>
                      <th>Material Code</th>
                      <th>Manufacturer Name</th>
                      <th>Qualification Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>HYPAK SCF1 MLL 29 GA1 /21 N-5B TW RNSTPE WR-France (Syringe)</td>
                      <td>650000374</td>
                      <td>
                        BD Medical Pharmaceutical Systems 11 Rue Aristide Bergès - ZI des Iles 38800
                        LE PONT DE CLAIX FRANCE
                      </td>
                      <td>Approved</td>
                    </tr>
                    <tr>
                      <td>HYPAK BSCF 1 MLL 4023 FLURDAIKYO SI 1000PPL (Plunger Stoppers)</td>
                      <td>650001052/ 650000771</td>
                      <td>
                        BD Medical Pharmaceutical Systems 920 East 19th Street COLUMBUS NE 68601 USA
                      </td>
                      <td>Approved</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="sub-head">Vendor Qualification Details of Process Gases</div>
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>Gas Name</th>
                      <th>Gas Code</th>
                      <th>Manufacturer Name</th>
                      <th> Qualification Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Argon Gas</td>
                      <td>300001985</td>
                      <td>Peenya Industrial Gases Pvt Ltd, Hosur</td>
                      <td>Approved</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : null}
        {tab === "MR" ? (
          <div className="p-4">
            <div className="dual-group-input">
              <div className="group-input">
                <label>Product Description</label>
                <input />
              </div>
              <div className="group-input">
                <label>Process Flow</label>
                <input />
              </div>
            </div>

            <div className="sub-head">Review of all Batches Manufactured</div>

            <div className="dual-group-input">
              <div className="group-input">
                <label>Total No. of batches manufactured during the current review period</label>
                <input type="number" />
              </div>
              <div className="group-input">
                <label>Total No. of batches Approved & Released</label>
                <input />
              </div>
              <div className="group-input">
                <label>Total No. of Process Validation Batches</label>
                <input />
              </div>{" "}
              <div className="group-input">
                <label>Process Validation Batches Details</label>
                <input placeholder="please insert flex" />
              </div>
              <div className="group-input">
                <label>Total No. of Reprocessed Batches</label>
                <input />
              </div>
              <div className="group-input">
                <label>Reprocessing Details</label>
                <input placeholder="please insert flex" />
              </div>
              <div className="group-input">
                <label>Microbial Excursion Details</label>
                <input placeholder="please insert flex" />
              </div>
            </div>
            <div className="py-4">
              <table>
                <thead>
                  <tr>
                    <th>SL. No.</th>
                    <th>Batch Number</th>
                    <th>Existing code</th>
                    <th>Existing market</th>
                    <th>Proposed code</th>
                    <th>Proposed Market</th>
                    <th>Transfer quantity</th>
                    <th>Ref. No.</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="sub-head">
              {" "}
              Review of Manufacturing Process, Packing Process and relevant Validation Status
            </div>
            <input placeholder="please insert flex" />
            <div className="sub-head">
              Review of Reprocessing/Repacking/Reworking along with CAPA and Effectiveness Check
              Verification (if any)
            </div>
            <div className="group-input">
              <label>Batch reprocessing/reworking process Details</label>
              <input placeholder="please insert flex" />
            </div>
            <div className="group-input">
              <label>Batch reprocessing/reworking process Details</label>
              <input placeholder="please insert flex" />
            </div>

            <div className="py-4">
              <table>
                <thead>
                  <tr>
                    <th>SL. No.</th>
                    <th>Packing batch number</th>
                    <th>Manufacturing batch number</th>
                    <th>Repacking issued number</th>
                    <th>Repacking for</th>
                    <th>QMS</th>
                    <th>Reason for repacking</th>
                  </tr>
                </thead>
              </table>
            </div>
            <h1>Deviation Details - Grid CAPA Details – Grid</h1>

            <div className="sub-head"> Review of Product Quality (Critical Process Parameters)</div>
            <h3 className="gridName">Unit Operation 1</h3>
            <h4 className="gridName">Buffer formulation summary details provided below</h4>
            <div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Critical Process Parameters</th>
                    <th rowSpan={2}>Codes</th>
                    <th rowSpan={2}>Acceptance criteria</th>
                    <th colSpan={2}>Results</th>
                    <th rowSpan={2}>Complies / Does not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
              </table>
            </div>
            <h3 className="gridName">Unit Operation 2</h3>
            <h4 className="gridName">Manufacturing summary details</h4>

            <table>
              <thead>
                <tr>
                  <th rowSpan={2}>Critical Process Parameters</th>
                  <th rowSpan={2}>Codes</th>
                  <th rowSpan={2}>Acceptance criteria</th>
                  <th colSpan={2}>Results</th>
                  <th rowSpan={2}>Complies / Does not complies</th>
                </tr>
                <tr>
                  <th>Minimum</th>
                  <th>Maximum</th>
                </tr>
              </thead>
            </table>

            <div className="sub-head">Critical Process Parameters Review Summary</div>
            <div className="group-input">
              <input placeholder="please insert flex" />
            </div>
          </div>
        ) : null}

        {tab === "LR" ? (
          <div className="p-4">
            <div className="sub-head"> Review of Drug Substance Test Results</div>
            <h1 className="gridName">Drug Substance 1 Test Result</h1>

            <div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="sub-head">Review of Raw Material Excipient Test Results</div>

            <div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Material</th>
                    <th rowSpan={2}>Test parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="sub-head">Review of Packing Material Test Results</div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Material</th>
                    <th rowSpan={2}>Test parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="sub-head">Review of Drug Product – In process Test Results</div>
            <h4 className="gridName">Dilution Buffer</h4>
            <div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Stage</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <td>Minimum</td>
                    <td>Maximum</td>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="sub-head">Review of Drug Product –Finished Product Test Results</div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th rowSpan={2}>Sl. No</th>
                    <th rowSpan={2}>Tests parameter</th>
                    <th rowSpan={2}>Specification limit</th>
                    <th colSpan={2}>Obtained value</th>
                    <th rowSpan={2}>Complies/ Does Not complies</th>
                  </tr>
                  <tr>
                    <td>Minimum</td>
                    <td>Maximum</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        ) : null}
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
              Work In Progress. .........
            </div>
          </>
        ) : null}
        {tab === "LOA" ? (
          <>
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin">
                    😃 😃 😃 😃😃😃 😃 😃 😃 😃😃😃😃😃😃
                  </div>
                </div>
              </div>
              <span className="text-[28px] text-blue-500 font-semibold">
                Work In Progress. .........
              </span>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
