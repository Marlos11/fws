import { db } from "../_lib/prisma";
import ProductsItem from "./productItem";

const ProductList = async () => {
  const porducts = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,

    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });

  return (
    <div className="overFlow-x-scroll flex px-5 [&::-webkit-scrollbar]:hidden">
      {porducts.map((product) => (
        <ProductsItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
