import { ref } from 'vue'
import axios from 'axios'

const countries = ref({})
const region = ref('')
const searchCountry = ref('')
const loading = ref(false)

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
    loading.value = true
    const url = "https://restcountries.com/v3.1/"
    const regionFinal = 'region/' + region.value
    const countryFinal = 'name/' + searchCountry.value
    const searchUrl = url + countryFinal
    const finalUrl = url + regionFinal

    if(region.value == '') {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      countries.value = response.data
      loading.value = false
    } else if(region.value !== '') {
      const response = await axios.get(finalUrl);
      countries.value = response.data
      loading.value = false
    } else {
      const response = await axios.get(searchUrl);
      countries.value = response.data
    }
  } catch (error) {
    
  }
}

const searchCountryName = async () => {
  try {
    loading.value = true
    const url = "https://restcountries.com/v3.1/"
    const countryFinal = 'name/' + searchCountry.value
    const searchUrl = url + countryFinal
    const response = await axios.get(searchUrl)
    countries.value = response.data
    console.log(countries.value)
    loading.value = false
  } catch (error) {

  }
}

const usegetCountries = () => {
  return {
    loading,
    getCountries,
    countries,
    region,
    searchCountry,
    searchCountryName
  }
}

export default usegetCountries