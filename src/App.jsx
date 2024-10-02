import axios from "axios";
import { useState } from "react";
import { getErrorMessage } from "./utils/errors/messages";
import { PRODUCT_ENDPOINT } from "./utils/constants/endpoints"

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const data = await axios.get(PRODUCT_ENDPOINT);
      setIsLoading(false);
      setProducts(data.data.products);
    } catch (error) {
      setErrorMessage(getErrorMessage(error.code));
      setIsLoading(false);
    }
  }



  return (
    <div>
      <button onClick={fetchProducts}>Fetch Products</button>
      {
        isLoading ? <>Cargando...</> :

          products.map(p =>
            <>
              <h1>{p.title}</h1>
              <h2>{p.brand}</h2>
              <p>{p.description}</p>
              <p>{p.price}</p>
            </>)


      }
      {
        errorMessage ?? ''
      }
    </div>
  );
}

export default App;
