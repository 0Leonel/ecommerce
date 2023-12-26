export const drinksAdapter = (item) => {
    return {
      id: item.idDrink,
      title: item.strDrink,
      image: item.strDrinkThumb
    };
  };