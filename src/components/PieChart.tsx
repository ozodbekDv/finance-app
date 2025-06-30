import { Pie, PieChart } from "recharts";

import type { ChartConfig } from "@/components/ui/chart";

import { ChartContainer } from "@/components/ui/chart";

export const description = "A pie chart with no separator";

const chartData = [
  { browser: "Entertainment", visitors: 50, fill: "#277C78" },
  { browser: "bills", visitors: 750, fill: "#82C9D7" },
  { browser: "diningOut", visitors: 75, fill: "#F2CDAC" },
  { browser: "personalCare", visitors: 100, fill: "#626070" },
];

const chartConfig = {
  visitors: {
    label: "Entertainment",
    color: "#277C78",
  },
  bills: {
    label: "Bills",
    color: "var(--chart-1)",
  },
  diningOut: {
    label: "Dining Out",
    color: "var(--chart-2)",
  },
  personalCare: {
    label: "Personal Care",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

function MyChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto max-w-[250px] w-full -rotate-90"
    >
      <PieChart>
        <Pie data={chartData} dataKey="visitors" nameKey="browser" stroke="0" />
      </PieChart>
    </ChartContainer>
  );
}

export default MyChart;
