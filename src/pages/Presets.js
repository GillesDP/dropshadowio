import React from "react";
import ReactGA from "react-ga"

function Presets() {
   ReactGA.pageview(window.location.pathname);
   return(
      <React.Fragment></React.Fragment>
   );
}

export default Presets;