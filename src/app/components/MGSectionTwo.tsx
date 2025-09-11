import Image from "next/image";
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

interface MGSectionTwoProps {
    itemsData: ShopItem[];
}

export default function MGSectionTwo({ itemsData }: MGSectionTwoProps) {
    return(
        <Container>
            <Row>
                {itemsData.map(item => (
                    <Col key={item.id} lg={6} xs={12}>
                        <Image 
                            src={item.img} 
                            layout="responsive"
                            width={900}
                            height={600} 
                            alt={item.name} 
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}