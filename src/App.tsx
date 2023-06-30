import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApiContextProvider from './context/ApiContextProvider';
import Nav from './templates/Nav';
import Characters from './pages/Characters';
import Locations from './pages/Locations';
import Episodes from './pages/Episodes';
import EpisodePage from './pages/EpisodePage';

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <ApiContextProvider>
          <Routes>
            <Route path="/characters" element={<Characters/>}/>
            <Route path="/locations" element={<Locations/>}></Route>
            <Route path="/episodes" element={<Episodes/>}></Route>
            <Route path="/episodes/:id" element={<EpisodePage/>}></Route>
          </Routes>
        </ApiContextProvider>
    </BrowserRouter>
  );
}

export default App;
