import { Product } from "@prisma/client";

export const caulculateProductTotalPrice = (product: Product) => {
  if (product.discountPercentage === 0) {
    return Number(product.price);
  }

  const discount = Number(product.price) * (product.discountPercentage / 100);

  return Number(product.price) - discount;
};

export const formatCurrency = (valeu: number): string => {
  return `
    R$ ${Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(valeu)}`;
};
