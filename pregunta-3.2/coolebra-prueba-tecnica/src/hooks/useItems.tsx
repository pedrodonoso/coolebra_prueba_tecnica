import { useState } from "react";
import { Data } from "../data";

export const useItems = () => {
  const [items, setItems] = useState<Array<Data>>([]);

  const filterItems = (filter: string, date: Array<Data>) => {
    setItems(date);
    date.forEach((item, index) => {
      const productNameItem = item.Ean.productName;
      if (productNameItem !== filter) {
        setTimeout(function () {
          removeItem(productNameItem);
        }, 1000 * (index + 1));
      }
    });
  };

  const removeItem = (productName: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.Ean.productName !== productName);
    });
  };

  return {
    items,
    setItems,
    filterItems,
  };
};
