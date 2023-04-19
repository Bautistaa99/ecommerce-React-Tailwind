import React, { useEffect, useState } from "react"
import {getFirestore,getDocs,collection} from 'firebase/firestore'

const ItemsContext = React.createContext()

const ItemsProvider=({children})=>{
    const [items,setItems]= useState([]);
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');
    
        getDocs(itemsCollection).then((snapshotList) => {
          const docs = snapshotList.docs.map((snapshot) => ({
            id: snapshot.id,
            ...snapshot.data(),
          }));
          setItems(docs);
        });
      }, []);

    return(
        <ItemsContext.Provider value={[items]}>{children}</ItemsContext.Provider>
        
    )
}

export { ItemsContext,ItemsProvider}