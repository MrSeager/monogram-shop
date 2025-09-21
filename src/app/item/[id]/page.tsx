import { Metadata } from 'next';
import path from 'path';
import fs from 'fs/promises';
//Components
import Image from 'next/image';
import MGSectionOne from '@/components/MGSectionOne';
import type { ShopItem } from '@/types/ShopItem';
//Bootstrap
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
//Icons
import { SlBasket } from "react-icons/sl";

async function getItemById(id: string): Promise<ShopItem | undefined> {
  const itemId = Number(id);
  if (isNaN(itemId)) return undefined;

  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const json = JSON.parse(fileContents);
  const allItems: ShopItem[] = [...json.SectionTwoItems, ...json.SectionFourItems];

  return allItems.find(item => item.id === itemId);
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const item = await getItemById(params.id);

  if (!item) {
    return {
      title: 'Item Not Found – Monogram Shop',
      description: 'This item does not exist in our training shop.',
    };
  }

  return {
    title: `${item.name} – Monogram Shop`,
    description: item.description,
    openGraph: {
      title: `${item.name} – Monogram Shop`,
      description: item.description,
      url: `https://monogram-shop.vercel.app/item/${item.id}`,
      siteName: 'Monogram Shop Training Exercise',
      images: [
        {
          url: item.img,
          width: 1200,
          height: 630,
          alt: item.name,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.name} – Monogram Shop`,
      description: item.description,
      images: [item.img],
    },
  };
}

export default async function ItemPage({ params }: { params: { id: string } }) {
  const item = await getItemById(params.id);
  return (
    <Container fluid className='min-vh-100 user-select-none px-0'>
      <MGSectionOne
        imgClass={'cs-bg-image-2'}
      />
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
            <Col lg={8} xs={12} className='d-flex flex-column justify-content-between gap-2'>
              <h1 className='m-0'>{item.name}</h1>
              <p className='m-0'>{item.description}</p>
              <Container className='px-0 d-flex flex-row align-items-center justify-content-between'>
                <h2 className='m-0'>${item.cost}</h2>
                <Badge bg='custom' className={`text-black fs-6 px-4 cs-badge rounded-0 text-uppercase ${item['pre-order'] !== true ? 'd-none' : '' }`}>Pre-order</Badge>
              </Container>
              <Button className='cs-btn cs-tc-banner border-0 cs-transition text-uppercase rounded-pill fw-bold'><SlBasket size={20} className='me-2' /> Buy</Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Loading item...</p>
      )}
    </Container>
  );
}
