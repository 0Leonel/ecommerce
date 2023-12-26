import { Link } from "react-router-dom"
import iconLogo from "../../../assets/icon.svg"
import sideBar from "../../../assets/menu/sideBar.svg"
import { AppFooter } from "../appFooter/appFooter"
import { useState } from "react"
export const AppSideMenu = (props) => {
   const [open, setOpen] = useState(false);
    const menu =[
        {id: 0, title:"Home", link:"/"},
        {id: 1, title:"Ordinary Drink", link:"/ordinary-drink"},
        {id: 2, title:"Cocktail", link:"/cocktail"},
        {id: 3, title:"Shake", link:"/shake"},
        {id: 4, title:"Other && Unknown ", link:"/other"},
        {id: 5, title:"Cocoa", link:"/cocoa"},
        {id: 6, title:"Shot", link:"/shot"},
        {id: 7, title:"Coffee && Tea", link:"/coffee-and-tea"},
        {id: 8, title:"Homemade Liqueur", link:"/homemade-liqueur"},
        {id: 9, title:"Punch && Party Drink", link:"/punch-and-party-drink"},
        {id: 10, title:"Beer", link:"/beer"},
        {id: 12, title:"Soft Drink", link:"/soft-drink"},
    ]
  return (
   <div className='bg-[#0D0D0D]'>
   <button
     onClick={() => setOpen(!open)}
     className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500  rounded-lg sm:hidden"
   >
     <img className="w-6 h-6 " src={sideBar} alt="Menu" />
   </button>

   <aside
     className={`fixed  top-0 left-0 z-40 w-52 h-screen transition-transform ${
       open ? "translate-x-0 " : "-translate-x-full"
     } sm:translate-x-0 ease-in-out duration-300 `}
   >
     <div className="h-full px-3 py-4 overflow-y-auto bg-[#0D0D0D]">
       <a href="#" className="flex items-center ps-2.5 mb-5">
         <img src={iconLogo} className="h-8 me-3 sm:h-10" alt="Flowbite Logo" />
         <span className="self-center text-xl font-semibold whitespace-nowrap text-[#E46205]">
           Sr. Bigotes
         </span>
       </a>
       <ul className="space-y-2 font-medium">
         {menu.map((item) => (
           <li key={item.id}>
             <Link
               to={item.link}
               className="flex items-center p-2 group text-[#BCBCBC]"
               onClick={()=>setOpen(!open)}
             >
               <span className="flex-1 ms-3 whitespace-nowrap">{item.title}</span>
             </Link>
           </li>
         ))}
       </ul>
     </div>
   </aside>
            <div onClick={()=>setOpen(false)}>
   {props.children}
            </div>
   <AppFooter />
 </div>
    )
}
