const defaultUser = {
  name: '',
  email: '',
  level: 1
}

const user1 = {
  ...defaultUser,
  name: 'Matheus',
  email: 'suporte@b7web.com.br'
}

const adm1 = {
  ...defaultUser,
  name: 'admin Boladão',
  email: 'admin@admboladao.com.br',
  level: 2
}

console.log(adm1);