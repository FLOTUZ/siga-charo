import Scaffold from "../components/layouts/Scaffold";
import { useEffect } from "react";
import { obtenerSesion } from "../utils/Utils";

function Dashboard() {
  useEffect(() => {
    let user = obtenerSesion("user");
    console.log(user);
  });

  return (
    <>
      <Scaffold></Scaffold>
    </>
  );
}

export default Dashboard;
