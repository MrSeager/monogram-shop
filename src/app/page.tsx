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
//Spring
import { useSpring, animated } from '@react-spring/web';

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

export default async function Home() {
  const { sectionTwoItems, sectionFourItems } = await getData();
  
  return (
    <Container fluid className="min-vh-100 user-select-none px-0">
      <MGSectionOne />
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
