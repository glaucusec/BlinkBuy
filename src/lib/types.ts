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
