<script setup>
import { ref, watchEffect } from 'vue';
import { usePostStore } from "../../stores/post";

const postStore = usePostStore()
postStore.getContentPost('book')

const postContent = ref('')

watchEffect(() => {
        if(postStore._posts !== null) {
            postContent.value = postStore._posts
        }
}, [postStore._posts])
</script>

<template>
  <h1>Posts</h1>
  <div>{{ posts }}</div>
  <!-- <div v-if="pageContent !== ''">
    <h3>{{ pageContent.title.rendered }}</h3>
    <div v-html="pageContent.content.rendered"></div>
  </div>
  <div v-else>
    <p>Page not found</p>
  </div> -->
</template> 

<style scoped>

</style>
