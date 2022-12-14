import MyBar from "./myBar.jsx";
import PresentationImage from "./presentationImage.jsx";
import PresentationText from "./presentationText.jsx";
import PresentationCarousel from "./presentationCarousel.jsx";

function PresentationComponent({intro, projectData}) {

    return ( 
        <div className="min-vh-100 bg-primary bg-gradient">
        <MyBar data={projectData} />
        <ul className="flex-container p-5">
        <PresentationImage />
        <PresentationText intro={intro} />
        </ul>
        <div className="d-none d-md-block">
        <PresentationCarousel projectData={projectData} />
        </div>
        </div>
        
     );
}

export default PresentationComponent;