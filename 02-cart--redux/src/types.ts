export type ProductType = {
  id: string;
  title: string;
  price: number;
  inventory: number;
  image: string;
};

export type LineItem = ProductType & {
  quantity: number;
};
