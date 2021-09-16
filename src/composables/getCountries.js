import { ref } from 'vue'
import axios from 'axios'

const countries = ref({})
const region = ref('')
const searchCountry = ref('')

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
    const countryFinal = 'name/' + searchCountry.value
    const searchUrl = url + countryFinal
    const finalUrl = url + regionFinal

    if(region.value == '') {
      const response = await axios.get('https://restcountries.eu/rest/v2/all');
      countries.value = response.data
    } else if(region.value !== '') {
      const response = await axios.get(finalUrl);
      countries.value = response.data
    } else {
      const response = await axios.get(searchUrl);
      countries.value = response.data
    }
  } catch (error) {
    console.error(error);
  }
}

const usegetCountries = () => {
  return {
    getCountries,
    countries,
    region,
    searchCountry
  }
}

export default usegetCountries