function ProjectDescription({data}) {
    return ( 
        <div>
        <p>{data.description}</p>
        <div>{data.github ? <a href={data.github}>Show me the Github! </a> : (<p>No github yet.</p>)}</div>
        <div>{data.instance ? <a href={data.instance}>See it in action here! </a> : (<p>No instances running yet.</p>)}</div>
        </div>

     );
}

export default ProjectDescription