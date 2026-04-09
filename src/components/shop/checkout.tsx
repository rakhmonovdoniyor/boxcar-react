import React, { ChangeEvent, useMemo, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, Navigate, useNavigate } from "react-router-dom";

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
  ShopHeroShell,
  ShopMain,
  ShopPageShell,
  ShopResultsCopy,
  ShopSurface,
  ShopTitle,
  ShopTitleGroup,
} from "../../style/shop/shopStyle";
import {
  ShopCheckoutFieldGrid,
  ShopCheckoutForm,
  ShopCheckoutGrid,
  ShopCheckoutInput,
  ShopCheckoutSection,
  ShopCheckoutSectionTitle,
  ShopCheckoutSelect,
  ShopCheckoutSideCard,
  ShopCheckoutTextarea,
  ShopFlowPrimaryButton,
  ShopOrderList,
  ShopOrderRow,
  ShopPaymentCopy,
  ShopPaymentList,
  ShopPaymentOption,
  ShopPaymentTitle,
  ShopSummaryRow,
  ShopSummaryTitle,
} from "../../style/shop/shopFlowStyle";
import {
  useShopCart,
  type ShopCheckoutCustomer,
} from "./shop-context";

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const initialForm: ShopCheckoutCustomer = {
  firstName: "",
  lastName: "",
  company: "",
  country: "Uzbekistan",
  street: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  email: "",
  notes: "",
};

const paymentOptions = [
  {
    id: "bank-transfer",
    title: "Direct bank transfer",
    copy:
      "Make your payment directly into our bank account. Use your order ID as the payment reference.",
  },
  {
    id: "cash-delivery",
    title: "Cash on delivery",
    copy: "Pay when the order arrives and the parts are checked on receipt.",
  },
  {
    id: "paypal",
    title: "PayPal",
    copy: "Fast checkout for smaller accessory and maintenance orders.",
  },
];

