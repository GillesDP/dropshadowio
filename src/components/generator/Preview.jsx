import React, {useState} from "react";

function Preview(props) {
   const styles = {
      backgroundColor: "#391DD5",
      width: "100px",
      height: "100px",
      color: "#FFF",
      display: "block",
      position: "absolute",
      top: "20%",
      right: "50%",
      boxShadow: props.shadowData.css
   }

   return <div style={styles}>Hello</div>
}

export default Preview;