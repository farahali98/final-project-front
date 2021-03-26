import './App.css';
import { BrowserRouter, BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import First from './components/home/First'
import FoodList from './components/Food/FoodList'
import { Profiler } from 'react';
import Login from './components/Login'
import StudentViewPage from './Profile/StudentViewPage'
function App() {
  return (
    // {token ? <Profile /> : <BrowseRouter />}

    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={First}>
          <First />
        </Route>
        <Route exact path='/food' component={First}>
          <FoodList />
          </Route>

          <Route exact path='/login' component={Login}>
          <Login />
          </Route>  
           <Route exact path='/profile' component={StudentViewPage}>
          <StudentViewPage />
          </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
