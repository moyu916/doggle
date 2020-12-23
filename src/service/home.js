import axios from '../utils/axios'

export function getHomeInfo() {
    return axios.get('/index-infos')
}