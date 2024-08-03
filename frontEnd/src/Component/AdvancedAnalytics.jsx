import React from "react";
import Header from "./Header";
import BottomHeader from "./BottomHeader";
import HighchartsChart from "./Chart/HighchartsChart";
import {
  PantoprazolepHData,
  PantoprazolepHPlotLines,
  PantoprazolepHZones,
  ParacetamolpHPlotLines,
  paracetamolAnnotations,
  paracetamolZones,
  paracetamolpHData,
  paracetamolpHZones,
  phOfParacetamolPlotLines,
  records,
  terbinafinepHData,
  terbinafinepHPlotLines,
  terbinafinepHZones,
} from "./Chart/ChartJsFunction";
import HistogramChart from "./Highcharts/Histogram";
import { useSelector } from "react-redux";

export default function AdvancedAnalytics() {
 

  const phOfParacetamol = {
    data: [
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8,
      2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85,
      3.45, 4.1, 2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85,
    ],
    lsl: 2,
    usl: 4,
    heading: "Observation value for pH value of Paracetamol",
    yAxisTitle: "pH",
    batchNumbers: [
      "Batch 1",
      "Batch 2",
      "Batch 3",
      "Batch 4",
      "Batch 5",
      "Batch 6",
      "Batch 7",
      "Batch 8",
      "Batch 9",
      "Batch 10",
      "Batch 11",
      "Batch 12",
      "Batch 13",
      "Batch 14",
      "Batch 15",
      "Batch 16",
      "Batch 17",
      "Batch 18",
      "Batch 19",
      "Batch 20",
      "Batch 21",
      "Batch 22",
      "Batch 23",
      "Batch 24",
      "Batch 25",
      "Batch 26",
      "Batch 27",
      "Batch 28",
      "Batch 29",
      "Batch 30",
      "Batch 31",
      "Batch 32",
      "Batch 33",
      "Batch 34",
      "Batch 35",
      "Batch 36",
      "Batch 37",
      "Batch 38",
      "Batch 39",
      "Batch 40",
      "Batch 41",
      "Batch 42",
      "Batch 43",
      "Batch 44",
      "Batch 45",
      "Batch 46",
      "Batch 47",
      "Batch 48",
      "Batch 49",
      "Batch 50",
    ],
  };

  const assayofParacetamol = {
    data: [90, 91, 92, 93, 94, 105, 106, 107, 108, 109, 110],
    lsl: 95,
    usl: 105,
    heading: "Observation value for Assay value of Paracetamol",
    yAxisTitle: "assay",
    batchNumbers: [1, 2, 3, 4],
    batchNumbers: [
      "Batch 1",
      "Batch 2",
      "Batch 3",
      "Batch 4",
      "Batch 5",
      "Batch 6",
      "Batch 7",
      "Batch 8",
      "Batch 9",
      "Batch 10",
      "Batch 11",
      "Batch 12",
    ],
  };

  return (
    <>
      <Header />
      <BottomHeader />
      <div>
        <HighchartsChart
          heading={"Paracetamol  Graph"}
          xHeading={"Batch No."}
          yHeading={"Observed Value"}
          yMax={170}
          yMin={-170}
          yTickInterval={20}
          plotLines={phOfParacetamolPlotLines}
          zones={paracetamolZones}
          annotations={paracetamolAnnotations}
          highchartData={records}
        />

        <HighchartsChart
          heading={"Paracetamol pH Graph"}
          xHeading={"Batch No."}
          yHeading={"Observed Value"}
          yMax={6}
          yMin={0}
          yTickInterval={0.4}
          plotLines={ParacetamolpHPlotLines}
          zones={paracetamolpHZones}
          annotations={paracetamolAnnotations}
          highchartData={paracetamolpHData}
        />

        <HighchartsChart
          heading={"Terbinafine pH Graph"}
          xHeading={"Batch No."}
          yHeading={"Observed Value"}
          yMax={8}
          yMin={2.8}
          yTickInterval={0.8}
          plotLines={terbinafinepHPlotLines}
          zones={terbinafinepHZones}
          annotations={paracetamolAnnotations}
          highchartData={terbinafinepHData}
        />

        <HighchartsChart
          heading={"Pantoprazole pH Graph"}
          xHeading={"Batch No."}
          yHeading={"Observed Value"}
          yMax={10}
          yMin={5.0}
          yTickInterval={0.5}
          plotLines={PantoprazolepHPlotLines}
          zones={PantoprazolepHZones}
          annotations={paracetamolAnnotations}
          highchartData={PantoprazolepHData}
        />

        <HighchartsChart
          heading={"Assay Of Paracetamol"}
          xHeading={"Batch No."}
          yHeading={"Observed Value"}
          yMax={80}
          yMin={5.0}
          yTickInterval={5}
          plotLines={PantoprazolepHPlotLines}
          zones={PantoprazolepHZones}
          annotations={paracetamolAnnotations}
          highchartData={PantoprazolepHData}
        />
        <HighchartsChart
          heading={"Assay Of Terbinafine "}
          xHeading={"Batch No."}
          yHeading={"Observed Value"}
          yMax={10}
          yMin={5.0}
          yTickInterval={0.5}
          plotLines={PantoprazolepHPlotLines}
          zones={PantoprazolepHZones}
          annotations={paracetamolAnnotations}
          highchartData={PantoprazolepHData}
        />
        <HighchartsChart
          heading={"Assay Of Pantoprazole"}
          xHeading={"Batch No."}
          yHeading={"Observed Value"}
          yMax={10}
          yMin={5.0}
          yTickInterval={0.5}
          plotLines={PantoprazolepHPlotLines}
          zones={PantoprazolepHZones}
          annotations={paracetamolAnnotations}
          highchartData={PantoprazolepHData}/>
        <HistogramChart
          data={phOfParacetamol.data}
          //   data={[
          //     [1, 2.5],
          //     [2, 3.1],
          //     [3, 2.8],
          //     [4, 3.5],
          //     [4, 4.5],
          //   ]} // [batchIndex, pHValue]
          lsl={phOfParacetamol.lsl}
          usl={phOfParacetamol.usl}
          text={phOfParacetamol.heading}
          yAxisTitle={phOfParacetamol.yAxisTitle}
          batchNumbers={phOfParacetamol.batchNumbers}
        />
        <HistogramChart
          data={assayofParacetamol.data}
          lsl={assayofParacetamol.lsl}
          usl={assayofParacetamol.usl}
          text={assayofParacetamol.heading}
          yAxisTitle={assayofParacetamol.yAxisTitle}
          batchNumbers={assayofParacetamol.batchNumbers}
        />
      </div>
    </>
  );
}
