import { Link, useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { getDetails } from '../../services/details_service'
import { AppLoading } from '../appSpinner/appLoading';


export const AppModal =()=> {
  const idDrink = useParams();
  const {data, isLoading} = useFetch(getDetails, [idDrink?.idDrink])
  const info = data?.drinks[0];
  return (
    <>
     {isLoading ? <AppLoading/> :<Link to="../" className="link-background">
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm lg:max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#013A40] max-w-3xl outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-4 bg-opacity-30 bg-[#143437] border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-[#BCBCBC]">{info?.strDrink}</h3>
              
            </div>
            {/*body*/}
            <div className="relative p-2 flex-auto">
              <div className='grid lg:grid-cols-2'>

              <img src={info?.strDrinkThumb} alt={info?.strDrink} className='w-full h-full rounded-lg' />
              <p className="my-4 text-justify text-[#BCBCBC] text-lg leading-relaxed p-2">
              {info?.strInstructions ?? info?.strInstructionsIT ?? info?.strInstructionsDE ?? "Instrucciones no disponibles"}
           
                </p>
                
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-2 bg-opacity-30 bg-[#143437] border-solid border-blueGray-200 rounded-b">
              <Link
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                to="../"
              >
                Cancelar
              </Link>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={()=>console.log("Comprado")}
              >
               Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </Link>}
        </>
  )
}
