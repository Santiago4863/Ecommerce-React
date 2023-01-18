import React from "react";
import styles from "./button.css";

// useEffect

export default function Button(props) {
    const [colorState, setColorState] = React.useState("#445c83");

    let styleButton = {
        padding: props.padding,
        backgroundColor: colorState,
    };

    function handleClick(evt) {
        setColorState("#e9d220");
    }

    return (
        <button onClick={handleClick} style={styleButton} className={styles.btn}>
            {props.children}
        </button>
    );
}