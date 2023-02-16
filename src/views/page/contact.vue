<script setup>
import { ref, watchEffect } from 'vue';
import { usePageStore } from "../../stores/page";

    const pageStore = usePageStore()
    pageStore.getContentPage('contact')

    const pageContent = ref('')

    watchEffect(() => {
            if(pageStore._page !== null) {
                pageContent.value = pageStore._page
            }
    }, [pageStore._page])

    // export default {
    //   mounted() {
    //     window.addEventListener('load', () => {
    //       if (typeof window.wpcf7 !== 'undefined') {
    //         const contactForm = this.$refs.contactForm
    //         contactForm.innerHTML = '[contact-form-7 id="29" title="Contact form 1"]'
    //         window.wpcf7.initForm(contactForm)
    //       },
    //     }),
    //   },
    // };


    // export default {
    //   data() {
    //     return {
    //       formData: {
    //         name: '',
    //         email: ''
    //       }
    //     }
    //   },
    //   methods: {
    //     submitForm() {
    //       const form = document.querySelector('form')
    //       window.addEventListener('load', () => {
    //         if (typeof window.wpcf7 !== 'undefined') {
    //           window.wpcf7.initForm(form)
    //           window.wpcf7.addEventListener('wpcf7mailsent', () => {
    //             fetch('/api/data', {
    //               method: 'POST',
    //               headers: { 'Content-Type': 'application/json' },
    //               body: JSON.stringify(this.formData)
    //             })
    //               .then(response => response.json())
    //               .then(data => console.log(data))
    //               .catch(error => console.error(error))
    //           })
    //         }
    //       })
    //     }
    //   }
    // }
</script>

<template>
  <h1>Contact Form</h1>
  <!-- <div>
    <div ref="contactForm"></div>
  </div> -->

    <!-- <div>
        <form @submit.prevent="submitForm">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name">

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email">

          <button type="submit">Submit</button>
        </form>
    </div> -->
</template> 

<style scoped lang="scss">

</style>
