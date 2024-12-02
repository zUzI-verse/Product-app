import Product from "./Component/Product/Product"
import Name from "./Component/Name/Name"
import Price from "./Component/Price/Price"
import Description from "./Component/Description/Description"
import Image from "./Component/Image/Image"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { Card } from "react-bootstrap"
import Card from 'react-bootstrap/Card';


const user = "Izu";

const App = () => {
  return (
    <>
    <Card>
      {/* <Card.Body><Name/></Card.Body>
      <Card.Body><Price/></Card.Body>
      <Card.Body><Description/></Card.Body>
      <Card.Body><Image/></Card.Body> */}
     <Product/>
    </Card>

    <Card>
      <Card.Body><Name/></Card.Body>
      <Card.Body><Price/></Card.Body>
      <Card.Body><Description/></Card.Body>
      <Card.Body><Image/></Card.Body>
    </Card> 


    <p className="Greeting">
      Hello, {user ? user : "there" }
    </p>
    </>
  )


}

export default App;