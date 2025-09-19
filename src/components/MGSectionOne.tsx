//Bootstrap
import { Container } from 'react-bootstrap';

interface MGSectionOneProps {
    imgClass: string
}

export default function MGSectionOne({ imgClass = 'cs-bg-image' }: MGSectionOneProps) {
    return (
        <Container fluid className={`${imgClass} cs-tc-main d-flex flex-column align-items-center py-5`}>
            <h1 className="h2 text-center text-uppercase mt-5 pt-lg-5">A console for<br />
            every workflow</h1>
            <p className="text-center mb-5 pb-lg-5">Discover the perfect console for yours.</p>
        </Container>
    );
}