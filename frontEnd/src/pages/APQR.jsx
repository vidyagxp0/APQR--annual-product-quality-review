import React, { useState } from "react";
import Header from "../Component/Header";
import { MdNoteAdd } from "react-icons/md";
import TinyEditor from "../Component/TinyEditor";

export default function APQR() {
  const [tab, setTab] = useState("GI");
  const [manufacturingStage, setManufacturingStage] = useState([]);
  const [manufacturingSAPS, setManufacturingSAPS] = useState([]);
  const [rawMRS, setRawMRS] = useState([]);
  const [packingMRS, setPackingMRS] = useState([]);
  const [reviewOfASL, setReviewOfASL] = useState([]);
  const [expiredRMD, setExpiredRMD] = useState([]);
  const [expiredPMD, setExpiredPMD] = useState([]);
  const [vendorQDORME, setVendorQDORME] = useState([]);
  const [vendorQDOPPM, setVendorQDOPPM] = useState([]);
  const [vendorQDPOG, setVendorQDPOG] = useState([]);
  const [codeTCTD, setCodeTCTD] = useState([]);
  const [reviewORCEC, setReviewORCEC] = useState([]);
  const [manufacturingSD, setManufacturingSD] = useState([]);
  const [bufferFSDPV, setBufferFSDPV] = useState([]);
  const [reviewODSTR, setReviewOSTR] = useState([]);
  const [reviewORMETR, setReviewORMETR] = useState([]);
  const [reviewOPMTR, setReviewOPMTR] = useState([]);
  const [reviewODP, setReviewODP] = useState([]);
  const [reviewODPFPTR, setReviewODPFPTR] = useState([]);
  const [summaryOOSS, setSummaryOOSS] = useState([]);
  const [stabilitySR, setStabilitySR] = useState([]);
  const [reviewOVIRS, setReviewOVIRS] = useState([]);
  const [hVACQStatus,setHVACQStatus]=useState([])
  const [pQRData, setPQRData] = useState({
    pqrNO: "",
    productName: "",
    productCode: "",
    genericName: "",
    reviewStartDate: "",
    reviewEndDate: "",
    mfgLicNo: "",
  });

  const addManufacturingStageRow = () => {
    const newRow = {
      productName: "",
      sFGCode: "",
      fGCode: "",
    };
    setManufacturingStage([...manufacturingStage, newRow]);
  };

  const addManufacturingSAPSRow = () => {
    const newRow = {
      productName: "",
      batchCode: "",
      sFGCode: "",
      remarks: "",
    };
    setManufacturingSAPS([...manufacturingSAPS, newRow]);
  };

  const addRawMRSRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      reasonOfRejection: "",
      description: "",
    };
    setRawMRS([...rawMRS, newRow]);
  };

  const addPackingMRSRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      reasonOfRejection: "",
      description: "",
    };
    setPackingMRS([...packingMRS, newRow]);
  };

  const addExpiredRMDRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      description: "",
    };
    setExpiredRMD([...expiredRMD, newRow]);
  };
  const addExpiredPMDRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      ARNo: "",
      description: "",
    };
    setExpiredPMD([...expiredPMD, newRow]);
  };
  const addreviewOfASLRow = () => {
    const newRow = {
      materialCode: "",
      materialName: "",
      manufacturer: "",
      facility: "",
    };
    setReviewOfASL([...reviewOfASL, newRow]);
  };

  const addvendorQDORMERow = () => {
    const newRow = {
      materialName: "",
      materialCode: "",
      manufacturerName: "",
      qualificationStatus: "",
      remarks: "",
    };
    setVendorQDORME([...vendorQDORME, newRow]);
  };

  const addvendorQDOPPMRow = () => {
    const newRow = {
      materialName: "",
      materialCode: "",
      manufacturerName: "",
      qualificationStatus: "",
    };
    setVendorQDOPPM([...vendorQDOPPM, newRow]);
  };

  const addvendorQDPOGRow = () => {
    const newRow = {
      gasName: "",
      gasCode: "",
      manufacturerName: "",
      qualificationStatus: "",
    };
    setVendorQDPOG([...vendorQDPOG, newRow]);
  };

  const addcodeTCTDRow = () => {
    const newRow = {
      batchNo: "",
      existingCode: "",
      existingMarket: "",
      proposedCode: "",
      proposedMarket: "",
      transferQuality: "",
      refNo: "",
    };
    setCodeTCTD([...codeTCTD, newRow]);
  };

  const addreviewORCECRow = () => {
    const newRow = {
      packingBatchNumber: "",
      manufacturingBatchNumber: "",
      repackingIssuedNumber: "",
      repackingFor: "",
      qMS: "",
      reasonForRepacking: "",
    };
    setReviewORCEC([...reviewORCEC, newRow]);
  };

  const addmanufacturingSDRow = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setManufacturingSD([...manufacturingSD, newRow]);
  };

  const addBufferFSDPVRow = () => {
    const newRow = {
      criticalProcessParameter: "",
      codes: "",
      acceptanceCriteria: "",
      results: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setBufferFSDPV([...bufferFSDPV, newRow]);
  };

  const addReviewODSTRRow = () => {
    const newRow = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOSTR([...reviewODSTR, newRow]);
  };

  const addReviewORMETRRow = () => {
    const newRow = {
      material: "",
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewORMETR([...reviewORMETR, newRow]);
  };

  const addreviewOPMTRRow = () => {
    const newRow = {
      material: "",
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewOPMTR([...reviewOPMTR, newRow]);
  };

  const addReviewODPRow = () => {
    const newRow = {
      testsParameter: "",
      specificationLimit: "",
      stage: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODP([...reviewODP, newRow]);
  };

  const addReviewODPFPTRRow = () => {
    const newRow = {
      testsParameter: "",
      specificationLimit: "",
      obtainedValue: { minimum: "", maximum: "" },
      compliesNotComplies: "",
    };
    setReviewODPFPTR([...reviewODPFPTR, newRow]);
  };

  const addSummaryOOSSRow = () => {
    const newRow = {
      batchNo: "",
      type: "",
      storageCondition: "",
      testingInterval: "",
      stabilityProtocolNo: "",
    };
    setSummaryOOSS([...summaryOOSS, newRow]);
  };

  const addStabilitySRRow = () => {
    const newRow = {
      batchNo: "",
      testingIntervalMonths: "",
      OOSNumber: "",
    };
    setStabilitySR([...stabilitySR, newRow]);
  };

  const addreviewOVIRSRow = () => {
    const newRow = {
      code: "",
      code1: "",
      code2: "",
      code3: "",
      code4: "",
      code5: "",
      code6: "",
      code7: "",
      code8: "",
    };
    setReviewOVIRS([...reviewOVIRS, newRow]);
  };

  const addHVACQStatusRow=()=>{
    const newRow={
      testDescription:"",
      frequency:"",
      status:""
    }
    setHVACQStatus([...hVACQStatus,newRow])
  }
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
          <div
            className={`${tab === "GI" ? "active" : ""}`}
            onClick={() => setTab("GI")}
          >
            General Information
          </div>
          <div
            className={`${tab === "WR" ? "active" : ""}`}
            onClick={() => setTab("WR")}
          >
            Warehouse Review
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
            <div className="AddRows d-flex">
              <MdNoteAdd onClick={addManufacturingStageRow} />
              <div className="addrowinstruction"></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>SFG Code</th>
                  <th>FG Code </th>
                </tr>
              </thead>
              <tbody>
                {manufacturingStage.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="py-4">
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addManufacturingSAPSRow} />
                <div className="addrowinstruction"></div>
              </div>
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
                  {manufacturingSAPS.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
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
                <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addRawMRSRow} />
                  <div className="addrowinstruction"></div>
                </div>

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
                    {rawMRS.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="pb-4">
                <h4 className="gridName">
                  {" "}
                  Packing Materials Rejection Summary
                </h4>
                <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addPackingMRSRow} />
                  <div className="addrowinstruction"></div>
                </div>
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
                    {packingMRS.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="sub-head">
                Review of Expired Raw Materials and Packaging Materials
              </div>
              <div className="pb-4">
                <h4 className="gridName">Expired Raw Materials Details</h4>
                <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addExpiredRMDRow} />
                  <div className="addrowinstruction"></div>
                </div>
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
                    {expiredRMD.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="">
                <h4 className="gridName">
                  Expired Packaging Materials Details
                </h4>
                <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addExpiredPMDRow} />
                  <div className="addrowinstruction"></div>
                </div>
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
                    {expiredPMD.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="sub-head">Review of Approved Supplier List</div>
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addreviewOfASLRow} />
                <div className="addrowinstruction"></div>
              </div>
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
                    {reviewOfASL.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="sub-head">
                Vendor Qualification Details of Raw Material Excipients
              </div>
              <div>
                <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addvendorQDORMERow} />
                  <div className="addrowinstruction"></div>
                </div>
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
                      <td>Sorbitol</td>
                      <td>600000405</td>
                      <td>Roquette Freres 62136, Lestrem France</td>
                      <td>Approved</td>
                      <td>Temporarily Blocked as a part of CN/21/062</td>
                    </tr>
                    {vendorQDORME.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="sub-head">
                Vendor Qualification Details of Primary Packing Materials
              </div>
              <div>
                <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addvendorQDOPPMRow} />
                  <div className="addrowinstruction"></div>
                </div>
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
                    {vendorQDOPPM.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="sub-head">
                Vendor Qualification Details of Process Gases
              </div>
              <div>
                <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addvendorQDPOGRow} />
                  <div className="addrowinstruction"></div>
                </div>
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
                    {vendorQDPOG.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
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
                <label>
                  Total No. of batches manufactured during the current review
                  period
                </label>
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
            <div className="gridName">Code to code transfer details</div>
            <div className="py-4">
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addcodeTCTDRow} />
                <div className="addrowinstruction"></div>
              </div>
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
                <tbody>
                  {codeTCTD.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="sub-head">
              {" "}
              Review of Manufacturing Process, Packing Process and relevant
              Validation Status
            </div>
            <input placeholder="please insert flex" />
            <div className="sub-head">
              Review of Reprocessing/Repacking/Reworking along with CAPA and
              Effectiveness Check Verification (if any)
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
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addreviewORCECRow} />
                <div className="addrowinstruction"></div>
              </div>
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
                <tbody>
                  {reviewORCEC.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h1>Deviation Details - Grid CAPA Details – Grid</h1>

            <div className="sub-head">
              {" "}
              Review of Product Quality (Critical Process Parameters)
            </div>
            <h3 className="gridName">Unit Operation 1</h3>
            <h4 className="gridName">
              Buffer formulation summary details provided below
            </h4>
            <div>
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addBufferFSDPVRow} />
                <div className="addrowinstruction"></div>
              </div>
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
                <tbody>
                  {bufferFSDPV.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <h3 className="gridName">Unit Operation 2</h3>
            <h4 className="gridName">Manufacturing summary details</h4>
            <div className="AddRows d-flex">
              <MdNoteAdd onClick={addmanufacturingSDRow} />
              <div className="addrowinstruction"></div>
            </div>
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
              <tbody>
                {manufacturingSD.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                      <td>
                        <input />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="sub-head">
              Critical Process Parameters Review Summary
            </div>
            <div className="group-input">
              <input placeholder="please insert flex" />
            </div>
          </div>
        ) : null}

        {tab === "LR" ? (
          <div className="p-4">
            <div className="sub-head">
              {" "}
              Review of Drug Substance Test Results
            </div>
            <h1 className="gridName">Drug Substance 1 Test Result</h1>

            <div>
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODSTRRow} />
                <div className="addrowinstruction"></div>
              </div>
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
                <tbody>
                  {reviewODSTR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="sub-head">
              Review of Raw Material Excipient Test Results
            </div>

            <div>
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewORMETRRow} />
                <div className="addrowinstruction"></div>
              </div>
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
                <tbody>
                  {reviewORMETR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="sub-head">
              Review of Packing Material Test Results
            </div>
            <div>
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addreviewOPMTRRow} />
                <div className="addrowinstruction"></div>
              </div>
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
                <tbody>
                  {reviewOPMTR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="sub-head">
              Review of Drug Product – In process Test Results
            </div>
            <h4 className="gridName">Dilution Buffer</h4>
            <div>
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPRow} />
                <div className="addrowinstruction"></div>
              </div>
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
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODP.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="sub-head">
              Review of Drug Product –Finished Product Test Results
            </div>
            <div>
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addReviewODPFPTRRow} />
                <div className="addrowinstruction"></div>
              </div>
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
                    <th>Minimum</th>
                    <th>Maximum</th>
                  </tr>
                </thead>
                <tbody>
                  {reviewODPFPTR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="sub-head">Summary of Ongoing Stability Studies</div>
            <div>
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addSummaryOOSSRow} />
                <div className="addrowinstruction"></div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sl. No.</th>
                    <th>Batch No.</th>
                    <th>Type</th>
                    <th>Storage Condition</th>
                    <th>Testing Intervals Months completed</th>
                    <th>Stability Protocol No.</th>
                  </tr>
                </thead>
                <tbody>
                  {summaryOOSS.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <h4 className="gridName pt-4">Stability Study Related OOS/OOT</h4>
              <div className="AddRows d-flex">
                <MdNoteAdd onClick={addStabilitySRRow} />
                <div className="addrowinstruction"></div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sl. No.</th>
                    <th>Batch number</th>
                    <th>Testing Intervals Months</th>
                    <th>OOS Number</th>
                  </tr>
                </thead>
                <tbody>
                  {stabilitySR.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                        <td>
                          <input />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <h4 className="gridName">Summary</h4>
              <TinyEditor />

              <div className="sub-head">
                {" "}
                Review of Visual Inspection – Reserve Samples
              </div>
              <div>
                <div className="AddRows d-flex">
                  <MdNoteAdd onClick={addreviewOVIRSRow} />
                  <div className="addrowinstruction"></div>
                </div>
                <table>
                  <thead>
                    <th className="text-center" colSpan={9}>
                      Batch Numbers
                    </th>
                  </thead>
                  <tbody>
                    {reviewOVIRS.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                          <td>
                            <input />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <h4 className="gridName mt-4">Summary</h4>
              <TinyEditor />
              <h4 className="gridName pt-4">
                Review of Analytical Method Validations
              </h4>
              <TinyEditor />
              <h4 className="gridName pt-4">
                Review of Contract Testing Laboratories
              </h4>
              <TinyEditor />
              <h4 className="gridName pt-4">
                Review of Environmental Monitoring Trend and water trends
                Reports
              </h4>
              <TinyEditor />
              <h4 className="gridName pt-4">Laboratory Review Summary</h4>
              <TinyEditor />
            </div>
          </div>
        ) : null}
        {tab === "EAMR" ? <div>
        <h4 className="gridName">Preventive Maintenance Details</h4>
        <TinyEditor/>
        <h4 className="gridName pt-4"> Qualification details</h4>
        <TinyEditor/>
        <h4 className="gridName pt-4"> Calibration Details</h4>
        <TinyEditor/>

        <div className="sub-head">HVAC Qualification Status</div>
        <div>
          <div className="AddRows">
          <MdNoteAdd onClick={addHVACQStatusRow} />
          <div className="addrowinstruction"></div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Test Description</th>
                <th>Frequency</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {hVACQStatus.map((item,index)=>{
                return <tr key={index}>
<td><input/></td>
<td><input/></td>
<td><input/></td>

                </tr>
              })}
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        </div> : null}
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
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin">
                    😃😃😃😃😃😃😃😃😃😃😃😃😃😃😃
                  </div>
                </div>
              </div>
              <span className="text-[28px] text-blue-500 font-semibold">
                Work In Progress. .........
              </span>
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
            <div className="container">
              <div>
                <h4 className="gridName">Annexure 1</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 2</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 3</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 4</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 5</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 6</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 7</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 8</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 9</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 10</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 11</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 12</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 13</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 14</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 15</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 16</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 17</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 18</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 19</h4>
                <TinyEditor />
              </div>
              <div>
                <h4 className="gridName">Annexure 20</h4>
                <TinyEditor />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
