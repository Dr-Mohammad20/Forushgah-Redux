import React, { useState, useEffect, createContext } from "react";

//API Get products
import { getProducts } from "../services/api";

export const ProductsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };

    fetchApi();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;

//در ابتدا ما یک استیت خالی برای قرار دادن اطلاعات گرفته شده از ای پی آی تعریف میکنیم - خط 11
//سپس تابع فتچ را برای گرفتن اطلاعات دریافتی بصورت آسینکرون برای جلوگیری از ارور و خالی بودن داده ها
//درون تابع یوز افکت نوشته تا بقیه قسمتها منتظر بایند شدن این قسمت نشوند مینویسیم - خط 13 تا 19
