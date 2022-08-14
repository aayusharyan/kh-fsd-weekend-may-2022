import axios from 'axios';
import { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';

const ProductList = () => {
  const [list, setList] = useState([]);

  useEffect(_ => {
    // axios.get("https://fakestoreapi.com/products")
    // .then(data => setList(data.data)).catch(() => {
    //   console.log("Failed...");
    // })

    // (async _ => {
    //   const data = await axios.get("https://fakestoreapi.com/products");
    //   setList(data.data);
    // })();

    // (async function () {
    //   const data = await axios.get("https://fakestoreapi.com/products");
    //   setList(data.data);
    // })()

    // fetch("https://fakestoreapi.com/products").then(response => {
    //   return response.json();
    // }).then(data => {
    //   setList(data);
    // })
    
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => setList(data));

    

    // fetch("https://fakestoreapi.com/products").then(response => {
    //   response.json().then(data => {
    //     setList(data);
    //   }).catch(() => {

    //   })
    // }).catch(() => {

    // });

    // const response = await fetch("https://fakestoreapi.com/products");
    // const data = await response.json();
    // setList(data);

  }, []);

  return (
    <div>
      <p>All Products.</p>

      <div className='product-container'>
        {list.map((element, idx) => {
          return <SingleProduct key={idx} product_info={element}/>
        })}
      </div>
    
    </div>
  );
}

export default ProductList;