import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// HOW TO CALL FROM OUTSIDE
// AuthenticationService.register({
//   email: 'testing@gmail.com',
//   password : '123456'
// })
