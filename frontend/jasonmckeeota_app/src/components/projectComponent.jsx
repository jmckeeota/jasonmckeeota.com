import ProjectDescription from './projectDescription.jsx';
import ProjectTechnologies from './projectTechnologies.jsx';
import ProjectTitle from './projectTitle.jsx';
import "./containerFluidExample.css";

function ProjectComponent({data}) {

    return ( 
        <div class="min-vh-100 bg-primary bg-gradient">
            <div class="container"><ProjectTitle data={data} /></div>
            <ul flex-container>
            <li class="flex-item"><ProjectTechnologies data={data} /></li>
            <li class="flex-item"><ProjectDescription data={data} /></li>
            </ul>
        </div>
     );
}

export default ProjectComponent;