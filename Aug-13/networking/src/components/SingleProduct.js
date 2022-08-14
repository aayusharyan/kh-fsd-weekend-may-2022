const SingleProduct = ({product_info}) => {
  // console.log(product_info);
  return (
    <div className="card">
      <img src={product_info.image} alt="About Product" />
      <h4>{product_info.title}</h4>
      <span>{product_info.category}</span>
      <p>Rating: {product_info.rating.rate} / 5 ✴️</p>

      <h5>{product_info.price}</h5>
      <button>Add to Cart 🛒</button>
      {/* <p>{product_info.description}</p> */}
      
    </div>
  );
}

export default SingleProduct;