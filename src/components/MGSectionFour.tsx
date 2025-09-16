//Components
import MGItem from './MGItem';
import type { ShopItem } from '@/types/ShopItem';
//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

interface MGSectionFourProps {
    itemsData: ShopItem[];
}

export default function MGSectionFour({ itemsData }: MGSectionFourProps) {
    return(
        <Container className="px-0 my-5">
            <Row className="mx-0">
                {itemsData.map(item => (
                    <Col key={item.id} lg={4} xs={12} className='p-3'>
                        <MGItem 
                            item={item} 
                            disOn={false}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}