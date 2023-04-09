import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//components
import CartProduct from './Shared/CartProduct';

// Actions
import {clear, checkout} from '../redux/shopingCart/cartAction';

//styles
import styles from '../styles/ShopCart.module.css';

const Shopcart = () => {

    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map((item => <CartProduct key={item.id} data={item} />))}
            </div>
            {state.itemsCounter > 0 &&
                <div className={styles.payments}>
                    <p><span>Total Items : {state.itemsCounter}</span></p>
                    <p><span>Total Payment : {state.total} $</span></p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch(clear())}>Clear</button>
                        <button className={styles.checkout} onClick={() => dispatch(checkout())}>Checkout</button>
                    </div>
                </div>
            }

            {state.checkout &&
                <div className={styles.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

            {!state.checkout && state.itemsCounter === 0 &&
                <div className={styles.complete}>
                    <h3>Want to buy?</h3>
                    <Link to="/products">Back To Shop</Link>
                </div>
            }
        </div>
    );
};

export default Shopcart;