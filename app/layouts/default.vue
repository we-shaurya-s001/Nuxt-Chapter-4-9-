<template>
  <div>
    <header class="header">
      <div class="container">
          <NuxtLink class="homeicon" to="/">Home</NuxtLink>

        <nav>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.header {
  background-color: #111827;
  padding: 16px 0;
  color: white;
}

.container {
  width: 90%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin: 0;
  font-size: 24px;
}   

.homeicon{
      color: #26ed3dde;
 font-size: 24px
}

nav a {
  margin-left: 20px;
  text-decoration: none;
  color: white;
  font-weight: 500;
}

nav a.router-link-active {
  border-bottom: 2px solid #3b82f6;
}
</style>
