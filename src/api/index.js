import ApiConstants from './ApiConstants';
import axios from 'axios';

export async function fetchApi(endPoint) {
    return await axios({
        method: 'GET',
        url: ApiConstants.BASE_URL + endPoint,
        timeout: 30000,
        headers: {
            'X-CMC_PRO_API_KEY': '44b5c6d4-a424-4cd6-899d-d5ffd84bc5c3'
        },
        qs: {
            'start': '1',
            'limit': '10',
            'convert': 'USD'
        },
    })
        .then(function (response) {
            return response.data;
        }).catch(function (error) {
            console.log(error)
        })
}