<script setup>
import { ref, watchEffect } from 'vue';
import { usePostStore } from "../../stores/posts";

const postStore = usePostStore()
postStore.getPosts('news')

const posts = ref('')

watchEffect(() => {
        if(postStore._posts !== null) {
            posts.value = postStore._posts
        }
}, [postStore._posts])
</script>

<template>
  <div v-for="post in posts">
    <h2>{{ post.title.rendered }}</h2>
    <p v-html="post.content.rendered"></p>
  </div>
</template> 

<style scoped>

</style>
