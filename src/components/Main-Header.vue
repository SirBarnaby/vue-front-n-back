<script setup></script>

<!-- Header component.
Displayed on index page and on dashboard pages.
Provide current filename, show vercel logo. -->
<template>
  <div className="description">
    <p>
      Käver backend integration. Filename:&nbsp;
      <code className="code">{{ $route.fullPath }}</code>
    </p>
    <div>
      <a href="https://router.vuejs.org/guide/" target="_blank" rel="noopener noreferrer">
        <img
          src="../assets/logo.svg"
          alt="VUE logo"
          class="vercelLogo"
          width="100"
          height="24"
          priority
        />
      </a>
    </div>
  </div>
</template>
