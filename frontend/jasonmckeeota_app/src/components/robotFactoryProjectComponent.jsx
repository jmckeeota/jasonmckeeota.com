import RobotFactoryProjectTitle from './robotFactoryProjectTitle.jsx'

const technologies = [
    'python', 'django', 'sql', 'auth tokens'
];
function RobotFactoryProjectComponent() {

    return ( 
        <div>
            <RobotFactoryProjectTitle technologies={technologies} />
        </div>
     );
}

export default RobotFactoryProjectComponent;