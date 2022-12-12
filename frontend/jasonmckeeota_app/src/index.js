import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import PresentationComponent from "./components/presentationComponent";
import ContainerFluidExampleComponent from "./components/conainerFluidExampleComponent";
import ProjectComponent from "./components/projectComponent";
const projectData = [
    {
    title: 'The Robot Factory Project',
    description: 'In this project, I set up a back-end API services using Django for an imaginary Robot factory',
    technologies: ['python', 'django', 'sql', 'auth tokens', 'backend', 'apis', 'docker', 'zappa'],
    github: 'https://github.com/jmckeeota/Django_Project',
    instance: '',
    picture: 'robot.png'
    },
    {
    title: 'ECS Terraform Project',
    description: 'Here, I\'ve set up Terraform code to bring up a somewhat complicated network with ECS load balancing. ',
    technologies: ['terraform', 'ECS', 'aws', 'load balancing'],
    github: 'https://github.com/jmckeeota/terraform_3_tier_ecs_example',
    instance: '',
    picture: 'terraform.png'
    },
    {
    title: 'Food Fixer',
    description: 'An app that helps you prepare for meals in a unique way',
    technologies: ['django', 'aws', 'python', 'terraform'],
    github: '',
    instance: '',
    picture: 'foodFixer.png'
    }
]

ReactDOM.render(
    <div>
        <div>
       <PresentationComponent />
       </div>
        {projectData.map((pageData) => (
        <div><ProjectComponent data={pageData} /></div>
      ))}
        
</div>
, document.getElementById('root')
);