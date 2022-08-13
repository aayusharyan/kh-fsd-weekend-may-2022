import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [list, setList] = useState([]);

  useEffect(_ => {
    axios.get("https://fakestoreapi.com/products")
    .then(data => setList(data.data));
  }, []);

  return <div>
    <p>Will contain Products.</p>
    {list.map((element, idx) => {
      return <div key={idx}>
        <p>{element.title}</p>
      </div>
    })}
  </div>
}

export default ProductList;