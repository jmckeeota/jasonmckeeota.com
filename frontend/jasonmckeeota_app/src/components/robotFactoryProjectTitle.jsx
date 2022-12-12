
function RobotFactoryProjectTitle({technologies}) {
    return ( 
        <ul>{technologies.map(technology => (
            <li>{technology}</li> ))}
            </ul>
    )


}

export default RobotFactoryProjectTitle;