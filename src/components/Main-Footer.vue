<script setup></script>

<!-- Generic footer component. Displayed on the index page of the webapp.
Does not display on the dashboard of the logged in client.
Login and register. -->
<template>
  <div className="grid">
    <RouterLink to="/login" class="card" rel="noopener noreferrer">
      <h2>Login <span>-&gt;</span></h2>
      <p>Insert your credentials, and log in to the Käver backend!</p>
    </RouterLink>

    <RouterLink to="/register" class="card" rel="noopener noreferrer">
      <h2>Register <span>-&gt;</span></h2>
      <p>Register for an account in the Käver backend.</p>
    </RouterLink>
  </div>
</template>
