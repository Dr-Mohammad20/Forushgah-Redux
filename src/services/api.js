import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";
const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};
export { getProducts };

//با استفاده از دستور
//async و await
//ما به فانکشن دستور می دهیم تا زمانی که کد خط6 تمام نشده و نتیجه آن برنگشته خطوط بعدی آن اجرا نشوند
//دلیل این کار جلوگیری از ارور می باشد چون خط6 مدت زمان برگشت جوابش طول میکشد و اگر خط بعدی آن قبل از
//بازگشت داده ها اجرا شود بدلیل خالی بودن داده ها ارور می دهد
