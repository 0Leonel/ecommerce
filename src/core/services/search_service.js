import axios from 'axios';

export const getSearch = async (search) => {
    const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
  return data;
}
