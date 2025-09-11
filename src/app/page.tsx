import Image from "next/image";
import { GetStaticProps } from "next";
//Components
import './style.css';
import MGSectionOne from "./components/MGSectionOne";
import MGSectionTwo from "./components/MGSectionTwo";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Spring
import { useSpring, animated } from '@react-spring/web';

interface ShopItem {
  id: number;
  img: string;
  name: string;
  discription: string;
  cost: number,
  "pre-order": boolean
}

interface HomeProps {
  sectionTwoData: ShopItem[];
}

async function getData(): Promise<ShopItem[]> {
  const res = await fetch('https://raw.githubusercontent.com/MrSeager/monogram-shop/refs/heads/main/src/app/data.json');
  const json = await res.json();
  return json.SectionTwoItems;
}

export default async function Home() {
  const sectionTwoData = await getData();
  
  return (
    <Container fluid className="min-vh-100 user-select-none px-0">
      <MGSectionOne />
      <MGSectionTwo 
        itemsData={sectionTwoData}
      />
    </Container>
  );
}
