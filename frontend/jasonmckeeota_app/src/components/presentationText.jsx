
function PresentationText({intro}) {
    return ( 
        <div className="text-justify-left text-wrap" style={{width: '20rem'}}>
        <h1> Hello, {intro.name} </h1>
        <p>{intro.intro}</p>
        </div>
     );
}

export default PresentationText ;