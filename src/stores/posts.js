import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from "../api";

export const usePostStore = defineStore('posts', () => {

    const _posts = ref(null)

    const storePost = (postType) => {
        _posts.value = postType
    }

    const getPosts = async (postType) => {
        const response = await API.posts.getPosts(postType)
        // storePage(response[0])
        if(response) {
            storePost(response)
           } else {
            console.log("page not found!")
           }
    }

    return {
        _posts,
        getPosts,
        usePostStore
    }

})