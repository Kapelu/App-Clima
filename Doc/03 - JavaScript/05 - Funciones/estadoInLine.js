function conection(status) {
    if (status === 1)return 'Online'
    if (status === 2){return 'Away'} return 'Offline'
  }
  console.log('El estado del usuario es : '+conection(1))
  