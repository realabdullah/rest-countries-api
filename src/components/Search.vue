<template>
  <div class="sf">
    <div class="search">
      <ion-icon name="search"></ion-icon>
      <input type="text" v-model="search" placeholder="Search for a country...">
    </div>
    <div class="filter">
      <select v-model="newRegion" @change="changeRegion" name="cars" id="cars">
        <option class="options" value="">Filter by Region</option>
        <option class="options" value="africa">Africa</option>
        <option class="options" value="americas">America</option>
        <option class="options" value="asia">Asia</option>
        <option class="options" value="europe">Europe</option>
        <option class="options" value="oceania">Oceania</option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import usegetCountries from '../composables/getCountries'

export default {
  setup() {
    const { getCountries, countries, region } = usegetCountries()
    const newRegion = ref('')
    const search = ref('')

    const changeRegion = async () => {
      region.value = newRegion.value
      await getCountries()
      console.log(region.value)
    }

    return {
      search,
      newRegion,
      changeRegion
    }
  }
}
</script>

<style>
.sf {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 50px;
  background: var(--bg);
}

.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--elementBg);
  padding: 10px;
  border-radius: 5px;
}

.search ion-icon {
  color: var(--fontColor);
}

.search input {
  margin-left: 15px;
  border: none;
  outline: none;
  background: transparent;
}

.search input::placeholder {
  color: var(--fontColor);
}

.search input:focus {
  color: var(--fontColor);
}

.filter {
  background: var(--elementBg);
  color: var(--fontColor);
  padding: 10px 20px;
  border-radius: 5px;
}

select {
  border: none;
  outline: none;
  background: transparent;
  color: var(--fontColor);
  width: 170px;
}

.options {
  padding: 10px;
  background: var(--bg);
}

@media(max-width: 700px) {
  .sf {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 40px 25px;
    padding-bottom: 25px;
  }

  .search {
    justify-content: flex-start;
    margin-bottom: 25px;
    padding: 20px;
    width: 100%;
  }
}
</style>