import { useEffect } from "react";

function nuevaSesion(key, value, vidaDeLaSesionMins = 10) {
  let expirationDate = new Date(new Date().getTime() + 60000 * vidaDeLaSesionMins);
  let newValue = {
    value: value,
    expirationDate: expirationDate.toISOString(),
  };
  window.sessionStorage.setItem(key, JSON.stringify(newValue));
}

function obtenerSesion(key) {
  let session = window.sessionStorage.getItem(key);
  if (session) {
    session = JSON.parse(session);
    if (session.expirationDate < new Date().toISOString()) {
      window.sessionStorage.removeItem(key);
      return null;
    }
    nuevaSesion(key, session.value); //Se renueva la sesion
    return session.value;
  }
  return null;
}

module.exports = {
  nuevaSesion,
  obtenerSesion,
};
