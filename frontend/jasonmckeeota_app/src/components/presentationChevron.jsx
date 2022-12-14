import Image from "react-bootstrap/esm/Image";
function PresentationChevron() {
    return ( 

        <div className="flex-container justify-content-center vw-100 bg-danger align-bottom position-absolute" style={{bottom:'0px'}}>
        <Image src = "chevron-down.svg" alt="scroll for more"/>
        </div>
     );
}

export default PresentationChevron;