import { useState } from "react";

function Button({ text = "Click Me!", style = {}, className = "button", id }) {
  return (
    <button className={className} id={id} style={style}>
      {text}
    </button>
  );
}

export default Button;
