import axios from "axios";

export const API = {
    'page': {
        'getContent': async (pageName) => {
            const { data } = await axios.get(`http://vuewordpress.local/wp-json/wp/v2/pages?slug=${pageName}`)
            console.log(data);
            return data
        }
    },
    'posts': {
        'getPosts': async (postType) => {
            const { data } = await axios.get(`http://vuewordpress.local/wp-json/wp/v2/${postType}`)
            console.log(data);
            return data
        }
    }
}