import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ItemCount from "../Itemcount/ItemCount";
import "./card.css";

function Item(props) {

    const { title, img, price, detail, id } = props.item;

    return (
        <div className="item-card">
            <div className="item-card_header">
                <h2>{title}</h2>
            </div>
            <div className="item-card_img">
                <img src={img} alt={title} />
            </div>
            <div className="item-card_price">
                <h3 className="item-card_price">$ {price}</h3>
            </div>
            <div className="item-card_detail">
                <h3 className="item-card_detail">{detail}</h3>
            </div>
            <ItemCount/>
            <Link to={`/detail/${id}`}>
                <Button padding="10px">
                    Productos de la categoria
                </Button>
            </Link>
            <br></br>
        </div>
    );
}

export default Item;