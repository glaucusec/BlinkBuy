export function calculateDiscountPercentage(mrp: number, sale: number): number {
  const discountAmount = mrp - sale;
  const discountPercentage = (discountAmount / mrp) * 100;
  return Math.round(discountPercentage);
}

export function titleCase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
