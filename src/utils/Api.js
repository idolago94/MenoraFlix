import Rest from '../utils/Rest'

class Api {
    constructor() {
    }
    // request structure : (auth, path, method, body, params, file)
    Register(data) {
        return Rest.send('Register', 'POST', data)
    }
    Login(data) {
        return Rest.send('Login', 'POST', data)
    }
    GetMovies(params) {
        return Rest.send('GetMovies', 'Get', null, params)
    }
}
const api = new Api()
export default api