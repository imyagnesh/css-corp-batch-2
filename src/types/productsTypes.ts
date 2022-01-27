export enum ProductCategoryEnum {
  MensClothing = "men's clothing",
  Jewelry = 'jewelry',
  Electronics = 'electronics',
  WomansClothing = "women's clothing",
}

export type RatingType = {
  rate: number;
  count: number;
};

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategoryEnum;
  image: string;
  rating: RatingType;
};
