import React from "react";
import Tool from "../components/tool/Tool";
import Share from "../components/global/Share";

function Home() {
   return (
      <React.Fragment>
         <Tool/>
         <div className="container">
            <Share/>
         </div>
      </React.Fragment>
   );
}

export default Home;