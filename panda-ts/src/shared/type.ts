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
  description: string;
  price: number;
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
  productList: Product[];
  page: number;
  limit: number;
  sort: string;
  keyword: string;
  status: number;
  totalPages: number;
  totalProducts: number;
}

//정렬 기준
export interface OrderByItem {
  value: string;
  name: string;
}

export interface OrderByType {
  RECENT: OrderByItem;
  FAVORITE: OrderByItem;
}
