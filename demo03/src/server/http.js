import axios from 'axios'

const http = axios.create({
    baseURL:'',
    timeout: 30000
})

http.interceptors.response.use(res=>{
    if(res.status===200) {
        return Promise.resolve(res.data)
    }else {
        return Promise.reject(res)
    }
},error=>{
    return Promise.reject(error)
})

export default http