import './projectTechnologies.css'

function ProjectTechnologies({ data }) {
  return (
    <ul id="techList">
      {data.technologies.map((technology) => (
        <li>{technology}</li>
      ))}
    </ul>
  );
}

export default ProjectTechnologies;
