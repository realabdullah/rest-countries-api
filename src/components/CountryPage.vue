<template>
 <!-- <router-link to="/">
    <button class="back">
      <ion-icon name="arrow-back-sharp"></ion-icon>
      <p>Back</p>
    </button>
  </router-link>
-->
  <div class="countrypage-card">
    <img src="../assets/logo.png" alt="logo">
    <div class="country-details">
      <h1>{{ country }}</h1>
      <div class="sub-details">
        <ul class="list-one">
          <li>Native Name: <span></span></li>
          <li>Population: {{ country.population }} <span></span></li>
          <li>Region: <span></span></li>
          <li>Sub Region: <span></span></li>
          <li>Capital: <span></span></li>
        </ul>
        <ul>
          <li>Top Level Domain: <span></span></li>
          <li>Currencies: <span></span></li>
          <li>Languages: <span></span></li>
        </ul>
      </div>
      <div class="border">
        <p>Border Countries:</p>
        <button class="border-country">France</button>
        <button class="border-country">Germany</button>
        <button class="border-country">Netherlands</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import{ computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const country = ({})
    const route = useRoute()
    const countryName = computed(() => route.params.id)

    onMounted(async () => {
      try {
        const response = await axios.get('https://restcountries.eu/rest/v2/name/nigeria');
        country.value = response.data
        console.log(country);
      } catch (error) {
        console.error(error);
      }
    })

    return {
      country
    }
  }
}
</script>

<style>
.back {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: var(--elementBg);
  padding: 10px 20px;
  border-radius: 5px;
  color: var(--fontColor);
  margin: 50px;
}

.back p {
  margin-left: 7px;
}

.countrypage-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
}

.country-details {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
}

.country-details h1 {
  padding: 30px 0;
}

.sub-details {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding-bottom: 40px;
}

.sub-details ul {
  list-style: none;
}

.list-one {
  margin-right: 100px;
}

.sub-details ul li {
  padding: 7px 0;
}

.border {
  display: flex;
  align-items: center;
}

.border p {
  margin-right: 10px;
}

.border-country {
  border: none;
  background: var(--elementBg);
  padding: 10px 20px;
  margin: 0 7px;
  border-radius: 5px;
  color: var(--fontColor);
}
</style>