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
  <h1>Posts</h1>
  <h2>{{ posts }}</h2>
  <div v-for="post in posts">
    <h2>{{ post.title.rendered }}</h2>
  </div>
</template> 

<style scoped>

</style>
