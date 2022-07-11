import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import LoggedInRoutes from './routes/LoggedInRoutes'
import NotLoggedInRoutes from './routes/NotLoggedInRoutes'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<NotLoggedInRoutes></NotLoggedInRoutes>}>
          <Route path='/login' element={<Login />} exact />
        </Route>
        <Route element={<LoggedInRoutes></LoggedInRoutes>}>
          <Route path='/' element={<Home />} exact />
        </Route>
      </Routes>
    </div>
  )
}

export default App
