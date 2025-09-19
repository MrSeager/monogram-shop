"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
//Components
import { useHover, useFadeInHover } from './anim';
import type { ShopItem } from '@/types/ShopItem';
//Bootstrap
import { Badge, Row, Col, Card } from 'react-bootstrap';
//Spring
import { animated } from '@react-spring/web';

interface MGItemProps {
    item: ShopItem;
    disOn: boolean;
}

export default function MGItem ({ item, disOn }: MGItemProps) {
    const router = useRouter();
    const [hovered, isHovered] = useState<boolean>(false);
    const [hoveredImg, isHoveredImg] = useState<boolean>(false);
    const imgBuy1 = 'https://raw.githubusercontent.com/MrSeager/monogram-shop/refs/heads/main/src/images/pexels-karolina-grabowska-5632396.jpg';
    const imgBuy2 = 'https://raw.githubusercontent.com/MrSeager/monogram-shop/refs/heads/main/src/images/pexels-karolina-grabowska.jpg';

    const hoverAnim = useHover(hovered, 1.05);
    const fadeInAnim = useFadeInHover(hoveredImg, .9);

    const handleItemBtn = () => {
        sessionStorage.setItem('selectedItem', JSON.stringify(item));
        router.push(`/item/${item.id}`);
    };

    return (
        <animated.div 
            onMouseEnter={() => isHovered(true)}
            onMouseLeave={() => isHovered(false)}
            onClick={handleItemBtn}
            style={hoverAnim} 
            className='card bg-transparent border-0 position-relevant'
        >
            <Badge bg='custom' className={`z-3 text-black fs-6 px-4 mt-3 cs-badge rounded-0 text-uppercase position-absolute ${item['pre-order'] !== true ? 'd-none' : '' }`}>Pre-order</Badge>
            
            <Image 
                src={item.img} 
                alt={item.name} 
                layout="responsive"
                width={900}
                height={900}
                className='rounded-0 card-img-top'    
            />
            <animated.img
                onMouseEnter={() => isHoveredImg(true)}
                onMouseLeave={() => isHoveredImg(false)}
                src={disOn ? imgBuy1 : imgBuy2}
                alt={`${item.name} hover`}
                style={{ ...fadeInAnim, position: 'absolute', top: 0, left: 0, width: '100%' }}
                className='rounded-0'
            />

            <Card.Body as={Row} className='px-0'>
                <Col xs={10}>
                    <Card.Subtitle className='fs-4 text-uppercase'>{item.name}</Card.Subtitle>
                    {disOn 
                        ? <Card.Text className='text-secondary'>{item.description}</Card.Text>
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