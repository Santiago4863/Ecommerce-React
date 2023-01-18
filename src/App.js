import './App.css';
import Item from "./components/ItemListContainer/Item"
import Button from './components/Button/Button';
import NavBar from './components/NavBar/NavBar';
import Flex from './components/Flex/Flex';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetailContainer/ItemDetail';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} ></Route>
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} ></Route>
          <Route path='/brands' element={<h1>Marcas</h1>} ></Route>
          <Route path='/aboutus' element={<div><h2>Sobre nosotros</h2></div>} />
          <Route path='*' element={<h2>Página no encontrada</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;