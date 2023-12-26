import cardIcon from "../../../assets/card/shopping-card.svg"
import { Link } from 'react-router-dom';
export const AppCard = (props) => {
    const {data}= props;
   
  return (
    <>
        {data?.map((item)=>(
            <div className="relative group w-full max-w-sm  rounded-lg shadow-sm hover:shadow-xl  " key={item.idDrink}>
            <Link to={`${item.idDrink}`}  className='relative block'>
                <img className="rounded-lg group-hover:" src={item.strDrinkThumb} alt="product image" />
                <div className="absolute bottom-0 inset-x-0 flex items-center justify-between opacity-0 group-hover:opacity-100 p-2">
                    <div className='bg-[#D1C56D] rounded-full py-3 w-14 flex items-center justify-center'>
                        <span className="text-2xl font-bold text-[#0D0D0D] ">${item?.idDrink.slice(0,2)}</span>
                    </div>
                    
                    <button className="text-white bg-[#037F8C] rounded-full hover:bg-[#024A52] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium p-2 text-sm">
                    <img src={cardIcon} alt="cardIcon" className='w-6 h-6'/>
                    </button>
                </div>
            </Link>
            <div className=" absolute top-0 inset-x-0 text-center  px-2 pb-2 opacity-0 group-hover:opacity-100 bg-white/50 rounded-lg">
                    <h5 className="text-xl font-semibold tracking-tight text-[#0D0D0D]">{item.strDrink}</h5>
            </div>
        </div>
        ))}

                </>
  )
}
