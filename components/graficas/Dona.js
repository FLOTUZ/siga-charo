import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Consultar } from "../../services/API";

function Dona() {
  const [programas, setProgramas] = useState([]);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Apoyos solicitados",
      },
    },
  };

  const data = {
    labels: ["Cemento", "Lavadero", "Tinaco", "Despensa"],
    datasets: [
      {
        label: "Apoyos solicitados",
        data: [318, 50, 100, 10],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 100, 90)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return <Doughnut options={options} data={data} />;
}

export default Dona;
