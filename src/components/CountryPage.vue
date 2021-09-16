<template>
 <!-- <router-link to="/">
    <button class="back">
      <ion-icon name="arrow-back-sharp"></ion-icon>
      <p>Back</p>
    </button>
  </router-link>
-->
  <div v-for="count in country" class="countrypage-card">
    <img :src="count.flag" alt="logo">
    <div class="country-details">
      <h1>{{ count.name }}</h1>
      <div class="sub-details">
        <ul class="list-one">
          <li>Native Name: <span>{{ count.nativeName }}</span></li>
          <li>Population: <span>{{ count.population }}</span></li>
          <li>Region: <span>{{ count.region }}</span></li>
          <li>Sub Region: <span>{{ count.subregion }}</span></li>
          <li>Capital: <span>{{ count.capital }}</span></li>
        </ul>
        <ul>
          <li v-for="domain in count.topLevelDomain">Top Level Domain: <span>{{ domain }}</span></li>
          <li v-for="curr in count.currencies">Currencies: <span>{{ curr.name }}</span></li>
          <li v-for="lang in count.languages">Languages: <span>{{ lang.name }}</span></li>
        </ul>
      </div>
      <div class="border">
        <p>Border Countries:</p>
        <div v-for="bord in count.borders">
        <button class="border-country">{{ bord }}</button>
        </div>
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
    const country = ref({})
    const route = useRoute()
    const countryName = computed(() => route.params.id)

    onMounted(async () => {
      try {
        const url = "https://restcountries.eu/rest/v2/name/nigeria"
        const abd = await axios.get(url);
        country.value = abd.data
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

.countrypage-card img {
  width: 400px;
  margin-right: 30px;
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

span {
  font-size: 13px;
}
</style>