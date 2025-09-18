"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
//Components
import MGSectionOne from '@/components/MGSectionOne';
import type { ShopItem } from '@/types/ShopItem';
//Bootstrap
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
//Spring
import { animated } from '@react-spring/web';
import { useParams } from 'next/navigation';

export default function ItemPage() {
  const params = useParams();
  const id = params?.id;

  const [item, setItem] = useState<ShopItem | null>(null);

  useEffect(() => {
    async function fetchItem() {
      const res = await fetch('/data.json');
      const data = await res.json();
      const foundItem = [...data.SectionTwoItems, ...data.SectionFourItems].find(
        (item: ShopItem) => item.id === Number(id)
      );

      setItem(foundItem || null);
    }

    fetchItem();
  }, [id]);

  return (
    <Container fluid className='min-vh-100 px-0'>
      <MGSectionOne />
      {item ? (
        <Container className='py-5 d-flex flex-column gap-3'>
          <Button 
            href="/"
            className='align-self-start cs-btn cs-tc-banner border-0 cs-transition text-uppercase'
          >
            Back
          </Button>
          <Row>
            <Col lg={4} xs={12}>
              <Image 
                src={item.img} 
                alt={item.name} 
                layout="responsive"
                width={900}
                height={900}
              />
            </Col>
            <Col lg={8} xs={12} className='d-flex flex-column justify-content-center gap-2'>
              <h1>{item.name}</h1>
              <p>{item.discription}</p>
              <Container className='px-0 d-flex flex-row align-items-center justify-content-between'>
                <h2 className='m-0'>${item.cost}</h2>
                <Badge bg='custom' className={`z-3 text-black fs-6 px-4 mt-3 cs-badge rounded-0 text-uppercase ${item['pre-order'] !== true ? 'd-none' : '' }`}>Pre-order</Badge>
              </Container>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Loading item...</p>
      )}
    </Container>
  );
}