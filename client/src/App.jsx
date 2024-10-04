import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Siginin from './pages/Siginin'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './pages/AdminLogin'
import AdminUserEdit from './pages/AdminUserEdit'
import AdminAddUser from './pages/AdminAddUser'
import PrivateAdminRoute from './components/privateAdminRoute'


const App = () => {
  return (
    
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<Siginin/>}/>
      <Route path='/sign-up' element={<Signup/>}/>
      <Route element={<PrivateRoute/>}>
      <Route path='/profile' element={<Profile/>}/>
      </Route>
    </Routes>
    <Routes>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route element={<PrivateAdminRoute/>}>
      <Route path='/admin/Dashboard' element={<AdminDashboard/>}/>
      <Route path='/admin/editUser/:id' element={<AdminUserEdit/>}/>
      <Route path='/admin/addUser' element={<AdminAddUser/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App