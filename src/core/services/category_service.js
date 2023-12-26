import axios from 'axios'

export const getCategory = async (category) => {
    const { data } = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  return data
}
