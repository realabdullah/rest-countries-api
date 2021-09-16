<template>
  <div class="home" :class="darkMode ? 'dark-mode' : 'light-mode'">
    <Navbar :toggleTheme="toggleTheme" />
    <CountryCard />
  </div>
</template>

<script>
import { ref } from 'vue'
import Navbar from '../components/Navbar.vue'
import CountryCard from'../components/CountryCard'

export default {
  name: 'Home',
  components: {
    Navbar,
    CountryCard
  },
  setup() {
    const darkMode = ref(true)

    const toggleTheme = () => {
      darkMode.value = !darkMode.value
      console.log(darkMode.value)
    }

    return {
      darkMode,
      toggleTheme
    }
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

.dark-mode {
  --bg: hsl(207, 26%, 17%);
  --fontColor: hsl(0, 0%, 100%);
  --fontColor2: hsl(0, 0%, 52%);
  --elementBg: hsl(209, 23%, 22%);
}

.light-mode {
  --bg: hsl(0deg 0% 94%);
  --fontColor: hsl(200, 15%, 8%);
  --fontColor2: hsl(0, 0%, 52%);
  --elementBg: hsl(0, 0%, 100%);
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