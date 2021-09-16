import { ref } from 'vue'
import axios from 'axios'

const countries = ref({})

const getCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    countries.value = response.data
    console.log(countries);
  } catch (error) {
    console.error(error);
  }
}

const usegetCountries = () => {
  return {
    getCountries,
    countries
  }
}

export default usegetCountries