import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ApiProvider } from './context/ApiContext';
import StoreList from './Components/StoreList';
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <Header/>
        <Routes>
        <Route path="/" element={<StoreList/>} />
        <Route path="/store/:storeId" element={<ProductList/>} />
        </Routes>
        <Footer/>
      </ApiProvider>
    </div>
  );
}

export default App;
