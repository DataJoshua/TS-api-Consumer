import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ApiContextProvider from './context/ApiContextProvider';
import Nav from './templates/Nav';

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <ApiContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </ApiContextProvider>
    </BrowserRouter>
  );
}

export default App;
