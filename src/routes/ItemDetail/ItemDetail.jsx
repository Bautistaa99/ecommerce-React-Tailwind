import React,{useContext} from 'react'
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import { ItemsContext } from '../../context/ItemsContext';
import { CartContext } from '../../context/CartContext';

import "../../index.css";

const ItemDetail = () => {
  const [items] = useContext(ItemsContext);
  const {addItemToCart,cartItems} = useContext(CartContext)
  const { brand } = useParams();
  const itemsDetail = items.filter(item => item.brand === brand)

  return (
    <div>
      <Header />
      <div className="flex justify-center mt-10">
        {itemsDetail.map((item) => (
          <div className="col-span-1 text-center py-3 border border-solid border-blue-400 rounded-lg w-60">
            <div>
              <h3>{item.brand}</h3>
              <p>{item.size}</p>
              <div className="flex justify-center">
              
                <img src={item.img} alt="Product" className="h-24" />
              </div>
              <p className="">Precio: ${item.price}</p>
              <div className="border rounded  mx-4 p-1 bg-blue-400">
                <button onClick={()=>addItemToCart(item)}>Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      <div className='flex justify-center '> 
        <div className='border w-64 text-center'>
          <h3 className='border-b'>Carrito de compras</h3>
          {typeof cartItems!=='undefined'?(
            <div>
            {cartItems.map((item)=>(
              <div className='border-b'>
                <p>{item.type}</p>
                <p>{item.brand}</p>
                <p>Cantidad: {item.quantity}</p>
                
              </div>
            ))}
          </div>
          ):(
            <p>Carrito Vacio</p>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default ItemDetail;
