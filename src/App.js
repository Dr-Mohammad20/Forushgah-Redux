import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import Shopcart from "./components/Shopcart";

//styles
import styles from './App.css';

function App() {
  return (
    <div className={styles.App}>
      <Provider store={store}>
          <div className={styles.AppHeader}>
            <Navbar />
          </div>
          <Routes>
            <Route path="/products/:id" element={<ProductDetails/>} />
            <Route path="/products" element={<Store />} />
            <Route path="/cart" element={<Shopcart />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
      </Provider>
    </div>
  );
}

export default App;
