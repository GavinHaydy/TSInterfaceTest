import request, {Method} from "../utils/request";

const default_ip = 'http://localhost:10086'

export const login = (data = {}, headers = {}) => {
    return request({
        url:  default_ip + '/api/user/login',
        method: Method.POST,
        data,
        headers
    })
}