import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
// import SideDrawer from './components/SideDrawer/SideDrawer'
import PostsList from './pages/Posts/PostsList/PostsList'
import routes from '../utils/routeConfig'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Navbar /> */}
        {/* <SideDrawer /> */}
        
        <main>
          <PostsList />
        </main>

        {/* <main>
          <Routes>
            {routes.map((route,index)=> (
              <Route 
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Routes>
        </main> */}

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
