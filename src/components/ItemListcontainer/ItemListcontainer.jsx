import { useState, useEffect } from "react";
import Item from "./Item";
import ItemCount from "../Itemcount/ItemCount";
import obtenerProductos, { getProductByDetail, } from "../../services/mockService";
import Flex from "../Flex/Flex";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        obtenerProductos()
            .then((respuesta) => {
                setListaProductos(respuesta);
            })
            .catch((error) => alert(error));
    }, []);

    return (
        <Flex>
            {listaProductos.map((itemIterado) => {
                return <Item key={itemIterado.id} item={itemIterado} />;
            })}
        </Flex>
    );
}

export default ItemListContainer;