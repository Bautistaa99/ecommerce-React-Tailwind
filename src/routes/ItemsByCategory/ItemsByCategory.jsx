import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from "../../components/Header/Header";
import { ItemsContext } from '../../context/ItemsContext';

const ItemsByCategory = ({ id }) => {
  const [items] = useContext(ItemsContext)
  const itemsById = items.filter(item => item.categoryId === id)

  return (
    <div>
    <Header />

    {typeof itemsById !=='undefined' ?(
    <div className="mt-10 grid grid-cols-3 gap-16 m-10">
      {itemsById.map((item) => (
        <div key={item.id} className="col-span-1 text-center py-3 border border-solid border-black rounded-lg w-60">
          <div>
            <h3>{item.brand}</h3>
            <div className="flex justify-center">
              <img src={item.img} alt="Product" className="h-24" />
            </div>
            <p>{item.size}</p>
            <div className="border rounded  mx-4 p-1 bg-blue-400 ">
            <Link key={item.id} to={`/${item.brand}`} >
              Detalles
            </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    ):(
      'Cargando'
    )}
    </div>
  );
};

export default ItemsByCategory;
