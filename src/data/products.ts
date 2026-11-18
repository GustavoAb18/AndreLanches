import type { ProductImageKey } from '../assets';

export type ProductCategory = 'Lanches' | 'Porções' | 'Bebidas';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: ProductImageKey;
  category: ProductCategory;
};

/**
 * Cardápio extraído do site original.
 * Os preços foram mantidos como estavam na versão web.
 */
export const products: Product[] = [
  {
    id: 'x-salada',
    name: 'X-Salada',
    description: 'Pão macio, hambúrguer, queijo, alface, tomate e maionese da casa.',
    price: 8,
    image: 'xSalada',
    category: 'Lanches',
  },
  {
    id: 'cheddar',
    name: 'Cheddar',
    description: 'Hambúrguer suculento com cheddar cremoso e cebola caramelizada.',
    price: 17,
    image: 'cheddar',
    category: 'Lanches',
  },
  {
    id: 'batata-frita',
    name: 'Batata Frita',
    description: 'Porção crocante de batatas douradas, perfeita para dividir.',
    price: 7,
    image: 'batataFrita',
    category: 'Porções',
  },
  {
    id: 'x-burguer',
    name: 'X-Burguer',
    description: 'O clássico: pão, hambúrguer, queijo e muito sabor.',
    price: 1.5,
    image: 'xBurguer',
    category: 'Lanches',
  },
  {
    id: 'big-tower',
    name: 'Big Tower',
    description: 'Duplo hambúrguer, queijo, bacon e molho especial no pão com gergelim.',
    price: 20.5,
    image: 'bigTower',
    category: 'Lanches',
  },
  {
    id: 'x-frango',
    name: 'X-Frango',
    description: 'Frango empanado, queijo e requeijão cremoso.',
    price: 12.9,
    image: 'xFrango',
    category: 'Lanches',
  },
  {
    id: 'nuggets',
    name: 'Nuggets (8 un.)',
    description: 'Oito unidades de nuggets crocantes com molho à escolha.',
    price: 6.5,
    image: 'nuggets',
    category: 'Porções',
  },
  {
    id: 'refri',
    name: 'Refri (Lata)',
    description: 'Lata 350 ml, servida bem gelada.',
    price: 4.5,
    image: 'refri',
    category: 'Bebidas',
  },
  {
    id: 'sucos',
    name: 'Sucos',
    description: 'Vários sabores, feitos na hora.',
    price: 8.5,
    image: 'sucos',
    category: 'Bebidas',
  },
];

export function formatPrice(value: number) {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
}
