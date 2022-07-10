import axios from "axios";

const service = axios.create({
    timeout: 5000
})
service.interceptors.request.use(
    function (config){
        if (config.headers.token) {
            config.headers.authorization = config.headers.token
        }
        if (config.method === 'post' || config.method === 'put') {
            config.headers.contentType = 'application/json'
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
service.interceptors.response.use(function (response: any) {
        if (response.data.success === true) {
            // console.log(response)
            return response
        }
    },
    error => {
        return Promise.reject(error)
    }
)
export const Method:any = {
    GET: 'get',
    POST: "post",
    PUT: 'put',
    DELETE: 'delete'
}
export default service
