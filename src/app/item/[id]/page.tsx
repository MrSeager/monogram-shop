"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
//Components

//Bootstrap
import { Container } from 'react-bootstrap';
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

interface ItemPageProps {
    item: ShopItem;
}

export default function ItemPage({ item }: ItemPageProps) {
  const id = item.id;

  return (
    <Container>
      <h1>Item Page</h1>
      <p>ID: {id}</p>
    </Container>
  );
}
