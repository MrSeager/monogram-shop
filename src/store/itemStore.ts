import { create } from 'zustand';
import type { ShopItem } from '@/types/ShopItem';

interface ItemStore {
  selectedItem: ShopItem | null;
  setSelectedItem: (item: ShopItem) => void;
}

export const useItemStore = create<ItemStore>((set) => ({
  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));
