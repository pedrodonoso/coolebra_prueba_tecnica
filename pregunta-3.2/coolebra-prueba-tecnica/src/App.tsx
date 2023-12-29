// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Data } from "./interfaces/data";
import { Card } from "./components/Card";
import { Dropdown } from "./components/Dropdown";
import { useItems } from "./hooks/useItems";
import coolebraServices from "./services/coolebra.service";

function App() {
  const [data, setData] = useState<Array<Data>>([]); // productos originales
  const { items, setItems, filterItems } = useItems(); // productos que se filtrarán

  function onChangeOption(e: React.ChangeEvent<HTMLSelectElement>) {
    const keySelected = e.target.value; //captura valor del elemento HTML <select>
    filterItems(keySelected, data); // filtra productos
  }

  useEffect(() => {
    const result = coolebraServices.getProducts();
    setData(result); // inicializa productos originales
    setItems(result); // inicializa productos filtrables
  }, [setItems]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen">
        <div className="container mx-auto">
          <main className="p-0 h-screen">
            <Dropdown data={data} onChange={onChangeOption} />
            <div className="grid grid-cols-4 gap-4">
              {items.map((item) => {
                return <Card data={item.Ean} key={item.Ean.productName}/>;
              })}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
