import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApiContextProvider from './context/ApiContextProvider';
import Nav from './templates/Nav';
import Characters from './pages/Characters';
import Locations from './pages/Locations';

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <ApiContextProvider>
          <Routes>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/locations" element={<Locations/>}></Route>
          </Routes>
        </ApiContextProvider>
    </BrowserRouter>
  );
}

export default App;
