function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript empiezan desde 0
  const year = date.getFullYear();

  //Si en algun momento implementan el de la fecha con hora desde el servicio, descomentar las siguientes lineas

  /* const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0'); */

  /* return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`; */
  return `${day}/${month}/${year}`;
}

export { formatDate };