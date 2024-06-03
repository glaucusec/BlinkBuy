// Context API types
export type QueryParamsType = {
  priceRanges: string[];
  colors: string[];
  sizes: string[];
  availability: string[];
};

export type QueryContextPropsType = {
  q: string;
  queryChangeHandler: (newQuery: string) => void;
  queryParams: QueryParamsType;
  queryParamsChangeHandler: (
    filterType: keyof QueryParamsType,
    value: string
  ) => void;
  isChecked: (filterType: keyof QueryParamsType, value: string) => boolean;
};

// Session Types
export type SessionJwtType = {
  userId: string;
  expiresAt: Date;
};

export type ProductType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  discountedPrice: number;
  handle?: string | null;
  reviewsAverage?: number | null;
  reviewsCount?: number | null;
  price: number;
  isActive: boolean | null;
  isBestSeller?: boolean | null;
  published?: boolean | null;
  images: string[];
  sizes: string[];
};

export type CartItemType = {
  id: string;
  title: string;
  price: number;
  discountedPrice: number;
  image: string;
  size: string;
  quantity: number;
};
