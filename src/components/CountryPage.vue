<template>
  <div class="page-bg" :class="darkMode ? 'dark-mode' : 'light-mode'">
    <router-link to="/">
      <button class="back">
        <ion-icon name="arrow-back-sharp"></ion-icon>
        <p>Back</p>
      </button>
    </router-link>

    <div class="loading" v-if="loading">
      <img src="../assets/loading.gif" alt="loading">
    </div>

    <div v-for="count in country" class="countrypage-card" v-else>
      <img :src="count.flags.png" :alt="count.name.common">
      <div class="country-details">
        <h1>{{ count.name.common }}</h1>
        <div class="sub-details">
          <ul class="list-one">
            <li>Native Name: <span>{{ count.nativeName }}</span></li>
            <li>Population: <span>{{ count.population }}</span></li>
            <li>Region: <span>{{ count.region }}</span></li>
            <li>Sub Region: <span>{{ count.subregion }}</span></li>
            <li>Capital: <span v-for="capt in count.capital">{{ capt }}</span></li>
          </ul>
          <ul>
            <li v-for="domain in count.topLevelDomain">Top Level Domain: <span>{{ domain }}</span></li>
            <li v-for="curr in count.currencies">Currencies: <span>{{ curr.name }}</span></li>
            <li>Languages: <span v-for="lang in count.languages"> {{ lang.name }} </span></li>
          </ul>
        </div>
        <div class="border">
          <p>Border Countries:</p>
          <div class="border-button">
            <div v-for="bord in count.borders">
              <button class="border-country">{{ bord }}</button>
            </div>
          </div>
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
    const countryName = computed(() => route.params.name)
    const loading = ref(false)

    onMounted(async () => {
      try {
        loading.value = true
        const url = "https://restcountries.com/v3.1/name/"
        const finalUrl = url + countryName.value
        const abd = await axios.get(finalUrl);
        country.value = abd.data
        loading.value = false
      } catch (error) {
        // console.error(error)
      }
    })

    return {
      country,
      loading
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}

.page-bg {
  background: var(--bg);
}

.back {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background: var(--elementBg);
  padding: 10px 20px;
  border-radius: 5px;
  color: var(--fontColor);
  margin: 25px 50px;
}

.back p {
  margin-left: 7px;
}

.countrypage-card {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 50px;
}

.countrypage-card img {
  width: 400px;
  max-width: 100%;
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

.border-button {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}

.border-country {
  border: none;
  background: var(--elementBg);
  padding: 10px 20px;
  margin: 7px;
  border-radius: 5px;
  color: var(--fontColor2);
}

span {
  font-size: 13px;
  color: var(--fontColor2);
}

@media(max-width:700px) {
  .back {
    margin: 25px;
  }
  .countrypage-card {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    padding-top: 0;
  }

  .country-details {
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  .countrypage-card img {
    margin-right: 0;
  }

  .sub-details {
    flex-direction: column;
    justify-content: center;
    justify-content: center;
    padding-bottom: 40px;
  }

  .list-one {
    margin-right: 0px;
  }

  .border {
    flex-direction: column;
    align-items: flex-start;
  }

  .border-country {
    margin-top: 10px;
  }
}
</style>