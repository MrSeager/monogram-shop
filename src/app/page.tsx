import { Metadata } from 'next';
//Components
import './style.css';
import MGSectionOne from "../components/MGSectionOne";
import MGSectionTwo from "../components/MGSectionTwo";
import MGSectionThree from "../components/MGSectionThree";
import MGSectionFour from "../components/MGSectionFour";
import type { ShopItem } from '@/types/ShopItem';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';

import fs from 'fs';
import path from 'path';

type ShopData = {
  sectionTwoItems: ShopItem[];
  sectionFourItems: ShopItem[];
};

async function getData(): Promise<ShopData> {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const json = JSON.parse(fileContents);
  return {
    sectionTwoItems: json.SectionTwoItems,
    sectionFourItems: json.SectionFourItems,
  };
}

export const generateMetadata = (): Metadata => {
  return {
    title: 'Monogram Shop Training Exercise',
    description: 'Used Next.js, React, Bootstrap, React Spring and TypeScript',
    openGraph: {
      title: 'Welcome to My Shop',
      description: 'Used Next.js, React, Bootstrap, React Spring and TypeScript',
      url: 'https://monogram-shop.vercel.app/',
      siteName: 'Monogram Shop Training Exercise',
      images: [
        {
          url: 'https://images.pexels.com/photos/542552/pexels-photo-542552.jpeg', // must be absolute
          width: 1200,
          height: 630,
          alt: 'Shop preview image',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Welcome to Monogram Shop Example',
      description: 'Used Next.js, React, Bootstrap, React Spring and TypeScript',
      images: ['https://images.pexels.com/photos/542552/pexels-photo-542552.jpeg'],
    },
  };
};

export default async function Home() {
  const { sectionTwoItems, sectionFourItems } = await getData();
  
  return (
    <Container fluid className="min-vh-100 user-select-none px-0">
      <MGSectionOne
        imgClass={'cs-bg-image'}
      />
      <MGSectionTwo 
        itemsData={sectionTwoItems}
      />
      <MGSectionThree />
      <MGSectionFour 
        itemsData={sectionFourItems}
      />
    </Container>
  );
}
