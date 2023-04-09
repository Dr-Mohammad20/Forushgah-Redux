import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

//component
import Product from "./Shared/Product";

//redux
import {fetchProducts} from '../redux/products/productsActions'

//styles
import styles from '../styles/Store.module.css';

const Store = () => {

  const dispatch = useDispatch();
  const productsState = useSelector(state => state.productsState);

  useEffect (() =>{
    dispatch(fetchProducts())
  }, [])

  return (
    <div className={styles.container}>
      {productsState.loading ? 
        <h2>Loading...</h2> :
        productsState.error ? 
          <p>Something went wrong</p> :
          productsState.products.map((product) => (<Product key={product.id} ProductData={product} />))
      }
    </div>
  );
};

export default Store;
