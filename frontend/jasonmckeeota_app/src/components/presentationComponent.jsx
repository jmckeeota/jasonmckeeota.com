import MyBar from "./myBar.jsx";
import PresentationChevron from "./presentationChevron.jsx";
import PresentationImage from "./presentationImage.jsx";
import PresentationText from "./presentationText.jsx";
import PresentationCarousel from "./presentationCarousel.jsx";

const dynamicContent = {
    name: 'Jason',
    intro: 'Thank you for taking the time to view this personalized version of my website specifically for your company! I\'ve ensured to include examples here of my abilities to code javascript, backend services, and AWS terraform code. Please click on the links above to see more about each project'
}

function PresentationComponent() {
    return ( 
        <div class="min-vh-100 bg-primary bg-gradient">
        <MyBar />
        <ul class="flex-container p-5">
        <PresentationImage />
        <PresentationText name={dynamicContent.name} intro={dynamicContent.intro} />
        </ul>
        <div class="d-none d-md-block">
        <PresentationCarousel />
        </div>
        <div class="d-none d-md-block">
        <PresentationChevron />
        </div>
        </div>
        
     );
}

export default PresentationComponent;