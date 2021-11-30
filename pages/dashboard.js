import Scaffold from "../components/layout/Scaffold";
import { useEffect } from "react";
import { obtenerSesion } from "../utils/Utils";

function Dashboard() {
  useEffect(() => {
    let user = obtenerSesion("user");
    console.log(user);
  });

  let rutas = [
    {
      url: "/dashboard",
      nombre: "Dashboard",
      isCurrentPage: true,
    },
  ];

  return (
    <>
      <Scaffold titulo="hola" descripcion="mundo" rutas={rutas}>
        <p> PATATA </p>
      </Scaffold>
    </>
  );
}

export default Dashboard;
