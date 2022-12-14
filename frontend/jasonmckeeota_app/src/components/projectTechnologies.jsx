import './projectTechnologies.css'

function ProjectTechnologies({ data }) {
  return (
    <div>
    {data.technologies.map((technology) => (
       <p key={technology} id="techList">{technology}, </p> 
      ))}
  </div>)
}

export default ProjectTechnologies;
