export interface Product {
  lastLowestPrice: number;
  SKU: number;
  marketName: string;
}

export interface EAN {
  productName: string;
  data: Array<Product>;
  marketCount: number;
  priceRange: number;
}

export interface Data {
  Ean: EAN
}