//Components
import MGItem from './MGItem';
//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

interface ShopItem {
  id: number;
  img: string;
  name: string;
  discription: string;
  cost: number,
  "pre-order": boolean
}

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