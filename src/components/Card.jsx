import Button from "./Button/Button";

function Card(props) {

    return (
        //fragment
        <>
            <div>
                <h3 font>{props.title}</h3>
                <br />
                <img height= "220px" src={props.img} alt={props.title}/>
                <h3>$ {props.price}</h3>
                <small>{props.detail}</small>
                <Button padding="10px" color="#ce3741">
                    Más info
                </Button>

            </div>
        </>
    );
}

export default Card; 