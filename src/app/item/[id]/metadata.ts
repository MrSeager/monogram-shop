// src/app/item/[id]/metadata.ts
import { Metadata } from 'next';
import path from 'path';
import fs from 'fs';
import type { ShopItem } from '@/types/ShopItem';

async function getItemById(id: string): Promise<ShopItem | undefined> {
  const itemId = Number(id);
  if (isNaN(itemId)) return undefined;

  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf-8');
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
