import './App.css';
import { Switch, Route } from 'react-router-dom'

// components
import Login from './components/Login'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/dashboard'>
            <Dashboard />
         </Route>
         <Route path='/login'>
            <Login />
         </Route>
         <Route path='/'>
            <Login />
         </Route>
      </Switch>

      
    </div>
  );
}
 
export default App;
