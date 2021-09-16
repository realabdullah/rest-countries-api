<template>
  <Search />
  <div class="country-cards">
      <div class="country-card" v-for="country in countries">
        <router-link :to="{ name: 'Country', params: { name: country.name }}">
          <img :src="country.flag" alt="logo">
          <div class="details">
            <h3>{{country.name}}</h3>
            <p>Population: <span>{{country.population}}</span></p>
            <p>Region: <span>{{country.region}}</span></p>
            <p>Capital: <span>{{country.capital}}</span></p>
          </div>
        </router-link>
      </div>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import { onBeforeMount } from 'vue'
import usegetCountries from '../composables/getCountries'

export default {
  components: {
    Search,
  },

  setup() {
    const { getCountries, countries } = usegetCountries()

    onBeforeMount(async () => {
      await getCountries()
    })

    return {
      countries,
    }
  }
}
</script>

<style>
.country-cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: var(--bg);
}

.country-card {
  margin: 30px;
  width: 300px;
  background: var(--elementBg);
  border-radius: 5px;
}

.country-card a {
  text-decoration: none;
}

.country-card a img {
  max-width: 100%;
  max-height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.details {
  padding: 15px;
}

.details h3 {
  padding: 10px 0;
  color: var(--fontColor);
}

.details p {
  padding: 5px 0;
  color: var(--fontColor);
}

.details p span {
  font-size: 13px;
  color: var(--fontColor);
}
</style>