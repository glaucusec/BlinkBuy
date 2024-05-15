export function calculateDiscountPercentage(mrp, sale) {
  const discountAmount = mrp - sale;
  const discountPercentage = (discountAmount / mrp) * 100;
  return Math.round(discountPercentage);
}

export function titleCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
