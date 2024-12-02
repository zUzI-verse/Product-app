import Product, { product } from "../Product/Product"



const Image = () => {
  return (
    <>
     <img src={product.imageUrl} alt={product.name} style={{ width: '300px', height: 'auto' }}/>
    </>
  )
}

export default Image;