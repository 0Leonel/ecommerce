import { Outlet } from 'react-router-dom'
import { AppSideMenu } from '../components/appSideMenu/appSideMenu'

export const Layout = () => {
  return (
    <>
    <AppSideMenu> 
    <main className='bg-[#590202] p-2 flex justify-center lg:block sm:ml-52 min-h-screen'>
          <Outlet />
    </main>  
    </AppSideMenu>
    </>
  )
}
