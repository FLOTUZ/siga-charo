import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

function BarAgrupada() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: 1000, max: 1000 })),
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: 1000, max: 1000 })),
        backgroundColor: "rgb(75, 192, 192)",
        stack: "Stack 0",
      },
      {
        label: "Dataset 3",
        data: labels.map(() => faker.datatype.number({ min: 1000, max: 1000 })),
        backgroundColor: "rgb(53, 162, 235)",
        stack: "Stack 1",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default BarAgrupada;