const ShopCheckoutPage = () => {
  const {
    appliedCoupon,
    cartCount,
    discount,
    items,
    placeOrder,
    shipping,
    subtotal,
    tax,
    total,
  } = useShopCart();
  const navigate = useNavigate();
  const [form, setForm] = useState<ShopCheckoutCustomer>(initialForm);
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");
  const [validationMessage, setValidationMessage] = useState("");

  const pageNavLinks = useMemo(
    () =>
      (navLinks as Array<{ label: string; path?: string }>).map((linkItem) =>
        linkItem.label === "Shop"
          ? { ...linkItem, path: "/shop" }
          : linkItem
      ),
    []
  );

  if (!items.length) {
    return <Navigate replace to="/shop/cart" />;
  }

  const handleFieldChange =
    (field: keyof ShopCheckoutCustomer) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((currentForm) => ({
        ...currentForm,
        [field]: event.target.value,
      }));
    };

  const handlePlaceOrder = () => {
    const requiredFields = [
      form.firstName,
      form.lastName,
      form.street,
      form.city,
      form.state,
      form.zip,
      form.phone,
      form.email,
    ];

    if (requiredFields.some((fieldValue) => !fieldValue.trim())) {
      setValidationMessage("Complete the required billing fields before placing the order.");
      return;
    }

    const order = placeOrder(form, paymentMethod);

    if (order) {
      setValidationMessage("");
      navigate("/shop/complete");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handlePlaceOrder();
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
            <ShopBreadcrumbCurrent>Checkout</ShopBreadcrumbCurrent>
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
              <ShopTitle>Shop Checkout</ShopTitle>
              <ShopResultsCopy>
                Billing details and final payment review
              </ShopResultsCopy>
            </ShopTitleGroup>

            <ShopCartBadge as={Link} to="/shop/cart">
              <ShoppingCartOutlinedIcon fontSize="small" />
              {cartCount} items
            </ShopCartBadge>
          </div>

          <ShopCheckoutGrid>
            <ShopCheckoutForm onSubmit={handleSubmit}>
              <ShopCheckoutSection>
                <ShopCheckoutSectionTitle>Billing details</ShopCheckoutSectionTitle>
                <ShopCheckoutFieldGrid>
                  <ShopCheckoutInput
                    onChange={handleFieldChange("firstName")}
                    placeholder="First name"
                    required
                    type="text"
                    value={form.firstName}
                  />
                  <ShopCheckoutInput
                    onChange={handleFieldChange("lastName")}
                    placeholder="Last name"
                    required
                    type="text"
                    value={form.lastName}
                  />
                </ShopCheckoutFieldGrid>

                <ShopCheckoutInput
                  onChange={handleFieldChange("company")}
                  placeholder="Company name"
                  type="text"
                  value={form.company}
                />
                <ShopCheckoutSelect
                  onChange={handleFieldChange("country")}
                  value={form.country}
                >
                  <option>Uzbekistan</option>
                  <option>Kazakhstan</option>
                  <option>Kyrgyzstan</option>
                  <option>United Arab Emirates</option>
                </ShopCheckoutSelect>
                <ShopCheckoutInput
                  onChange={handleFieldChange("street")}
                  placeholder="House number and street name"
                  required
                  type="text"
                  value={form.street}
                />
                <ShopCheckoutFieldGrid>
                  <ShopCheckoutInput
                    onChange={handleFieldChange("city")}
                    placeholder="Town / City"
                    required
                    type="text"
                    value={form.city}
                  />
                  <ShopCheckoutInput
                    onChange={handleFieldChange("state")}
                    placeholder="State"
                    required
                    type="text"
                    value={form.state}
                  />
                </ShopCheckoutFieldGrid>
                <ShopCheckoutFieldGrid>
                  <ShopCheckoutInput
                    onChange={handleFieldChange("zip")}
                    placeholder="ZIP Code"
                    required
                    type="text"
                    value={form.zip}
                  />
                  <ShopCheckoutInput
                    onChange={handleFieldChange("phone")}
                    placeholder="Phone"
                    required
                    type="tel"
                    value={form.phone}
                  />
                </ShopCheckoutFieldGrid>
                <ShopCheckoutInput
                  onChange={handleFieldChange("email")}
                  placeholder="Email address"
                  required
                  type="email"
                  value={form.email}
                />
              </ShopCheckoutSection>

              <ShopCheckoutSection>
                <ShopCheckoutSectionTitle>Additional information</ShopCheckoutSectionTitle>
                <ShopCheckoutTextarea
                  onChange={handleFieldChange("notes")}
                  placeholder="Order notes"
                  value={form.notes}
                />
              </ShopCheckoutSection>
            </ShopCheckoutForm>

            <ShopCheckoutSideCard>
              <ShopCheckoutSectionTitle>Your order</ShopCheckoutSectionTitle>

              <ShopOrderList>
                {items.map((item) => (
                  <ShopOrderRow key={item.productId}>
                    <span>
                      {item.product.name} x {item.quantity}
                    </span>
                    <strong>{formatPrice(item.lineTotal)}</strong>
                  </ShopOrderRow>
                ))}
              </ShopOrderList>

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
                  <span>{appliedCoupon}</span>
                  <span>-{formatPrice(discount)}</span>
                </ShopSummaryRow>
              ) : null}
              <ShopSummaryRow $emphasis>
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </ShopSummaryRow>

              <div>
                <ShopSummaryTitle style={{ marginBottom: "12px", fontSize: "18px" }}>
                  Payment
                </ShopSummaryTitle>
                <ShopPaymentList>
                  {paymentOptions.map((option) => (
                    <ShopPaymentOption
                      key={option.id}
                      $active={paymentMethod === option.id}
                    >
                      <input
                        checked={paymentMethod === option.id}
                        name="paymentMethod"
                        onChange={() => setPaymentMethod(option.id)}
                        type="radio"
                        value={option.id}
                      />
                      <ShopPaymentTitle>{option.title}</ShopPaymentTitle>
                      <ShopPaymentCopy>{option.copy}</ShopPaymentCopy>
                    </ShopPaymentOption>
                  ))}
                </ShopPaymentList>
              </div>

              {validationMessage ? (
                <ShopResultsCopy>{validationMessage}</ShopResultsCopy>
              ) : null}

              <ShopFlowPrimaryButton onClick={handlePlaceOrder} type="button">
                Place Order
              </ShopFlowPrimaryButton>
            </ShopCheckoutSideCard>
          </ShopCheckoutGrid>
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

export default ShopCheckoutPage;
