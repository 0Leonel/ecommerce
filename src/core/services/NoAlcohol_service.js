import axios from 'axios'

export const getNoAlcohol = async() => {
    const {data} = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    return data;
}
