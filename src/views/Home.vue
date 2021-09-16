<template>
  <div class="home" :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }">
    <Navbar />
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
  }
}
</script>

