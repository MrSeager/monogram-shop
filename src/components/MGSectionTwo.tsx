//Components
import MGItem from './MGItem';
import type { ShopItem } from '@/types/ShopItem';
//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

interface MGSectionTwoProps {
    itemsData: ShopItem[];
}

export default function MGSectionTwo({ itemsData }: MGSectionTwoProps) {
    return(
        <Container className="px-0 my-5">
            <Row className="mx-0">
                {itemsData.map(item => (
                    <Col key={item.id} lg={6} xs={12} className='p-3'>
                        <MGItem 
                            item={item} 
                            disOn={true}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}