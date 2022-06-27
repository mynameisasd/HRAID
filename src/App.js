import './App.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom'


// components
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import AddEmployee from './components/AddEmployee';
import Records from './components/Records';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//CDN Bootstrap
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/addemployee' element={<AddEmployee />} />
          <Route path='/records' element={<Records />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
