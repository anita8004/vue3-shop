<script setup>
</script>

<template>
  <header>
    <div class="d-flex justify-content-between align-items-center container h-100">
      <h1>Logo</h1>
      <nav>
        <router-link class="me-2" to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
      </nav>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <div class="container h-100 d-flex align-items-center">
      <p>footer</p>
    </div>
  </footer>
</template>

<style scoped>
</style>
