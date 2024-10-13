import { useState, useEffect } from "react"
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({itemId}) => {


    const [item, setItem] = useState(undefined);

    useEffect(() => {
      pedirItemPorId(itemId).then((res) => {
        setItem(res);
      })
    }, [])
    
     
  return (
    <div>
      {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer
