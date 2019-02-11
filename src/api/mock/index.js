import markets from './data/data.json'

const fetch = (mockData, time = 0) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData)
        }, time)
    })
}

export default {
    fetchMarkets () {
        return fetch(markets, 1000) // wait 1s before returning posts
    }
}
