import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Link } from "react-router-dom";

import type { ShopProduct } from "../../data/shopData";
import {
  ShopAddButton,
  ShopPrice,
  ShopPriceNote,
  ShopProductBody,
  ShopProductCard,
  ShopProductFooter,
  ShopProductName,
  ShopProductSku,
  ShopProductSummary,
  ShopProductVisual,
  ShopRatingRow,
  ShopStars,
} from "../../style/shop/shopStyle";
import ShopProductIconGraphic from "./product-icon";

interface ShopProductCardProps {
  product: ShopProduct;
  onAddToCart: (product: ShopProduct) => void;
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const linkStyle = { textDecoration: "none" };

const ShopProductCardView = ({
  product,
  onAddToCart,
}: ShopProductCardProps) => {
  return (
    <ShopProductCard>
      <Link aria-label={product.name} style={linkStyle} to={`/shop/${product.id}`}>
        <ShopProductVisual>
          <ShopProductIconGraphic icon={product.icon} />
        </ShopProductVisual>
      </Link>

      <ShopProductBody>
        <ShopRatingRow>
          <ShopStars>
            {Array.from({ length: 5 }, (_, index) => (
              <StarRoundedIcon
                fontSize="inherit"
                key={`${product.id}-star-${index}`}
                sx={{
                  opacity: index < product.rating ? 1 : 0.25,
                  fontSize: "15px",
                }}
              />
            ))}
          </ShopStars>
          <span>({product.reviewCount})</span>
        </ShopRatingRow>

        <Link style={linkStyle} to={`/shop/${product.id}`}>
          <ShopProductName>{product.name}</ShopProductName>
        </Link>
        <ShopProductSku>{product.sku}</ShopProductSku>
        <ShopProductSummary>{product.summary}</ShopProductSummary>
      </ShopProductBody>

      <ShopProductFooter>
        <div>
          <ShopPrice>{formatPrice(product.price)}</ShopPrice>
          <ShopPriceNote>Dealer-approved aftermarket fit</ShopPriceNote>
        </div>
        <ShopAddButton onClick={() => onAddToCart(product)} type="button">
          <ShoppingCartOutlinedIcon fontSize="small" />
          Add to Cart
        </ShopAddButton>
      </ShopProductFooter>
    </ShopProductCard>
  );
};

export default ShopProductCardView;
