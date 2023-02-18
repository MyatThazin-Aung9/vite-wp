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

  //   export default {
  //   data() {
  //     return {
  //       name: '',
  //       email: '',
  //       message: '',
  //       formSubmitted: false
  //     };
  //   },
  //   methods: {
  //     submitForm() {
  //       // Here, you can send the form data to your server using Axios or another library.
  //       // For this example, we'll just show a success message.
  //       this.formSubmitted = true;
  //     }
  //   }
  // };
</script>

<template>
  <h1>Contact Form</h1>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    <p v-if="formSubmitted">Thanks for contacting us!</p>
  </div>
</template> 

<style scoped lang="scss">

  .contact-form {
    max-width: 900px;
    margin: 0 auto;
    .form-group {
      margin-bottom: 30px;
      label {
        display: block;
        margin-bottom: 7px;
      }
      input,
      textarea {
        display: block;
        width: 100%;
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 18px;
        margin-top: 5px;
      }
    }
    button {
      background-color: #008CBA;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      &:hover{
        background-color: #00677F;
      }
    }
  }
</style>
