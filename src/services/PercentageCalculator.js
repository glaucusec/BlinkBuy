function calculateDiscountPercentage(mrp, sale) {
  const discountAmount = mrp - sale;
  const discountPercentage = (discountAmount / mrp) * 100;
  return discountPercentage;
}

export default calculateDiscountPercentage;
