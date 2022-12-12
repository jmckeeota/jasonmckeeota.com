
function PresentationText(props) {
    return ( 
        <div class="text-justify-left text-wrap" style={{width: '20rem'}}>
        <h1> Hello, {props.name} </h1>
        <p>{props.intro}</p>
        </div>
     );
}

export default PresentationText ;