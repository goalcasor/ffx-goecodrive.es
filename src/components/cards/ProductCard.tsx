// ProductCard.tsx
import React from "react";
import Image from "next/image";
import styles from "@/styles/components/cards/product_card.module.scss";
import { ProductInterface } from "@/data/interfaces/ProductInterface";
import Button from "../buttons/PrimaryButton";
interface ProductCardProps {
  product: ProductInterface;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className={styles.product_card}>
      <div 
        className={styles.product_image}
        style={{
          backgroundImage: `url(${product.image})`
        }}
      >
      </div>
      <h2 className={styles.product_title}>{product.title}</h2>
      <p className={styles.product_price}>Price: € {product.price}</p>
      <a
      /*   onClick={() => alert('Hello Buy ')}
        primary */
        href={product.url}
      >

        <h3 className={styles.button_text}>Comprar ahora</h3>
      </a>
    </article>
  );
};

export default ProductCard;
