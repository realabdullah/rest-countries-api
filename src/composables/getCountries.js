import { ref, computed } from 'vue'
import axios from 'axios'

const countries = ref({})
const region = ref('')

/*
const searchedCountries = computed(() => {
  return countries.value.filter((country) => {
    return (
      country.title
        .toLowerCase()
        .indexOf(search.value.toLowerCase()) != -1
    )
  })
}) */

const getCountries = async () => {
  try {
    const url = "https://restcountries.eu/rest/v2/"
    const regionFinal = 'region/' + region.value
    const finalUrl = url + regionFinal

    if(region.value == '') {
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      countries.value = response.data
    } else {
      const response = await axios.get(finalUrl);
      countries.value = response.data
    }
    
    console.log(countries)
    console.log(finalUrl)
  } catch (error) {
    console.error(error);
  }
}

const usegetCountries = () => {
  return {
    getCountries,
    countries,
    region
  }
}

export default usegetCountries