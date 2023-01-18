import React, { useState, useEffect } from "react";
import { getCity , getProductByDetail} from "../../services/mockService";
import Item from "../ItemListContainer/Item";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [itemDetail, setItemDetail] = useState([]);

const { itemId } = useParams();

    useEffect(() => {
        getProductByDetail(itemId)
            .then((respuesta) => {
                setItemDetail(respuesta);
            })
            .catch((error) => alert(error));
    }, []);

    return (
        <ItemDetail
            title={itemDetail.title}
            img={itemDetail.img}
            price={itemDetail.price}
            detail={itemDetail.detail}
        />
    );
}

export default ItemDetailContainer;