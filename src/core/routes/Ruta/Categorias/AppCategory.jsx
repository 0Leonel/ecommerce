import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import { getCategory } from '../../../services/category_service';
import { AppCard } from '../../../components/appCards/appCard';
import { AppLoading } from '../../../components/appSpinner/appLoading';
import { Outlet } from 'react-router-dom';
import { AppHeader } from '../../../components/appHeader/appHeader';

export const AppCategory = (props) => {
    const {category} = props
    const {data, isLoading} = useFetch(getCategory, [category]);
    const [count, setCount] = useState(0);

  return (
    <div>
    {isLoading ? <AppLoading/> : <>
    <div>
        <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Click</button>
        <button className='btn btn-primary' onClick={() => setCount(count - 1)}>Click</button>

          <AppHeader count={count}/>
    </div>
    <div className='grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] justify-items-center gap-12'>
          <AppCard  data={data?.drinks}/>
    </div>
    <Outlet/>
    </>
    }
    </div>
  )
}
