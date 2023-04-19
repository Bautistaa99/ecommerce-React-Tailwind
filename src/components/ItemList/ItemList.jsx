import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../../context/ItemsContext";
import "../../index.css";

const ItemList = () => {
  const [items] = useContext(ItemsContext)

  return (
    <div>
    
    {typeof items!=='undefined'? (
      <div className="mt-10 grid grid-cols-4 gap-16 m-10">
      {items.map((item) => (
        <div className="col-span-1 text-center py-3 border border-solid border-black rounded-lg w-60">
          <div>
            <h3>{item.brand}</h3>
            
            <div className="flex justify-center">
              <img src={item.img} alt="Product" className="h-24" />
            </div>
            <p>{item.size}</p>

            <div className="border rounded  mx-4 p-1 bg-blue-400 ">
              <Link key={item.id} to={`/${item.brand}`}>
                Detalles
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    ):(
      'Cargandooooooo'
    )}
    </div>
    
  );
};

export default ItemList;
