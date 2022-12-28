import "./Flex.css";

function Flex(props) {

    return <div className="flexContainer">
        {props.children}
        </div>;
}

export default Flex;