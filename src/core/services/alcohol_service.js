import axios from 'axios'

export const getAlcohol = async() => {
    const {data} = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    return data;
}
