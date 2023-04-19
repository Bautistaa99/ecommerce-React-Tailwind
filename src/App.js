import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import './index.css'
import HomePage from './routes/HomePage/HomePage'
import FormContactPage from './routes/Contact/FormContactPage';
import ItemDetail from './routes/ItemDetail/ItemDetail';
import ItemsByCategory from './routes/ItemsByCategory/ItemsByCategory';
import { ItemsProvider } from './context/ItemsContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
    <ItemsProvider>
    <CartProvider>
    <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<FormContactPage />} />       
        <Route path='/:brand' element={ <ItemDetail /> } />
        <Route path='/products' element={<ItemsByCategory id={1}/> }  />
    </Routes>
    </CartProvider> 
    </ItemsProvider>
    </BrowserRouter>
  );
}

export default App;
