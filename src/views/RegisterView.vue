<script setup lang="ts">
import { ref } from 'vue'
import Authenticator from '@/programs/Authenticator'
import setCookie from '@/programs/Cookieficator'
import router from '@/router'

const email = ref('')
const password = ref('')
const firstName = ref('')
const surName = ref('')
const errorMessages = ref('')

function postData() {
  const data = {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: surName.value
  }

  Authenticator.attemptRegister(data).then((response) => {
    if (response.messages) {
      errorMessages.value = response.messages
    } else {
      // On successful register, log in with created account immediately.
      setCookie('loginInfo', {
        firstName: response.firstName,
        lastName: response.lastName,
        refreshToken: response.refreshToken,
        token: response.token
      })
      router.push('/categories')
    }
  })
}
</script>

<template>
  <main class="main">
    <div>
      <h1>Register to the KÄVER BACKEND!</h1>

      <form @submit.prevent="postData">
        <input v-model="email" required placeholder="Enter your email:" />
        <input v-model="password" type="password" required placeholder="Enter your password:" />
        <input v-model="firstName" required placeholder="Enter your first name:" />
        <input v-model="surName" required placeholder="Enter your surname:" />
        <input type="submit" />
      </form>

      <div v-if="errorMessages" class="errorMessage">
        <p>{{ errorMessages }}</p>
      </div>
    </div>
  </main>
</template>
