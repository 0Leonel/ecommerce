import axios from 'axios';

export const getDetails = async (id) => {
    const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    return data;
}
