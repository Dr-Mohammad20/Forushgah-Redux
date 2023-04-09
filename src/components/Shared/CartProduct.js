import React from "react";
import { useDispatch } from "react-redux";

//functions
import { shorten } from "../../helpers/ShortName";

// Actions
import {removeItem, increase, decrease} from '../../redux/shopingCart/cartAction';

//Icons
import trashIcon from '../../asset/icons/trash.svg';

//styles
import styles from '../../styles/CartProduct.module.css';

const CartProduct = ({data}) => {

    const dispatch = useDispatch();
    const {image , title , quantity , price} = data;

    return (
        <div className={styles.container}>
            <img className={styles.productImage} src={image} alt="CartImage" />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {quantity > 1 ? 
                <button onClick={() => dispatch(decrease(data))}>-</button> :
                <button onClick={() => dispatch(removeItem(data))}>
                    <img src={trashIcon} alt="trash"/>
                </button>
                }
                <button onClick={() => dispatch(increase(data))}>+</button>
            </div>
        </div>
    );
};

export default CartProduct;