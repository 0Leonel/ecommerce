import useFetch from '../../../hooks/useFetch';
import { getRandom } from '../../../services/random_service';
import AppCard2 from '../../../components/appCards/appCard2';
import { useMemo, useState } from 'react';
import { getSearch } from '../../../services/search_service';
import { AppCard } from '../../../components/appCards/appCard';
import { Outlet } from 'react-router-dom';
import { AppLoading } from '../../../components/appSpinner/appLoading';
import { AppInput } from '../../../components/appInput/appInput';

export const HomeView = () => {
  const {data:drinks, isLoading:drinksLoading, error:error}  = useFetch(useMemo(() => getRandom, []));
  const [dato, setDato] = useState('');
  const {data:search, isLoading:searchLoading}= useFetch(getSearch, [dato]);

  if (drinksLoading) {
    return <AppLoading/>;
  }
  
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Realiza la búsqueda solo si hay un término de búsqueda
    if (dato.trim() !== '') {
      // Realiza la lógica de búsqueda aquí
      console.log('Realizando búsqueda para:', dato);
    }
  };
  return (
    <div >
     <div className='flex flex-col items-center'>
        {/* <h1 className='text-3xl font-bold py-2 text-[#E46205]'>Sr. Bigotes</h1> */}
        
        <div className='flex items-center justify-center w-full'>
          <AppCard2 data={drinks?.drinks} />
        </div>
      
        <form className='flex items-center justify-center w-full max-w-md mt-4' onSubmit={handleSearchSubmit}>
          <AppInput
            type="text"
            value={dato}
            onChange={e => setDato(e.target.value)}
            // className='w-full p-2 border-2 border-gray-500 rounded-md'
            placeholder="Search"
          />
        </form>
      </div>
      <div className='lg:block flex flex-col items-center py-4'>
          <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-12'>
            {searchLoading ? <AppLoading/> : <>
            {search?.drinks ? <AppCard data={search?.drinks} /> : <div className='flex justify-center'>
              <h6 className='text-3xl font-bold py-2 text-[#E46205]'>
              No se encontraron resultados
              </h6>
              </div>}
            <Outlet/> 
            </>
            }
          </div>
            </div>
    </div>
  )
}
