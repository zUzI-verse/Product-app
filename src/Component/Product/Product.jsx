export  const product = {
    name:'IPhone 16',
    price: 500,
    description: 'An Apple Smart Phone',
    imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-model-unselect-gallery-2-202409_GEO_US?wid=5120&hei=2880&fmt=webp&qlt=70&.v=ZnlzVUZzRWd3dlg0RllqbHhQSUpKTGdzSmpObkZCM3MrNmJ5SkhESlNDZ1FydVY5cEpsVTdwMmk5U2U2UXBQVThLcXQxZ1h0QThIT2dnUm5qbGk5OUJkSERIUjY1Wk1Od3FtNjF6NFZLVXZtZEowT3Fwbmhld1JjblRvOVpZeVcwTko2SW91TzhmREJLUUxPTmhpZ1NB&traceId=1",
}

const Product = () => {
  return (
    <div>
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <p>{product.description}</p>
    <img src={product.imageUrl} alt={product.name} style={{ width: '300px', height: 'auto' }}/>
  </div>
  ) 
}

export default Product;