<template>
  <div class="home">
    <Navbar />
    <Search />
    <CountryCard />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Search from '../components/Search.vue'
import CountryCard from'../components/CountryCard'

export default {
  name: 'Home',
  components: {
    Navbar,
    Search,
    CountryCard
  }
}
</script>

<style>
:root {
  --bg: hsl(207, 26%, 17%);
  --fontColor: hsl(0, 0%, 100%);
  --fontColor2: hsl(0, 0%, 52%);
  --elementBg: hsl(209, 23%, 22%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--bg);
  color: var(--fontColor);
}
</style>