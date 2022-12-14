import Container from 'react-bootstrap/Container';
import "./containerFluidExample.css";

function ContainerFluidExample() {
  return (
    <div>
    <Container fluid>
        <ul class="flex-container">
            <li class="flex-item">1</li>
            <li class="flex-item">2</li>
            <li class="flex-item">3</li>
            <li class="flex-item">4</li>
            <li class="flex-item">5</li>
        </ul>
    </Container>
    </div>
  );
}

export default ContainerFluidExample;