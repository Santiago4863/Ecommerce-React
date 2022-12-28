import "./Button.css"

export default function Button (props){
    const styleButton ={
        backgroundColor: props.color,
        padding: props.padding,
    }

    return(
        <button style={styleButton}  className="btn">{props.children}</button>
    )
}
