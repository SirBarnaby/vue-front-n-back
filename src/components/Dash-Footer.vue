<script setup>
import router from '@/router'
import { deleteCookie } from '@/programs/Cookieficator'

function logOut() {
  deleteCookie('loginInfo')
  router.push('/')
}
</script>

<!-- Generic footer component. Displayed on the index page of the webapp.
Does not display on the dashboard of the logged in client.
Login and register. -->
<template>
  <div className="grid">
    <RouterLink to="/categories" class="card">
      <h2>CATEGORIES <span>-&gt;</span></h2>
      <p>Add sample categories to KÄVER BACKEND.</p>
    </RouterLink>

    <RouterLink to="/priorities" class="card">
      <h2>PRIORITIES <span>-&gt;</span></h2>
      <p>Start adding priorities to your KÄVER BACKEND.</p>
    </RouterLink>

    <RouterLink to="/tasks" class="card">
      <h2>TASKS <span>-&gt;</span></h2>
      <p>KÄVER BACKEND lets you add tasks to an API. Click here to start.</p>
    </RouterLink>

    <RouterLink to="" @click="logOut" class="cardRed">
      <h2>LOGOUT <span>-&gt;</span></h2>
      <p>GTFO</p>
    </RouterLink>
  </div>
</template>
