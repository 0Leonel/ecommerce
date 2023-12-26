import { useEffect } from "react";
import { Link } from "react-router-dom";

const AppCard2 = (props) => {
  const {data, isLoading} = props;
  
  useEffect(() => {
    const fetchData = async () => {
      if (isLoading) {
        return;
      }
    };

    fetchData();
  }, [isLoading, data]); // Se ejecutará cuando 'isLoading' o 'data' cambien.

  if (!data || isLoading) {
    return null;
  }
 
  const ingredientKeys = Object?.keys(data[0]).filter((key) =>key.startsWith('strIngredient'));
  const measureKeys = Object?.keys(data[0]).filter((key) => key.startsWith('strMeasure'));
  const cocktailRecipe = ingredientKeys?.map((ingredientKey, index) => ({
    ingredient: data[0][ingredientKey],
    measure: data[0][measureKeys[index]],
  }));

  const hasIngredients = cocktailRecipe?.some((ingredient) => ingredient?.ingredient !== null);

  return (
    <>
      <div className='grid place-items-center gap-4 lg:grid-cols-2  rounded-lg shadow-lg max-w-4xl'>
            <img src={data[0].strDrinkThumb} alt={data[0].strDrink} className='object-cover rounded-lg w-full h-full' />
        <div>
          <div className='flex flex-row justify-start items-center gap-6 pb-3'>
          <h3 className='text-md text-red-600 font-semibold'></h3>
          <p className='text-sm text-gray-600'>Ultima modificación: <span className='italic'>{data[0].dateModified?.toString().slice(0, 10)}</span> </p>

          </div>
          <div className='flex flex-row justify-start items-center gap-6 pb-3'>
          <h1 className='text-2xl text-[#FFF] font-bold font-sans'>{data[0].strDrink}</h1>
          <p className='text-sm text-gray-500 font-bold'>{data[0].strCategory}</p>
          <p className='text-sm'>{data[0].strAlcoholic}</p>

          </div>
           {hasIngredients ? (
            <div>
              <p className='text-md text-white font-mono'>Ingredientes:</p>
              <ul>
                {cocktailRecipe.map((ingredient, index) => (
                  <li key={index} className='font-mono text-white'> {ingredient?.measure}  {ingredient?.ingredient}</li>
                ))}
              </ul>
            </div>
          ) :  null} 
           {/* <p className='text-md text-white font-mono py-2'>{data[0]?.strInstructionsIT}</p> */}

          {/* <p className='text-md text-white font-mono py-2'>{data[0]?.strInstructionsDE}</p> */}

          <p className='text-md text-white font-mono py-2'>{data[0]?.strInstructions} </p>
          
        </div>
        
      </div>
    </>
  );
};

export default AppCard2;