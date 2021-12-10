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
import { Consultar, Crear } from "../../services/API";
import { useEffect, useState } from "react";

function BarAgrupada() {
  const [comunidades, setComunidades] = useState([]);
  const [beneficiariosPorComunidad, setBeneficiariosPorComunidad] = useState(
    []
  );
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
        text: "Beneficiarios registrados por comunidad",
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

  useEffect(() => {
    let lista = [];
    beneficiariosPorComunidad.map((bc) => {
      lista.push(bc.nombre);
    });
    setComunidades(lista);
  }, [beneficiariosPorComunidad]);

  let datasets = comunidades.map((c) => {
    return {
      label: c,
      data: beneficiariosPorComunidad.map((b) => b.nBeneficiarios),
      backgroundColor: "rgb(255, 99, 132)",
    };
  });

  const data = {
    labels: comunidades,
    datasets: [
      {
        label: "",
        data: beneficiariosPorComunidad.map((bc) => bc.nBeneficiarios),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
        ],
      },
    ],
  };

  useEffect(() => {
    const getComunidades = async () => {
      let respuesta = await Consultar("/comunidades", {
        fields: {
          idComunidad: true,
          nombre: true,
        },
        include: [
          {
            relation: "beneficiarios",
            scope: {
              fields: { idBeneficiario: false },
            },
          },
        ],
      });

      let lista = [];
      respuesta.data.map((com) => {
        if (com.beneficiarios !== undefined) {
          lista.push({
            nombre: com.nombre,
            nBeneficiarios: com.beneficiarios.length,
          });
        } else {
          lista.push({
            nombre: com.nombre,
            nBeneficiarios: 0,
          });
        }
      });
      setBeneficiariosPorComunidad(lista);
    };

    getComunidades();
  }, []);
  return <Bar options={options} data={data} />;
}

export default BarAgrupada;
