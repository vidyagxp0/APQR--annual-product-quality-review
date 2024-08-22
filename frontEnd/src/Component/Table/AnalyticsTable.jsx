import React from 'react'

const AnalyticsTable = () => {
  return (
    <>
      <table>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <b>Cp B/W</b>
                      </td>
                      <td>
                        <b>0.67</b>
                      </td>
                      <td>Decimal Points</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Cpk B/W</b>
                      </td>
                      <td>
                        <b>0.60</b>
                      </td>
                      <td>Unit Of Measure</td>
                      <td>0.001</td>
                    </tr>
                    <tr>
                      <td>CpU B/W</td>
                      <td>0.60</td>
                      <td>Number Of Entries</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>Cpl B/W</td>
                      <td>0.75</td>
                      <td>
                        <b>Average</b>
                      </td>
                      <td>
                        <b>2.89</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cpm</td>
                      <td>0.72</td>
                      <td>
                        <b>Stdev</b>
                      </td>
                      <td>
                        <b>0.45</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Cr</td>
                      <td>1.48</td>
                      <td>
                        <b>Median</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>ZTarget/AZ</td>
                      <td>0.25</td>
                      <td>
                        <b>Mode</b>
                      </td>
                      <td>
                        <b>3.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Pp</b>
                      </td>
                      <td>0.74</td>
                      <td>Minimum Value</td>
                      <td>2.00</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Ppk</b>
                      </td>
                      <td>0.66</td>
                      <td>Maximum Value</td>
                      <td>
                        <b>2.00</b>
                      </td>
                    </tr>
                    <tr>
                      <td>PpU</td>
                      <td>0.83</td>
                      <td>Range</td>
                      <td>1.50</td>
                    </tr>
                    <tr>
                      <td>Ppl</td>
                      <td>0.66</td>
                      <td>
                        <b>LSL</b>
                      </td>
                      <td>
                        <b>90</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Skewness</td>
                      <td>-1.19</td>
                      <td>
                        <b>USL</b>
                      </td>
                      <td>
                        <b>105</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Stdev</td>
                      <td>0.45</td>
                      <td>Number Of Bars</td>
                      <td>3.00</td>
                    </tr>
                    <tr>
                      <td>Min</td>
                      <td>2.00</td>
                      <td>Number Of Classes</td>
                      <td>4.00</td>
                    </tr>
                    <tr>
                      <td>Max</td>
                      <td>3.50</td>
                      <td>Class Width</td>
                      <td>0.35</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>1.50</td>
                      <td>Beginning Point</td>
                      <td>1.65</td>
                    </tr>
                    <tr>
                      <td>Z Bench</td>
                      <td>1.79</td>
                      <td>Stdev Est</td>
                      <td>0.46</td>
                    </tr>
                    <tr>
                      <td>% Defects</td>
                      <td>0.0%</td>
                      <td>d2/c4</td>
                      <td>0.92</td>
                    </tr>
                    <tr>
                      <td>PPM</td>
                      <td>0.00</td>
                      <td>Target</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Exp PPM ST</td>
                      <td>36586.97</td>
                      <td>Sigma</td>
                      <td>3.29</td>
                    </tr>
                    <tr>
                      <td>Exp PPM LT</td>
                      <td>30738.66</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
    </>
  )
}

export default AnalyticsTable
