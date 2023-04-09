import React, { useEffect , useState} from "react";
import { Link , useParams } from "react-router-dom";
import axios from "axios";

//styles
import styles from '../styles/ProductDetails.module.css';

const Details = (props) => {
  const [product, setProduct] = useState([]);
  const params = useParams();

  useEffect(() => {
    const getProduct = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    return response.data;
    }
    const fetchApi = async () => {
      setProduct(await getProduct());
    };
    fetchApi();
  },[params.id]);

  const { image, title, description, price } = product; //دی استراکچر کردن داده مورد نظر
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="ProductImage" />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonContainer}>
          <span className={styles.price}>{price} $</span>
          <Link to="/products">Back to products</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
