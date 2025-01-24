export type ScreenSizeType = "MOBILE" | "TABLET" | "DESKTOP";

//상품 getAPI 쿼리 파라미터
export interface GetProdApiQueryParams {
  page?: number;
  limit?: number;
  sort?: string;
  keyword?: string;
}

//상품 postAPI 쿼리 파라미터
export interface PostProdApiQueryParams {
  name: string;
  description?: string;
  price?: string;
  tags?: string[];
  images?: string[];
}

//getAPI 응답 객체
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
  favoritesCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductList {
  ProductList: Product[];
  page: number;
  limit: number;
  sort: string;
  keyword: string;
  status: number;
  totalPages: number;
  totalProducts: number;
}

export type ProductState = Pick<ProductList, "ProductList" | "totalPages">;

//정렬 기준
export interface OrderByItem {
  value: string;
  name: string;
}

export interface OrderByType {
  RECENT: OrderByItem;
  FAVORITE: OrderByItem;
}
