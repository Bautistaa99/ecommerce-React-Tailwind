import React, { useState, useEffect } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
        const productosEnLocalStorage = localStorage.getItem("cartItems");
        return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        //Si hay productos en el localStorage parseamos esos productos(ya que se guardan en string) y si no hay retornamos un array vacio
        } catch (error) {
        return [];
        }
    });
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addItemToCart =(item)=>{
        const inCart= cartItems.find((itemInCart)=>itemInCart.id=== item.id);
        if(inCart){
            setCartItems(
                cartItems.map((itemInCart)=>{
                    if(itemInCart.id===item.id){
                        return{...inCart,quantity:inCart.quantity+1}
                    }else{
                        return (itemInCart)
                    }
                })
            )       
        }else{
            setCartItems([...cartItems,{...item,quantity:1}])
        }      
    }

    const deleteItemOfCart=(item)=>{
        const inCart= cartItems.find((itemInCart)=>itemInCart.id=== item.id);
        if(inCart.amount===1){
            setCartItems(
                cartItems.filter((itemInCart)=>itemInCart.id===item.id)
            )
        }else(
            setCartItems((itemInCart)=>{
                if(itemInCart.id===item.id){
                    return{...inCart,quantity:inCart.quatity-1}
                }else return itemInCart;
            })
        )
    }

  

    //! CONTADOR DEL CARRITO
    const [accountant, setAccountant] =useState(0);
    const incrementCartAccountant=()=>{
        setAccountant(accountant + 1)
    }
    const decrementCartAccountant=()=>{
        setAccountant(accountant - 1)
    }
    return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart , deleteItemOfCart, incrementCartAccountant,decrementCartAccountant,accountant}}
    >
      {children}
    </CartContext.Provider>
    );
};

export  {CartContext,CartProvider};
