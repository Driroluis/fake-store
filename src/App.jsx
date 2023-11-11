import { useEffect, useState } from "react";
import Hero from "./components/modules/Hero";
import Characters from "./components/modules/Characters";


export function App() {
  const heroData = {
    title: 'Fake Store',
    image:
      "https://enteratedigital.pe/wp-content/uploads/2020/10/diferencias-e-business-e-commerce.png",
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Hero data={heroData} />
      <Characters data={data}/>
      
    </>
  );
}

export default App;
