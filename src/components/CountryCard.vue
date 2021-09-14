<template>
  <button @click="getCountries">Get Country</button>
  <div class="country-cards">
    <div class="country-card" v-for="country in countries">
      <img :src="country.flag" alt="logo">
      <div class="details">
        <h3>{{country.name}}</h3>
        <p>Population: {{country.population}}</p>
        <p>Region: {{country.region}}</p>
        <p>Capital: {{country.capital}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
  setup() {
    const countries = ref({})
    const flag = ref('')
    const name = ref('')
    const population = ref('')
    const region = ref('')
    const capital = ref('')

    const getCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        countries.value = response.data
        name.value = countries.name
        console.log(countries);
      } catch (error) {
        console.error(error);
      }
    }

    return {
      getCountries,
      countries
    }
  }
}
</script>

<style>
.country-cards {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
}

.country-card {
  margin: 20px;
  width: 400px;
  flex: 1;
  background: var(--elementBg);
}

.country-card img {
  width: -webkit-fill-available;
}

.details {
  padding: 15px;
}
</style>