import axios from "axios";

export const API = {
    'page': {
        'getContent': async (pageName) => {
            const { data } = await axios.get(`http://vuewordpress.local/wp-json/wp/v2/pages?slug=${pageName}`)
            return data
        }
    }
}