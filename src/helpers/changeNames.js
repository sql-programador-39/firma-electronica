const changeStatusName = (status) => {
  switch (status) {
    case 'Completed':
      return 'Completada'
    case 'Submit':
      return 'Radicada'
    case 'NotCompleted':
      return 'No Completada'
    case 'Requested':
      return 'Solicitada'
    case 'Expired':
      return 'Vencida'
    case 'Confirmed':
      return 'Confirmada'
  }
}

const changeChannelName = (channel) => {
  switch (channel) {
    case 'AppAsociados':
      return 'App Asociados'
    case 'Integrador':
      return 'Integrador'
    case 'SitioTransaccional':
      return 'Sitio Transaccional'
    case 'SucursalMovil':
      return 'Sucursal Móvil'
  }
}

export { changeStatusName, changeChannelName };