import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./main.jsx";
import { BrowserRouter } from "react-router-dom";
import MyBar from "./components/myBar";
import Container from "react-bootstrap/esm/Container";


const projectData = [
    {
    id: '1',
    title: 'The Robot Factory Project',
    description: 'In this project, I set up a back-end API services using Django for an imaginary Robot factory',
    technologies: ['python', 'django', 'sql', 'auth tokens', 'backend', 'apis', 'docker', 'zappa'],
    github: 'https://github.com/jmckeeota/Django_Project',
    instance: '',
    picture: 'robot.png',
    background: 'circuit2.jpg'
    },
    {
    id: '2',
    title: 'ECS Terraform Project',
    description: 'Here, I\'ve set up Terraform code to bring up a somewhat complicated network with ECS load balancing. ',
    technologies: ['terraform', 'ECS', 'aws', 'load balancing'],
    github: 'https://github.com/jmckeeota/terraform_3_tier_ecs_example',
    instance: '',
    picture: 'terraform.png',
    background: 'planet2.jpg'
    },
    {
    id: '3',
    title: 'Food Fixer',
    description: 'An app that helps you prepare for meals in a unique way',
    technologies: ['django', 'aws', 'python', 'terraform'],
    github: 'https://github.com/jmckeeota/foodFixer',
    instance: 'https://tqhtyaz1ui.execute-api.us-west-2.amazonaws.com/foodFixerDev/app_models/',
    picture: 'foodFixer.png',
    background: 'chocolate.png'
    }
];

const dynamicIntroData = {
    name: 'Jason',
    intro: 'Thank you for taking the time to view this personalized version of my website specifically for your company! I\'ve ensured to include examples here of my abilities to code javascript, backend services, and AWS terraform code. Please click on the links above to see more about each project'
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <div className="p-4 bg-primary"></div>
        <BrowserRouter>
        <MyBar data={projectData}/>
        <div>
            <Main projectData={projectData} dynamicIntroData={dynamicIntroData} />
        </div>
    </BrowserRouter>
</React.StrictMode>
);