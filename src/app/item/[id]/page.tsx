"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
//Components
import type { ShopItem } from '@/types/ShopItem';
//Bootstrap
import { Container } from 'react-bootstrap';
//Spring
import { animated } from '@react-spring/web';

interface ItemPageProps {
    params: { id: number }
}

export default function ItemPage({ params }: ItemPageProps) {
  const { id } = params;

  return (
    <Container className='min-vh-100'>
      <h1>Item Page</h1>
      <p>ID: {id}</p>
    </Container>
  );
}
