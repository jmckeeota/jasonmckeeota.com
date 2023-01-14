import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PresentationComponent from "./components/presentationComponent";
import ProjectComponent from "./components/projectComponent";
import MyBar from "./components/myBar";


function Main( {projectData, dynamicIntroData }){
    const [headerHeight, setHeaderHeight] = useState(150);
    const myRefs= useRef([]);
    const pageRef = useRef(null);
    const scrollCallback = () => {
        // while (show === true){
        // console.log("still true")}
        console.log("show");
        pageRef.current.scrollIntoView(true);
        }
    // function updateHeaderHeight() {
    //     // get the divElement.clientHeight from the div container wrapping the Navbar 
    //     const height = this.divElement.clientHeight;
            
    //         // if the divElement does not equal the component state headerHeight, update it
    //         if ({headerHeight} !== height){
    //             setHeaderHeight(height)
    //         }
    //     }
    //     useEffect(() => {
    //         updateHeaderHeight();
    //       });

    return (
    <div>
        <div>            


        <PresentationComponent intro={dynamicIntroData} projectData={projectData} />
        </div>

    {projectData.map((pageData) => (
    <div 
        key={pageData.id} 
        ref={el => (myRefs.current[pageData.id] = el)}>
        <ProjectComponent data={pageData} />
    </div>
    
    ))}
<section ref={pageRef}>blah</section>

</div>
)}

export default Main;