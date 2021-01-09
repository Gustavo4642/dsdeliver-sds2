import { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import StepsHeader from "./StepsHeader";
import "./styles.css";
import { OrderLocationdata, Product } from "./types";
import OrderLocation from "./OrderLocation";
import { fetchProducts } from "../api";

function Orders() {

  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

  console.log(products);

  useEffect(() =>{
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, [])

  return(
    <div className="orders-container">
      <StepsHeader/>
      <ProductsList products={products}/>
      <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
    </div>
  )
}
export default Orders;