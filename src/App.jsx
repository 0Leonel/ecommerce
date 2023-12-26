import './App.css'
import { RootProvider } from './core/provides/root_provide'
import { RouterProvider } from 'react-router-dom'
import { appRoutes } from './core/routes/appRoutes'
function App() {

  return (
    <>
    <RootProvider>
      <RouterProvider router={appRoutes} />
    </RootProvider>
    </>
  )
}

export default App
