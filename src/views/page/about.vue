<script setup>
import { ref, watchEffect } from 'vue';
import { usePageStore } from "../../stores/page";

const pageStore = usePageStore()
pageStore.getContentPage('about')

const pageContent = ref('')

watchEffect(() => {
        if(pageStore._page !== null) {
            pageContent.value = pageStore._page
        }
}, [pageStore._page])
</script>

<template>
  <h1>About Page</h1>
  <pre>{{ pageContent }}</pre>
</template> 

<style scoped>

</style>
