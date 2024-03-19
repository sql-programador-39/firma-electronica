const changeStatusName = (status) => {
  switch (status) {
    case 'Completed':
      return 'Completada'
    case 'Submit':
      return 'Radicada'
    case 'NotCompleted':
      return 'Rechazada'
    case 'Requested':
      return 'Solicitada'
    case 'Expired':
      return 'Vencida'
    case 'Confirmed':
      return 'Confirmada'
  }

}

export { changeStatusName };