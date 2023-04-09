import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

//functions
import { shorten , isInCart , quantityCount } from "../../helpers/ShortName";

// Actions
import {addItem, removeItem, increase, decrease} from '../../redux/shopingCart/cartAction';


//Icons
import trashIcon from '../../asset/icons/trash.svg';

//styles
import styles from '../../styles/Product.module.css';

const Product = ({ ProductData }) => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.cartState);

  return (
    <div className={styles.container}>
      <img className={styles.cardImage} src={ProductData.image} alt="ProductImage" />
      <h3>{shorten(ProductData.title)}</h3>
      <p>{ProductData.Price}</p>
      <div className={styles.linkContainer}>
        <Link to={`/products/${ProductData.id}`}>Details</Link>
        
        <div className={styles.buttonContainer}>
        {quantityCount(state,ProductData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(ProductData))}>-</button>}
          {quantityCount(state,ProductData.id) === 1 &&
            <button className={styles.smallButton} onClick={() => dispatch(removeItem(ProductData))}>
               <img src={trashIcon} alt="trash"/>
            </button>
          }
          {quantityCount(state,ProductData.id) > 0 && <span className={styles.counter}>{quantityCount(state,ProductData.id)}</span>}
          {
            isInCart(state,ProductData.id) ?
            <button className={styles.smallButton} onClick={() => dispatch(increase(ProductData))}>+</button> :
            <button onClick={() => dispatch(addItem(ProductData))}>Add To Cart</button>
          }
        </div>
      </div>
    </div>
  );
};

export default Product;

//کار تابع شورتن در خط 10 کوتاه کردن نام محصول به اندازه دو کلمه است
