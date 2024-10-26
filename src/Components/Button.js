import React, { useState } from "react";
import Styles from "../Styles/Button.module.css"
import img1 from "../Images/sorpris.png"
import img2 from "../Images/flower.png"
function Button() {
  const [text, setText] = useState("Haz click en el boton");
  const [image, setImage] = useState(img1)

  const Change = () => {
    setText("¡Gracias por hacer clic!");
    setImage(img2)
  };

  return (
    <div className={Styles.card}>
      <h2 className={Styles.text}>{text}</h2>
      <img className={Styles.img} src={image} alt="Imagen de ejemplo"/>
      <button className={Styles.button} onClick={Change}>Boton</button>
    </div>
  );
}
export default Button;
