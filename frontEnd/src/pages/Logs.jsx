import React, { useState } from "react";
import Header from "../Component/Header";
import BottomHeader from "../Component/BottomHeader";

export default function Logs() {
  const initialData = [
    {
      srNo: 1,
      pqrNo: "PQR2024-001",
      productName: "Acetaminophen 500mg",
      genericName: "Paracetamol",
      productCode: "P12345",
      reviewStartDate: "2024-01-10",
      reviewEndDate: "2024-01-20",
      dosageForm: "Tablet",
      mfgLicNo: "MFG001234",
      status: "Completed",
      completedOn: "2024-02-01",
      completedBy: "John Doe",
      capaInitiated: "Yes",
      capaDescription: "Minor formulation adjustment",
      capaStatus: "Closed",
      deviationInitiated: "No",
      deviationDescription: "N/A",
      deviationStatus: "N/A",
      changeControlInitiated: "Yes",
      changeControlDescription: "Change in supplier",
      changeControlStatus: "Open",
      oosInitiated: "No",
      oosDescription: "N/A",
      oosStatus: "N/A",
      recallInitiated: "No",
      recallDescription: "N/A",
      recallStatus: "N/A",
      variationFilingInitiated: "No",
      variationFilingDescription: "N/A",
      variationFilingStatus: "N/A",
      registrationNotification: "Yes",
      notifiedRegAuthority: "MHRA",
    },
    {
      srNo: 2,
      pqrNo: "PQR2024-002",
      productName: "Ibuprofen 200mg",
      genericName: "Ibuprofen",
      productCode: "P23456",
      reviewStartDate: "2024-02-05",
      reviewEndDate: "2024-02-15",
      dosageForm: "Capsule",
      mfgLicNo: "MFG002345",
      status: "Completed",
      completedOn: "2024-02-25",
      completedBy: "Jane Smith",
      capaInitiated: "No",
      capaDescription: "N/A",
      capaStatus: "N/A",
      deviationInitiated: "Yes",
      deviationDescription: "Batch uniformity issues",
      deviationStatus: "Closed",
      changeControlInitiated: "No",
      changeControlDescription: "N/A",
      changeControlStatus: "N/A",
      oosInitiated: "No",
      oosDescription: "N/A",
      oosStatus: "N/A",
      recallInitiated: "No",
      recallDescription: "N/A",
      recallStatus: "N/A",
      variationFilingInitiated: "Yes",
      variationFilingDescription: "New packaging",
      variationFilingStatus: "Closed",
      registrationNotification: "Yes",
      notifiedRegAuthority: "USFDA",
    },
    {
      srNo: 3,
      pqrNo: "PQR2024-003",
      productName: "Amoxicillin 500mg",
      genericName: "Amoxicillin",
      productCode: "P34567",
      reviewStartDate: "2024-03-01",
      reviewEndDate: "2024-03-10",
      dosageForm: "Capsule",
      mfgLicNo: "MFG003456",
      status: "Completed",
      completedOn: "2024-03-20",
      completedBy: "Michael Clark",
      capaInitiated: "No",
      capaDescription: "N/A",
      capaStatus: "N/A",
      deviationInitiated: "No",
      deviationDescription: "N/A",
      deviationStatus: "N/A",
      changeControlInitiated: "Yes",
      changeControlDescription: "Revised SOP for manufacturing",
      changeControlStatus: "Open",
      oosInitiated: "No",
      oosDescription: "N/A",
      oosStatus: "N/A",
      recallInitiated: "No",
      recallDescription: "N/A",
      recallStatus: "N/A",
      variationFilingInitiated: "No",
      variationFilingDescription: "N/A",
      variationFilingStatus: "N/A",
      registrationNotification: "No",
      notifiedRegAuthority: "WHO",
    },
    {
      srNo: 4,
      pqrNo: "PQR2024-004",
      productName: "Metformin 850mg",
      genericName: "Metformin",
      productCode: "P45678",
      reviewStartDate: "2024-03-12",
      reviewEndDate: "2024-03-22",
      dosageForm: "Tablet",
      mfgLicNo: "MFG004567",
      status: "In Progress",
      completedOn: "2024-04-01",
      completedBy: "Sarah Taylor",
      capaInitiated: "Yes",
      capaDescription: "Review of granulation method",
      capaStatus: "In Progress",
      deviationInitiated: "No",
      deviationDescription: "N/A",
      deviationStatus: "N/A",
      changeControlInitiated: "No",
      changeControlDescription: "N/A",
      changeControlStatus: "N/A",
      oosInitiated: "No",
      oosDescription: "N/A",
      oosStatus: "N/A",
      recallInitiated: "No",
      recallDescription: "N/A",
      recallStatus: "N/A",
      variationFilingInitiated: "Yes",
      variationFilingDescription: "New excipient",
      variationFilingStatus: "In Progress",
      registrationNotification: "Yes",
      notifiedRegAuthority: "MCC",
    },
    {
      srNo: 5,
      pqrNo: "PQR2024-005",
      productName: "Omeprazole 20mg",
      genericName: "Omeprazole",
      productCode: "P56789",
      reviewStartDate: "2024-04-01",
      reviewEndDate: "2024-04-15",
      dosageForm: "Capsule",
      mfgLicNo: "MFG005678",
      status: "Completed",
      completedOn: "2024-04-25",
      completedBy: "Samantha Brown",
      capaInitiated: "No",
      capaDescription: "N/A",
      capaStatus: "N/A",
      deviationInitiated: "Yes",
      deviationDescription: "Potency variation",
      deviationStatus: "Closed",
      changeControlInitiated: "No",
      changeControlDescription: "N/A",
      changeControlStatus: "N/A",
      oosInitiated: "Yes",
      oosDescription: "Out of specification for potency",
      oosStatus: "Closed",
      recallInitiated: "No",
      recallDescription: "N/A",
      recallStatus: "N/A",
      variationFilingInitiated: "No",
      variationFilingDescription: "N/A",
      variationFilingStatus: "N/A",
      registrationNotification: "No",
      notifiedRegAuthority: "ANVISA",
    },
    {
      srNo: 6,
      pqrNo: "PQR2024-006",
      productName: "Lisinopril 10mg",
      genericName: "Lisinopril",
      productCode: "P67890",
      reviewStartDate: "2024-05-01",
      reviewEndDate: "2024-05-10",
      dosageForm: "Tablet",
      mfgLicNo: "MFG006789",
      status: "Completed",
      completedOn: "2024-05-20",
      completedBy: "David Lee",
      capaInitiated: "Yes",
      capaDescription: "Process optimization",
      capaStatus: "Closed",
      deviationInitiated: "No",
      deviationDescription: "N/A",
      deviationStatus: "N/A",
      changeControlInitiated: "Yes",
      changeControlDescription: "Packaging update",
      changeControlStatus: "Open",
      oosInitiated: "No",
      oosDescription: "N/A",
      oosStatus: "N/A",
      recallInitiated: "No",
      recallDescription: "N/A",
      recallStatus: "N/A",
      variationFilingInitiated: "No",
      variationFilingDescription: "N/A",
      variationFilingStatus: "N/A",
      registrationNotification: "Yes",
      notifiedRegAuthority: "Health Canada",
    },
    {
      srNo: 7,
      pqrNo: "PQR2024-007",
      productName: "Simvastatin 40mg",
      genericName: "Simvastatin",
      productCode: "P78901",
      reviewStartDate: "2024-06-05",
      reviewEndDate: "2024-06-15",
      dosageForm: "Tablet",
      mfgLicNo: "MFG007890",
      status: "Completed",
      completedOn: "2024-06-30",
      completedBy: "Emily Davis",
      capaInitiated: "No",
      capaDescription: "N/A",
      capaStatus: "N/A",
      deviationInitiated: "Yes",
      deviationDescription: "Tablet weight variation",
      deviationStatus: "Closed",
      changeControlInitiated: "No",
      changeControlDescription: "N/A",
      changeControlStatus: "N/A",
      oosInitiated: "No",
      oosDescription: "N/A",
      oosStatus: "N/A",
      recallInitiated: "No",
      recallDescription: "N/A",
      recallStatus: "N/A",
      variationFilingInitiated: "Yes",
      variationFilingDescription: "Supplier change",
      variationFilingStatus: "Closed",
      registrationNotification: "Yes",
      notifiedRegAuthority: "CDSCO",
    },
    {
      srNo: 8,
      pqrNo: "PQR2024-008",
      productName: "Ciprofloxacin 500mg",
      genericName: "Ciprofloxacin",
      productCode: "P89012",
      reviewStartDate: "2024-07-01",
      reviewEndDate: "2024-07-12",
      dosageForm: "Tablet",
      mfgLicNo: "MFG008901",
      status: "In Progress",
      completedOn: "2024-07-20",
      completedBy: "Mark Wilson",
      capaInitiated: "No",
      capaDescription: "N/A",
      capaStatus: "N/A",
      deviationInitiated: "No",
      deviationDescription: "N/A",
      deviationStatus: "N/A",
      changeControlInitiated: "Yes",
      changeControlDescription: "Process modification",
      changeControlStatus: "In Progress",
      oosInitiated: "No",
      oosDescription: "N/A",
      oosStatus: "N/A",
      recallInitiated: "No",
      recallDescription: "N/A",
      recallStatus: "N/A",
      variationFilingInitiated: "Yes",
      variationFilingDescription: "Dosage change",
      variationFilingStatus: "Open",
      registrationNotification: "Yes",
      notifiedRegAuthority: "TGA",
    },
    {
      srNo: 9,
      pqrNo: "PQR2024-009",
      productName: "Amlodipine 5mg",
      genericName: "Amlodipine",
      productCode: "P90123",
      reviewStartDate: "2024-08-01",
      reviewEndDate: "2024-08-10",
      dosageForm: "Tablet",
      mfgLicNo: "MFG009012",
      status: "Completed",
      completedOn: "2024-08-20",
      completedBy: "Alice Johnson",
      capaInitiated: "No",
      capaDescription: "N/A",
      capaStatus: "N/A",
      deviationInitiated: "Yes",
      deviationDescription: "Coating defect",
      deviationStatus: "Closed",
      changeControlInitiated: "No",
      changeControlDescription: "N/A",
      changeControlStatus: "N/A",
      oosInitiated: "Yes",
      oosDescription: "Disintegration failure",
      oosStatus: "Closed",
      recallInitiated: "No",
      recallDescription: "N/A",
      recallStatus: "N/A",
      variationFilingInitiated: "No",
      variationFilingDescription: "N/A",
      variationFilingStatus: "N/A",
      registrationNotification: "Yes",
      notifiedRegAuthority: "MHRA",
    },
    {
      srNo: 10,
      pqrNo: "PQR2024-010",
      productName: "Losartan 50mg",
      genericName: "Losartan",
      productCode: "P01234",
      reviewStartDate: "2024-09-01",
      reviewEndDate: "2024-09-12",
      dosageForm: "Tablet",
      mfgLicNo: "MFG0012345",
      status: "In Progress",
      completedOn: "2024-09-25",
      completedBy: "Robert King",
      capaInitiated: "Yes",
      capaDescription: "Shelf-life extension",
      capaStatus: "In Progress",
      deviationInitiated: "No",
      deviationDescription: "N/A",
      deviationStatus: "N/A",
      changeControlInitiated: "Yes",
      changeControlDescription: "New packaging",
      changeControlStatus: "Open",
      oosInitiated: "No",
      oosDescription: "N/A",
      oosStatus: "N/A",
      recallInitiated: "No",
      recallDescription: "N/A",
      recallStatus: "N/A",
      variationFilingInitiated: "Yes",
      variationFilingDescription: "API change",
      variationFilingStatus: "Open",
      registrationNotification: "Yes",
      notifiedRegAuthority: "ANVISA",
    },
  ];

  const [data, setData] = useState(initialData);

  return (
    <>
      <Header />
      <BottomHeader />
      <div
        className="container mt-5 mb-10 w-full mx-12 max-h-[75vh] overflow-y-auto scrollbar-custom "
        style={{ width: "100%", maxWidth: "95%", overflowX: "scroll" }}
      >
        <table className="w-full">
          <thead className="bg-slate-500 text-white sticky top-0">
            <tr>
              <th className="px-4 py-2 border-r-2 w-1/12">Sr No.</th>
              <th className="px-4 py-2 border-r-2">PQR No.</th>
              <th className="px-4 py-2 border-r-2">Product Name</th>
              <th className="px-4 py-2 border-r-2">Generic Name</th>
              <th className="px-4 py-2 border-r-2">Product Code</th>
              <th className="px-4 py-2 border-r-2">Review Start Date</th>
              <th className="px-4 py-2 border-r-2">Review End Date</th>
              <th className="px-4 py-2 border-r-2">Dosage Form</th>
              <th className="px-4 py-2 border-r-2">MFG. LIC. No</th>
              <th className="px-4 py-2 border-r-2">Status</th>
              <th className="px-4 py-2 border-r-2">Completed On</th>
              <th className="px-4 py-2 border-r-2">Completed By</th>
              <th className="px-4 py-2 border-r-2">CAPA Initiated by APQR</th>
              <th className="px-4 py-2 border-r-2">CAPA Description</th>
              <th className="px-4 py-2 border-r-2">CAPA Status</th>
              <th className="px-4 py-2 border-r-2">Deviation Initiated by APQR</th>
              <th className="px-4 py-2 border-r-2">Deviation Description</th>
              <th className="px-4 py-2 border-r-2">Deviation Status</th>
              <th className="px-4 py-2 border-r-2">Change Control Initiated by APQR</th>
              <th className="px-4 py-2 border-r-2">Change Control Description</th>
              <th className="px-4 py-2 border-r-2">Change Control Status</th>
              <th className="px-4 py-2 border-r-2">OOS Initiated by APQR</th>
              <th className="px-4 py-2 border-r-2">OOS Description</th>
              <th className="px-4 py-2 border-r-2">OOS Status</th>
              <th className="px-4 py-2 border-r-2">Recall Initiated by APQR</th>
              <th className="px-4 py-2 border-r-2">Recall Description</th>
              <th className="px-4 py-2 border-r-2">Recall Status</th>
              <th className="px-4 py-2 border-r-2">Variation Filing Initiated by APQR</th>
              <th className="px-4 py-2 border-r-2">Variation Filing Description</th>
              <th className="px-4 py-2 border-r-2">Variation Filing Status</th>
              <th className="px-4 py-2 border-r-2">Registration Notification</th>
              <th className="px-4 py-2 border-r-2">Notified Registration Authority</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.srNo}>
                <td className="border px-4 py-2">{row.srNo}</td>
                <td className="border px-4 py-2">{row.pqrNo}</td>
                <td className="border px-4 py-2">{row.productName}</td>
                <td className="border px-4 py-2">{row.genericName}</td>
                <td className="border px-4 py-2">{row.productCode}</td>
                <td className="border px-4 py-2">{row.reviewStartDate}</td>
                <td className="border px-4 py-2">{row.reviewEndDate}</td>
                <td className="border px-4 py-2">{row.dosageForm}</td>
                <td className="border px-4 py-2">{row.mfgLicNo}</td>
                <td className="border px-4 py-2">{row.status}</td>
                <td className="border px-4 py-2">{row.completedOn}</td>
                <td className="border px-4 py-2">{row.completedBy}</td>
                <td className="border px-4 py-2">{row.capaInitiated}</td>
                <td className="border px-4 py-2">{row.capaDescription}</td>
                <td className="border px-4 py-2">{row.capaStatus}</td>
                <td className="border px-4 py-2">{row.deviationInitiated}</td>
                <td className="border px-4 py-2">{row.deviationDescription}</td>
                <td className="border px-4 py-2">{row.deviationStatus}</td>
                <td className="border px-4 py-2">{row.changeControlInitiated}</td>
                <td className="border px-4 py-2">{row.changeControlDescription}</td>
                <td className="border px-4 py-2">{row.changeControlStatus}</td>
                <td className="border px-4 py-2">{row.oosInitiated}</td>
                <td className="border px-4 py-2">{row.oosDescription}</td>
                <td className="border px-4 py-2">{row.oosStatus}</td>
                <td className="border px-4 py-2">{row.recallInitiated}</td>
                <td className="border px-4 py-2">{row.recallDescription}</td>
                <td className="border px-4 py-2">{row.recallStatus}</td>
                <td className="border px-4 py-2">{row.variationFilingInitiated}</td>
                <td className="border px-4 py-2">{row.variationFilingDescription}</td>
                <td className="border px-4 py-2">{row.variationFilingStatus}</td>
                <td className="border px-4 py-2">{row.registrationNotification}</td>
                <td className="border px-4 py-2">{row.notifiedRegAuthority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
