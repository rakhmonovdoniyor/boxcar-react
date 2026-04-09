import React, { useMemo, useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

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
  ShopCartBadge,
  ShopEmptyState,
  ShopHeroShell,
  ShopMain,
  ShopPageShell,
  ShopResultsCopy,
  ShopSurface,
  ShopTitle,
  ShopTitleGroup,
} from "../../style/shop/shopStyle";
import {
  ShopCouponInput,
  ShopCouponRow,
  ShopFlowActionRow,
  ShopFlowGhostButton,
  ShopFlowGrid,
  ShopFlowPrimaryButton,
  ShopIconGhostButton,
  ShopInlineQuantity,
  ShopInlineQuantityButton,
  ShopInlineQuantityValue,
  ShopProductCell,
  ShopProductCellBody,
  ShopProductCellMeta,
  ShopProductCellTitle,
  ShopProductMiniVisual,
  ShopSummaryCard,
  ShopSummaryList,
  ShopSummaryRow,
  ShopSummaryTitle,
  ShopTableBody,
  ShopTableCard,
  ShopTableHeader,
  ShopTableRow,
  ShopTableValue,
} from "../../style/shop/shopFlowStyle";
import ShopProductIconGraphic from "./product-icon";
import { useShopCart } from "./shop-context";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const visualTones = ["soft", "blue", "midnight"] as const;

const ShopCartPage = () => {
  const {
    appliedCoupon,
    cartCount,
    clearCart,
    discount,
    items,
    removeItem,
    shipping,
    subtotal,
    tax,
    total,
    updateQuantity,
    applyCoupon,
  } = useShopCart();
  const [couponCode, setCouponCode] = useState(appliedCoupon ?? "");
  const [couponMessage, setCouponMessage] = useState("");

  const pageNavLinks = useMemo(
    () =>
      (navLinks as Array<{ label: string; path?: string }>).map((linkItem) =>
        linkItem.label === "Shop"
          ? { ...linkItem, path: "/shop" }
          : linkItem
      ),
    []
  );

  const handleCouponApply = () => {
    if (!couponCode.trim()) {
      setCouponMessage("Use SAVE10 or FREESHIP");
      return;
    }

    const accepted = applyCoupon(couponCode);

    setCouponMessage(
      accepted
        ? `Coupon applied: ${couponCode.trim().toUpperCase()}`
        : "Invalid coupon. Try SAVE10 or FREESHIP"
    );
  };

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
            <ShopBreadcrumbCurrent>Cart</ShopBreadcrumbCurrent>
          </ShopBreadcrumbs>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "28px",
            }}
          >
            <ShopTitleGroup>
              <ShopTitle>Shop Cart</ShopTitle>
              <ShopResultsCopy>
                {cartCount} items currently queued for checkout
              </ShopResultsCopy>
            </ShopTitleGroup>

            <ShopCartBadge as={Link} to="/shop/cart">
              <ShoppingCartOutlinedIcon fontSize="small" />
              {cartCount} items
            </ShopCartBadge>
          </div>

          {items.length ? (
            <ShopFlowGrid>
              <div>
                <ShopTableCard>
                  <ShopTableHeader>
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                    <span />
                  </ShopTableHeader>

                  <ShopTableBody>
                    {items.map((item, index) => (
                      <ShopTableRow key={item.productId}>
                        <ShopProductCell>
                          <ShopProductMiniVisual
                            $tone={visualTones[index % visualTones.length]}
                          >
                            <ShopProductIconGraphic icon={item.product.icon} size={34} />
                          </ShopProductMiniVisual>
                          <ShopProductCellBody>
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/shop/${item.product.id}`}
                            >
                              <ShopProductCellTitle>
                                {item.product.name}
                              </ShopProductCellTitle>
                            </Link>
                            <ShopProductCellMeta>
                              {item.product.brand} - {item.product.sku}
                            </ShopProductCellMeta>
                          </ShopProductCellBody>
                        </ShopProductCell>

                        <ShopTableValue>{formatPrice(item.product.price)}</ShopTableValue>

                        <ShopInlineQuantity>
                          <ShopInlineQuantityButton
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity - 1)
                            }
                            type="button"
                          >
                            <RemoveRoundedIcon fontSize="small" />
                          </ShopInlineQuantityButton>
                          <ShopInlineQuantityValue>
                            {item.quantity}
                          </ShopInlineQuantityValue>
                          <ShopInlineQuantityButton
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1)
                            }
                            type="button"
                          >
                            <AddRoundedIcon fontSize="small" />
                          </ShopInlineQuantityButton>
                        </ShopInlineQuantity>

                        <ShopTableValue>{formatPrice(item.lineTotal)}</ShopTableValue>

                        <ShopIconGhostButton
                          onClick={() => removeItem(item.productId)}
                          type="button"
                        >
                          <CloseRoundedIcon fontSize="small" />
                        </ShopIconGhostButton>
                      </ShopTableRow>
                    ))}
                  </ShopTableBody>
                </ShopTableCard>

                <ShopCouponRow>
                  <ShopCouponInput
                    onChange={(event) => setCouponCode(event.target.value)}
                    placeholder="Coupon code"
                    type="text"
                    value={couponCode}
                  />
                  <ShopFlowGhostButton onClick={handleCouponApply} type="button">
                    Apply Coupon
                  </ShopFlowGhostButton>
                </ShopCouponRow>

                {couponMessage ? (
                  <ShopResultsCopy style={{ marginTop: "10px" }}>
                    {couponMessage}
                  </ShopResultsCopy>
                ) : null}

                <ShopFlowActionRow>
                  <ShopFlowGhostButton as={Link} to="/shop">
                    Continue Shopping
                  </ShopFlowGhostButton>
                  <ShopFlowGhostButton onClick={clearCart} type="button">
                    Clear Cart
                  </ShopFlowGhostButton>
                </ShopFlowActionRow>
              </div>

              <ShopSummaryCard>
                <ShopSummaryTitle>Cart Totals</ShopSummaryTitle>
                <ShopSummaryList>
                  <ShopSummaryRow>
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </ShopSummaryRow>
                  <ShopSummaryRow>
                    <span>Shipping</span>
                    <span>{formatPrice(shipping)}</span>
                  </ShopSummaryRow>
                  <ShopSummaryRow>
                    <span>Tax</span>
                    <span>{formatPrice(tax)}</span>
                  </ShopSummaryRow>
                  {discount ? (
                    <ShopSummaryRow>
                      <span>Discount</span>
                      <span>-{formatPrice(discount)}</span>
                    </ShopSummaryRow>
                  ) : null}
                  <ShopSummaryRow $emphasis>
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </ShopSummaryRow>
                </ShopSummaryList>

                <ShopFlowPrimaryButton as={Link} to="/shop/checkout">
                  Proceed to Checkout
                </ShopFlowPrimaryButton>
              </ShopSummaryCard>
            </ShopFlowGrid>
          ) : (
            <EmptyCartState />
          )}
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

const EmptyCartState = () => {
  return (
    <ShopEmptyState>
      <h3>Your cart is empty</h3>
      <p>Add a few products from the shop list to continue into checkout.</p>
      <div style={{ marginTop: "18px" }}>
        <ShopFlowPrimaryButton as={Link} to="/shop">
          Browse Products
        </ShopFlowPrimaryButton>
      </div>
    </ShopEmptyState>
  );
};

export default ShopCartPage;
