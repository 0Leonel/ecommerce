import axios from 'axios';

export const getRandom = async () => {
        const {data}  = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        return data;
   
}
