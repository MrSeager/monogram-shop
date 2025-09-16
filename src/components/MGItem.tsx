"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
//Components
import { useHover, useFadeInHover } from './anim';
//Bootstrap
import { Badge, Row, Col, Card } from 'react-bootstrap';
//Spring
import { animated } from '@react-spring/web';

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
    const router = useRouter();
    const [hovered, isHovered] = useState<boolean>(false);
    const imgBuy1 = 'https://raw.githubusercontent.com/MrSeager/monogram-shop/refs/heads/main/src/app/images/pexels-karolina-grabowska-5632396.jpg';
    const imgBuy2 = 'https://raw.githubusercontent.com/MrSeager/monogram-shop/refs/heads/main/src/app/images/pexels-karolina-grabowska.jpg';

    const hoverAnim = useHover(hovered, 1.05);
    const fadeInAnim = useFadeInHover(hovered, .9);

    const handleItemBtn = () => {
        router.push(`/item/${item.id}?name=${item.name}&img=${item.img}&cost=${item.cost}&description=${item.discription}&preorder=${item['pre-order']}`)
    }

    return (
        <animated.div 
            onMouseEnter={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}
            onClick={handleItemBtn}
            style={hoverAnim} 
            className='card bg-transparent border-0 position-relevant'
        >
            <Badge bg='custom' className={`z-3 text-black fs-6 px-4 mt-3 cs-badge rounded-0 text-uppercase position-absolute ${item['pre-order'] !== true ? 'd-none' : '' }`}>Pre-order</Badge>
            
            <animated.img 
                src={item.img} 
                alt={item.name} 
                className='rounded-0 card-img-top'    
            />
            <animated.img
                src={disOn ? imgBuy1 : imgBuy2}
                alt={`${item.name} hover`}
                style={{ ...fadeInAnim, position: 'absolute', top: 0, left: 0, width: '100%' }}
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
        </animated.div>
    )
}