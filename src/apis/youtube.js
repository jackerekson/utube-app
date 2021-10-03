import axios from 'axios'

const KEY = 'AIzaSyA4ZuDwBtoYtyF9RCBrzg8mpRyIrlyTX4o'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: "snippet",
        type: "video",
        maxResults: 20,
        key: KEY
    }
})