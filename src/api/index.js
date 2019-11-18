import Axios from 'axios'
Axios.defaults.baseURL='http://172.16.15.193:8069'

export function getUser(code){
    return Axios.get(`/dingtalk/auth_ms?authCode=${code}`).then(data=>data.data)
}
export function getToken(){
    return Axios.get('/szpdc/get_token/api/v1?login=123').then(data=>data.data)
}
export function getClass(post){
    return Axios.post('/szpdc/get_class/api/v1',post).then(data=>data.data.result)
}
export function getStudent(post){
    return Axios.post('/szpdc/get_class_student/api/v1',post).then(data=>data.data.result)
}
export function getGoods(post){
    return Axios.post('/szpdc/get_prize_data/api/v1',post).then(data=>data.data.result)
}
export function getGoodsInfo(post){
    return Axios.post('/szpdc/get_prize_info/api/v1',post).then(data=>data.data.result)
}




