import React from 'react'
import useFetch from '../../../hooks/useFetch';
import { getCategory } from '../../../services/category_service';
import { AppCard } from '../../../components/appCards/appCard';
import { AppLoading } from '../../../components/appSpinner/appLoading';
import { Outlet } from 'react-router-dom';

export const AppCategory = (props) => {
    const {category} = props
    const {data, isLoading} = useFetch(getCategory, [category]);
    
  return (
    <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-12'>

    {isLoading ? <AppLoading/> : <>
    
    <AppCard data={data?.drinks}/>
    <Outlet/>
    </>
    }
    </div>
  )
}
