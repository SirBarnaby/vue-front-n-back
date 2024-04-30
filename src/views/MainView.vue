<script setup lang="ts">
import MainHeader from '../components/Main-Header.vue'
import MainFooter from '../components/Main-Footer.vue'
</script>

<template>
  <main className="main">
    <MainHeader />

    <div className="center">
      <img
        src="../assets/ecologist.png"
        alt="'Ecologist' patch."
        width="{178}"
        height="{178}"
        priority
      />
    </div>

    <MainFooter />
  </main>
</template>

<style>
@import url('../assets/base.css');
@import url('../assets/main.css');
</style>
