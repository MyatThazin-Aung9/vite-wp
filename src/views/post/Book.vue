<script setup>
import { ref, watchEffect } from 'vue';
import { usePostStore } from "../../stores/posts";

const postStore = usePostStore()
postStore.getPosts('books')

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
    <div>{{ new Date(post.date).toLocaleDateString("ja-JP")}}</div>
    <figure><img v-if="post._links['wp:featuredmedia']" :src="post.group.group_image" alt=""></figure>
    <p>{{ post.custom_fields.name }}</p>
    <p>{{post.custom_fields.description}}</p>
    <div><a :href="'/books/'+post.id">More</a></div>
    <pre>{{ posts }}</pre>
  </div>
</template> 

<style scoped lang="scss">
figure{
  img{
    width: 50%;
  }
}
</style>
