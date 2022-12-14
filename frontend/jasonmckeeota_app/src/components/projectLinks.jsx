import Container from "react-bootstrap/esm/Container";
import './projectLinks.css'

function ProjectLinks({data}) {
    const handleGithubClick = (link) => {
        window.open(data.github, '_blank');;
      };
    const handleInstanceClick = (link) => {
        console.log('Instance clicked');
      };

    function renderGithubButtons(){
        if (data.github.length !== 0) return <div className="p-3 d-inline"><button type="button" onClick={handleGithubClick} className="btn btn-primary active">Show me the github!</button></div>
        return <div className="p-3 d-inline"><button type="button" className="btn btn-primary disabled">No github up</button></div>
    }
    function renderInstanceButton(){
        if (data.instance.length !== 0) return <div className="p-3 d-inline"><button type="button" onclick={handleInstanceClick} className="btn btn-primary active">Show it to me in action!</button></div>
        return <div className="p-3 d-inline"><button type="button" className="btn btn-primary disabled">No instance up</button></div>
    }
    
    return ( 
        <Container className="p-3">
        {renderGithubButtons()}
        {renderInstanceButton()}
        </Container>
     );
}

export default ProjectLinks;