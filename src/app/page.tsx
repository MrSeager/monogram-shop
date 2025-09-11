import Image from "next/image";
//Components
import './style.css';
import MGSectionOne from "./components/MGSectionOne";
import MGSectionTwo from "./components/MGSectionTwo";
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
//Spring
 import { useSpring, animated } from '@react-spring/web';

export default function Home() {
  return (
    <Container fluid className="min-vh-100 user-select-none px-0">
      <MGSectionOne />
      <MGSectionTwo />
    </Container>
  );
}
