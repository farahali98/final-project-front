import './App.css';
import { BrowserRouter, BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import First from './components/home/First'
import FoodList from './components/Food/FoodList'
import { Profiler } from 'react';
import Prep from './components/Prep'
import Login from './components/Login'
import StudentViewPage from './Profile/StudentViewPage'
import NgoLogin from './ProfileNgo/NgoLogin';
import NgoProfile from './ProfileNgo/NgoProfile';
import SimpleMap from './map/SimpleMap'
import Menu from './components/menu/Menu'
import Profile from './components/Profile';
function App() {
  return (
  

    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={First}>
          <First/>
        </Route>
        <Route exact path='/food' component={FoodList}>
          <FoodList/>
          </Route>
          <Route exact path='/login/business' component={Login}>
          <Login />
          </Route>  
           <Route exact path='/profile/business' component={StudentViewPage}>
          <StudentViewPage />
          </Route>
          <Route exact path='/contributors' component={Profile}>
          <Profile/>
          </Route>
          <Route exact path='/login/ngo' component={NgoLogin}>
          <NgoLogin/>
          </Route>
          <Route exact path='/profile/ngo' component={NgoProfile}>
          <NgoProfile/>
          </Route>
          <Route exact path='/login' component={Prep}>
          <Prep/>
          {/* </Route> */}
          {/* <Route exact path='/map' component={SimpleMap}>
          <SimpleMap/> */}
          </Route>
      </Switch>
    </BrowserRouter>
    
  )
}

export default App;
