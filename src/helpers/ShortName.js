const shorten = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} `;
  return newTitle;
};


const isInCart = (state,id) =>{
  const resault = !!state.selectedItems.find(item => item.id === id);
  return resault;
}

const quantityCount = (state,id) =>{
  const index = state.selectedItems.findIndex(item => item.id === id);
  if (index === -1){
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
}

export { shorten , isInCart , quantityCount };

// فانکشن شورتن نام کامل محصول را گرفته
//با دستور اسپلیت رشته را بر اساس فاصله بین کلمات تکه به تکه می کند - خط 2
//سپس کلمه اول و کلمه دوم را درون نیوتایتل می ریزد - خط 3

//فانکشن ایزاین کارت چک میکند که یک محصول در سبد خرید است یا نه
//اگرموجود باشد دکمه های زیر آن محصول به یکصورت و اگر موجود نباشد فقط دکمه اددتوکارت نمایش داده میشود
