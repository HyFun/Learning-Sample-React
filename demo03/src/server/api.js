import http from './http'
export default {
    getProblem(page) {
        return http.get(`/_api/api/rtimu/${page}`)
    }
}