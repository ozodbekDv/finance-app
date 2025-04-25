import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function PieChart() {
  const [state, setState] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Brownie", "Pie", "Macaron", "Tiramisu", "Baklava"],
      legend: {
        position: "right",
        fontSize: "16px",
        fontWeight: 600,
        labels: {
          colors: [""],
        },
        markers: {
          width: 12,
          height: 12,
          strokeColor: "#000",
          strokeWidth: 2,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width={380}
      />
    </div>
  );
}

export default PieChart;
