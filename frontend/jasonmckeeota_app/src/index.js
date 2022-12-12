import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PresentationComponent from "./components/presentationComponent";
import ContainerFluidExampleComponent from "./components/conainerFluidExampleComponent";
import RobotFactoryProjectComponent from "./components/robotFactoryProjectComponent";

ReactDOM.render(
    <div>
        <div>
       <PresentationComponent />
       </div>
        <div>
        <ContainerFluidExampleComponent />
        </div>
        <div>
            <RobotFactoryProjectComponent />
        </div>
        
</div>
, document.getElementById('root')
);