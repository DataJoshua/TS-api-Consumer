import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApiContextProvider from './context/ApiContextProvider';
import Nav from './templates/Nav';
import Characters from './pages/Characters';

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <ApiContextProvider>
          <Routes>
            <Route path="/characters" element={<Characters/>}/>
          </Routes>
        </ApiContextProvider>
    </BrowserRouter>
  );
}

export default App;
