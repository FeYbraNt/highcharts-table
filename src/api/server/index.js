import axios from 'axios'

export default {
    fetchMarkets () {
        return axios
            .get('http://localhost:3000/markets')
            .then(response => response.data)
    }
}
