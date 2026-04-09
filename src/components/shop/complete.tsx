import React, { useMemo } from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Link, Navigate } from "react-router-dom";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import {
  ShopBreadcrumbCurrent,
  ShopBreadcrumbLink,
  ShopBreadcrumbs,
  ShopHeroShell,
  ShopMain,
  ShopPageShell,
  ShopSurface,
} from "../../style/shop/shopStyle";
import {
  ShopCompleteBadge,
  ShopCompleteCopy,
  ShopCompleteHero,
  ShopCompleteMetaCard,
  ShopCompleteMetaItem,
  ShopCompleteMetaLabel,
  ShopCompleteMetaValue,
  ShopCompleteShell,
  ShopCompleteTitle,
  ShopFlowGhostButton,
  ShopFlowPrimaryButton,
  ShopOrderList,
  ShopOrderRow,
  ShopSummaryCard,
  ShopSummaryRow,
  ShopSummaryTitle,
} from "../../style/shop/shopFlowStyle";
import { useShopCart } from "./shop-context";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const ShopOrderCompletePage = () => {
  const { clearLastOrder, lastOrder } = useShopCart();

  const pageNavLinks = useMemo(
    () =>
      (navLinks as Array<{ label: string; path?: string }>).map((linkItem) =>
        linkItem.label === "Shop"
          ? { ...linkItem, path: "/shop" }
          : linkItem
      ),
    []
  );

  if (!lastOrder) {
    return <Navigate replace to="/shop" />;
  }

  return (
    <ShopPageShell>
      <ShopHeroShell>
        <SiteHeader navLinks={pageNavLinks} searchPlaceholder="Search parts or accessories" />
      </ShopHeroShell>

      <ShopMain>
        <ShopSurface>
          <ShopBreadcrumbs>
            <ShopBreadcrumbLink as={Link} to="/">
              Home
            </ShopBreadcrumbLink>
            <span>/</span>
            <ShopBreadcrumbLink as={Link} to="/shop">
              Shop
            </ShopBreadcrumbLink>
            <span>/</span>
            <ShopBreadcrumbCurrent>Order Complete</ShopBreadcrumbCurrent>
          </ShopBreadcrumbs>

          <ShopCompleteShell>
            <ShopCompleteHero>
              <ShopCompleteBadge>
                <CheckRoundedIcon fontSize="small" />
              </ShopCompleteBadge>
              <ShopCompleteTitle>Your order is completed!</ShopCompleteTitle>
              <ShopCompleteCopy>
                Thank you. Your order has been received.
              </ShopCompleteCopy>
            </ShopCompleteHero>

            <ShopCompleteMetaCard>
              <ShopCompleteMetaItem>
                <ShopCompleteMetaLabel>Order Number</ShopCompleteMetaLabel>
                <ShopCompleteMetaValue>{lastOrder.orderNumber}</ShopCompleteMetaValue>
              </ShopCompleteMetaItem>
              <ShopCompleteMetaItem>
                <ShopCompleteMetaLabel>Date</ShopCompleteMetaLabel>
                <ShopCompleteMetaValue>{lastOrder.createdAt}</ShopCompleteMetaValue>
              </ShopCompleteMetaItem>
              <ShopCompleteMetaItem>
                <ShopCompleteMetaLabel>Total</ShopCompleteMetaLabel>
                <ShopCompleteMetaValue>{formatPrice(lastOrder.total)}</ShopCompleteMetaValue>
              </ShopCompleteMetaItem>
              <ShopCompleteMetaItem>
                <ShopCompleteMetaLabel>Payment</ShopCompleteMetaLabel>
                <ShopCompleteMetaValue>{lastOrder.paymentMethod}</ShopCompleteMetaValue>
              </ShopCompleteMetaItem>
            </ShopCompleteMetaCard>

            <ShopSummaryCard>
              <ShopSummaryTitle>Order details</ShopSummaryTitle>
              <ShopOrderList>
                {lastOrder.items.map((item) => (
                  <ShopOrderRow key={item.productId}>
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>
                    <strong>{formatPrice(item.lineTotal)}</strong>
                  </ShopOrderRow>
                ))}
              </ShopOrderList>

              <ShopSummaryRow>
                <span>Subtotal</span>
                <span>{formatPrice(lastOrder.subtotal)}</span>
              </ShopSummaryRow>
              <ShopSummaryRow>
                <span>Shipping</span>
                <span>{formatPrice(lastOrder.shipping)}</span>
              </ShopSummaryRow>
              <ShopSummaryRow>
                <span>Tax</span>
                <span>{formatPrice(lastOrder.tax)}</span>
              </ShopSummaryRow>
              {lastOrder.discount ? (
                <ShopSummaryRow>
                  <span>Discount</span>
                  <span>-{formatPrice(lastOrder.discount)}</span>
                </ShopSummaryRow>
              ) : null}
              <ShopSummaryRow $emphasis>
                <span>Total</span>
                <span>{formatPrice(lastOrder.total)}</span>
              </ShopSummaryRow>

              <div style={{ display: "grid", gap: "12px" }}>
                <ShopFlowPrimaryButton
                  as={Link}
                  onClick={clearLastOrder}
                  to="/shop"
                >
                  Continue Shopping
                </ShopFlowPrimaryButton>
                <ShopFlowGhostButton as={Link} to="/shop/cart">
                  Back to Cart
                </ShopFlowGhostButton>
              </div>
            </ShopSummaryCard>
          </ShopCompleteShell>
        </ShopSurface>
      </ShopMain>

      <FooterSection
        columns={footerColumns}
        footerMeta={footerMeta}
        socialLinks={socialLinks}
      />
    </ShopPageShell>
  );
};

export default ShopOrderCompletePage;
