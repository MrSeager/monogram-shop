"use client";
//Bootstrap
import { Badge, Row, Col, Card } from 'react-bootstrap';

interface ShopItem {
  id: number;
  img: string;
  name: string;
  discription: string;
  cost: number,
  "pre-order": boolean
}

interface MGItemProps {
    item: ShopItem;
    disOn: boolean;
}


export default function MGItem ({ item, disOn }: MGItemProps) {
    return (
        <Card className='bg-transparent border-0 position-relevant'>
            <Badge bg='custom' className={`text-black fs-6 px-4 mt-3 cs-badge rounded-0 text-uppercase position-absolute ${item['pre-order'] !== true ? 'd-none' : '' }`}>Pre-order</Badge>
            <Card.Img 
                variant="top" 
                src={item.img} 
                alt={item.name} 
                className='rounded-0'    
            />
            <Card.Body as={Row} className='px-0'>
                <Col xs={10}>
                    <Card.Subtitle className='fs-4 text-uppercase'>{item.name}</Card.Subtitle>
                    {disOn 
                        ? <Card.Text className='text-secondary'>{item.discription}</Card.Text>
                        : ''
                    }
                </Col>
                <Col xs={2}>
                    <Card.Subtitle className='text-secondary text-end'>${item.cost}</Card.Subtitle>
                </Col>
            </Card.Body>
        </Card>
    )
}