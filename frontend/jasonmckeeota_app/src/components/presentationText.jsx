
function PresentationText({intro}) {
    return ( 
        <div className="text-justify-left text-wrap" style={{maxWidth: '30rem'}}>
        <h1> Hello, {intro.name} </h1>
        <p>{intro.intro}</p>
        </div>
     );
}

export default PresentationText ;