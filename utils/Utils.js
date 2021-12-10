function nuevaSesion(key, value, vidaDeLaSesionMins = 10) {
  let expirationDate = new Date(
    new Date().getTime() + 60000 * vidaDeLaSesionMins
  );
  let newValue = {
    value: value,
    expirationDate: expirationDate.toISOString(),
  };
  window.sessionStorage.setItem(key, JSON.stringify(newValue));
}

function sesion() {
  let session = window.sessionStorage.getItem("user");
  if (session) {
    session = JSON.parse(session);
    if (session.expirationDate < new Date().toISOString()) {
      window.sessionStorage.removeItem("user");
      return null;
    }
    nuevaSesion("user", session.value); //Se renueva la sesion
    return session.value;
  }
  return null;
}

function imprimir(html) {
  let mywindow = window.open("", "my div", "height=500,width=500");
  mywindow.document.write("<html><head><title>Imprimir</title>");
  mywindow.document.write("</head><body >");
  mywindow.document.write(`<div class="tiket">${html}</div>`);
  mywindow.document.write("</body></html>");

  //El delay es para que cargue el css
  setTimeout(() => {
    mywindow.focus();
    mywindow.print();
    mywindow.close();
  }, 1000);
}
module.exports = {
  nuevaSesion,
  sesion,
  imprimir
};
