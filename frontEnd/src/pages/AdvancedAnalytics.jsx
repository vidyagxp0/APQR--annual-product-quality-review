import React from "react";
import Header from "../Component/Header";
import BottomHeader from "../Component/BottomHeader";
import HighchartsChart from "../Component/Analytics/HighchartsLine";
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
} from "../Component/Analytics/ChartJsFunction";
import HighchartsHistogram from "../Component/Analytics/HighchartsHistogram";
import HighchartsPareto from "../Component/Analytics/HighchartsPareto";
import HighchartsScatterPlot from "../Component/Analytics/HighchartsScatterPlot";
import HighchartsHistogram2 from "../Component/Analytics/HighchartsHistogram2";
import HighChartColumn from "../Component/Analytics/HighChartColumn";
import HighchartsChartForDemo from "../Component/Analytics/ForDemo";
import HighChartDonut from "../Component/Analytics/HighChartDonut";
import HighChartArea from "../Component/Analytics/HighChartArea";

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

  const phOfParacetamolScatter = {
    data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 5) + 2),
    data: [
      2.9, 1.75, 3.45, 2.85, 4.05, 3.2, 2.1, 4.1, 1.9, 2.8, 3.3, 4.0, 2.25, 3.5, 2.3, 4.1, 1.65,
      3.35, 2.95, 3.4, 2.0, 4.05, 1.8, 2.7, 4.0, 3.45, 2.85, 1.85, 4.1, 2.9, 3.5, 1.7, 3.25, 4.1,
      2.2, 3.3, 2.95, 1.75, 3.5, 4.1, 1.9, 2.8, 4.05, 2.15, 3.4, 1.75, 4.0, 2.8, 3.45, 4.05, 2.0,
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
  const phOfParacetamolPareto = {
    data: [
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8,
      2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85,
      3.45, 4.1, 2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 2.85,
      2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
      2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
      2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
    ],
    lsl: 2,
    usl: 4,
    heading: "Observation value for pH value of Paracetamol",
    yAxisTitle: "Number of Batches",
  };
  const phOfParacetamolHistogram = {
    data: [
      1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8,
      2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85,
      3.45, 4.1, 2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4,
      3.9, 3.4,
    ],
    lsl: 2,
    usl: 4,
    heading: "Observation value for pH value of Paracetamol",
    yAxisTitle: "Number of Batches",
    xAxisTitle: "pH Range",
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

  const chartConfig = {
    data: [1.5, 2.1, 3.4, 2.8, 4.0, 3.6, 2.9, 1.7, 2.3, 4.5, 1, 1, 2.5, 2.5, 4.5, 1, 1, 2.5, 2.5], // Example data
    bins: {
      "1-2": 0,
      "2-3": 0,
      "3-4": 0,
      "4-5": 0,
    },
    plotLines: [
      { position: 0.5, label: "LSL", align: "right" },
      { position: 2.5, label: "USL", align: "left" },
    ],
  };

  // console.log(chartConfig.bins);

  return (
    <>
      <Header />
      <BottomHeader />
      <div>
        <div className="h-[600px] p-8">
        <HighchartsChartForDemo
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
         
        </div>
      
        {/* <HighchartsChart
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
          highchartData={PantoprazolepHData}/> */}
        <div className="flex justify-evenly h-[500px] shadow-lg ">
          <div className="w-5/12">
          <HighchartsHistogram2
            data={chartConfig.data}
            heading="Histogram Example"
            xAxisTitle="Value Ranges"
            yAxisTitle="Frequency"
            bins={chartConfig.bins}
            plotLines={chartConfig.plotLines}
          />
       
  
          </div>
          <div className="w-5/12">
            <HighchartsPareto
              data={phOfParacetamolPareto.data}
              lsl={phOfParacetamolPareto.lsl}
              usl={phOfParacetamolPareto.usl}
              heading={phOfParacetamolPareto.heading}
              yAxisTitle={phOfParacetamolPareto.yAxisTitle}
              xAxisTitle={""}
            />
          </div>
        </div>
        
        <div className=" p-8 shadow-lg">
          <HighchartsScatterPlot
            data={phOfParacetamolScatter.data}
            lsl={phOfParacetamolScatter.lsl}
            usl={phOfParacetamolScatter.usl}
            heading={phOfParacetamolScatter.heading}
            yAxisTitle={phOfParacetamolScatter.yAxisTitle}
            batchNumbers={phOfParacetamolScatter.batchNumbers}
          />
        </div>
        <div className="flex justify-evenly h-[550px] shadow-lg mt-8 ">
        <div>
          <HighChartDonut data={PantoprazolepHData}/>
        </div>
        <div>
          <HighChartArea data={PantoprazolepHData}/>
        </div>
        </div>
        <div className="p-8 shadow-lg ">
        <HighChartColumn data={PantoprazolepHData}/>
        </div>
      </div>
    </>
  );
}
