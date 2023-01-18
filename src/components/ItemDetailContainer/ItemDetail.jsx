import React from "react";
import "./card.css";

function ItemDetail(props) {

    const { title, img, price, detail, id } = props;

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
            <br></br>
        </div>
    );
}

export default ItemDetail;