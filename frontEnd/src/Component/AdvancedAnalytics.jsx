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

export default function AdvancedAnalytics() {
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
          highchartData={PantoprazolepHData}
        />
      </div>
    </>
  );
}
