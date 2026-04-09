import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Link, Navigate, useParams } from "react-router-dom";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import {
  getRelatedShopProducts,
  getShopProductById,
  type ShopProductReview,
} from "../../data/shopData";
import {
  ShopBreadcrumbCurrent,
  ShopBreadcrumbLink,
  ShopBreadcrumbs,
  ShopCartBadge,
  ShopHeroShell,
  ShopMain,
  ShopPageShell,
  ShopProductGrid,
  ShopResultsCopy,
  ShopStars,
  ShopSurface,
} from "../../style/shop/shopStyle";
import {
  ShopDetailActionRow,
  ShopDetailBodyGrid,
  ShopDetailCategory,
  ShopDetailContent,
  ShopDetailHighlight,
  ShopDetailHighlightList,
  ShopDetailInfoColumn,
  ShopDetailMainVisual,
  ShopDetailMetaCard,
  ShopDetailMetaGrid,
  ShopDetailMetaLabel,
  ShopDetailMetaValue,
  ShopDetailParagraph,
  ShopDetailPrice,
  ShopDetailRatingRow,
  ShopDetailSection,
  ShopDetailSectionTitle,
  ShopDetailSummary,
  ShopDetailTabButton,
  ShopDetailTabRail,
  ShopDetailThumb,
  ShopDetailThumbRail,
  ShopDetailTitle,
  ShopDetailTopGrid,
  ShopDetailVisualColumn,
  ShopPrimaryCta,
  ShopQuantityButton,
  ShopQuantityControl,
  ShopQuantityValue,
  ShopRelatedHeader,
  ShopRelatedSection,
  ShopReviewAuthor,
  ShopReviewBody,
  ShopReviewCard,
  ShopReviewFieldGrid,
  ShopReviewForm,
  ShopReviewHeader,
  ShopReviewInput,
  ShopReviewList,
  ShopReviewMeta,
  ShopReviewSelect,
  ShopReviewSubmit,
  ShopReviewTextarea,
  ShopReviewTitle,
  ShopSpecCard,
  ShopSpecGrid,
  ShopSpecLabel,
  ShopSpecValue,
} from "../../style/shop/shopDetailStyle";
import ShopProductCardView from "./product-card";
import ShopProductIconGraphic from "./product-icon";
import { useShopCart } from "./shop-context";

type DetailTab = "description" | "reviews" | "shipping";
type VisualTone = "soft" | "blue" | "midnight";

interface ReviewFormState {
  name: string;
  email: string;
  rating: string;
  comment: string;
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const linkStyle = { textDecoration: "none" };
const visualTones: VisualTone[] = ["soft", "blue", "midnight"];

const initialReviewForm: ReviewFormState = {
  name: "",
  email: "",
  rating: "5",
  comment: "",
};

const ShopDetailPage = () => {
  const { productId } = useParams();
  const product = useMemo(
    () => (productId ? getShopProductById(productId) : null),
    [productId]
  );
  const relatedProducts = useMemo(
    () => (productId ? getRelatedShopProducts(productId, 4) : []),
    [productId]
  );
  const [activeTab, setActiveTab] = useState<DetailTab>("description");
  const [activeVisual, setActiveVisual] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [reviewForm, setReviewForm] = useState<ReviewFormState>(initialReviewForm);
  const [reviews, setReviews] = useState<ShopProductReview[]>([]);
  const { addToCart, cartCount } = useShopCart();

  const pageNavLinks = useMemo(
    () =>
      (navLinks as Array<{ label: string; path?: string }>).map((linkItem) =>
        linkItem.label === "Shop"
          ? { ...linkItem, path: "/shop" }
          : linkItem
      ),
    []
  );

  useEffect(() => {
    if (product) {
      setReviews(product.reviews);
      setActiveTab("description");
      setActiveVisual(0);
      setQuantity(1);
      setReviewForm(initialReviewForm);
    }
  }, [product]);

  if (!product) {
    return <Navigate replace to="/shop" />;
  }

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  const handleReviewChange =
    (field: keyof ReviewFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setReviewForm((currentForm) => ({
        ...currentForm,
        [field]: event.target.value,
      }));
    };

  const handleSubmitReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!reviewForm.name.trim() || !reviewForm.comment.trim()) {
      return;
    }

    const nextReview: ShopProductReview = {
      id: `${product.id}-review-${Date.now()}`,
      author: reviewForm.name.trim(),
      role: "Community review",
      rating: Number(reviewForm.rating),
      title: "Fresh customer feedback",
      body: reviewForm.comment.trim(),
      date: "March 29, 2026",
    };

    setReviews((currentReviews) => [nextReview, ...currentReviews]);
    setReviewForm(initialReviewForm);
    setActiveTab("reviews");
  };

  return (
    <ShopPageShell>
      <ShopHeroShell>
        <SiteHeader navLinks={pageNavLinks} searchPlaceholder="Search parts or accessories" />
      </ShopHeroShell>

      <ShopMain>
        <ShopSurface>
          <ShopBreadcrumbs>
            <ShopBreadcrumbLink as={Link} style={linkStyle} to="/">
              Home
            </ShopBreadcrumbLink>
            <span>/</span>
            <ShopBreadcrumbLink as={Link} style={linkStyle} to="/shop">
              Shop
            </ShopBreadcrumbLink>
            <span>/</span>
            <ShopBreadcrumbCurrent>{product.name}</ShopBreadcrumbCurrent>
          </ShopBreadcrumbs>

          <ShopDetailTopGrid>
            <ShopDetailVisualColumn>
              <ShopDetailThumbRail>
                {visualTones.map((tone, index) => (
                  <ShopDetailThumb
                    key={tone}
                    onClick={() => setActiveVisual(index)}
                    type="button"
                    $active={activeVisual === index}
                    $tone={tone}
                  >
                    <ShopProductIconGraphic icon={product.icon} size={36} />
                  </ShopDetailThumb>
                ))}
              </ShopDetailThumbRail>

              <ShopDetailMainVisual $tone={visualTones[activeVisual]}>
                <ShopProductIconGraphic icon={product.icon} size={110} />
              </ShopDetailMainVisual>
            </ShopDetailVisualColumn>

            <ShopDetailInfoColumn>
              <ShopDetailCategory>{product.categoryLabel}</ShopDetailCategory>
              <ShopDetailTitle>{product.name}</ShopDetailTitle>
              <ShopDetailRatingRow>
                <ShopStars>
                  {Array.from({ length: 5 }, (_, index) => (
                    <StarRoundedIcon
                      fontSize="inherit"
                      key={`${product.id}-detail-star-${index}`}
                      sx={{
                        opacity: index < product.rating ? 1 : 0.25,
                        fontSize: "16px",
                      }}
                    />
                  ))}
                </ShopStars>
                <span>{product.reviewCount} reviews</span>
                <span>{product.brand}</span>
              </ShopDetailRatingRow>
              <ShopDetailPrice>{formatPrice(product.price)}</ShopDetailPrice>
              <ShopDetailSummary>{product.summary}</ShopDetailSummary>

              <ShopDetailActionRow>
                <ShopQuantityControl>
                  <ShopQuantityButton
                    onClick={() => setQuantity((currentValue) => Math.max(1, currentValue - 1))}
                    type="button"
                  >
                    <RemoveRoundedIcon fontSize="small" />
                  </ShopQuantityButton>
                  <ShopQuantityValue>{quantity}</ShopQuantityValue>
                  <ShopQuantityButton
                    onClick={() => setQuantity((currentValue) => currentValue + 1)}
                    type="button"
                  >
                    <AddRoundedIcon fontSize="small" />
                  </ShopQuantityButton>
                </ShopQuantityControl>

                <ShopPrimaryCta onClick={handleAddToCart} type="button">
                  <ShoppingCartOutlinedIcon fontSize="small" />
                  Add to Cart
                </ShopPrimaryCta>

                <ShopCartBadge as={Link} style={linkStyle} to="/shop/cart">
                  <ShoppingCartOutlinedIcon fontSize="small" />
                  {cartCount} items
                </ShopCartBadge>
              </ShopDetailActionRow>

              <ShopDetailMetaGrid>
                <ShopDetailMetaCard>
                  <ShopDetailMetaLabel>Availability</ShopDetailMetaLabel>
                  <ShopDetailMetaValue>{product.availability}</ShopDetailMetaValue>
                </ShopDetailMetaCard>
                <ShopDetailMetaCard>
                  <ShopDetailMetaLabel>Shipping</ShopDetailMetaLabel>
                  <ShopDetailMetaValue>{product.shipping}</ShopDetailMetaValue>
                </ShopDetailMetaCard>
                <ShopDetailMetaCard>
                  <ShopDetailMetaLabel>Compatibility</ShopDetailMetaLabel>
                  <ShopDetailMetaValue>{product.compatibility}</ShopDetailMetaValue>
                </ShopDetailMetaCard>
              </ShopDetailMetaGrid>
            </ShopDetailInfoColumn>
          </ShopDetailTopGrid>

          <ShopDetailBodyGrid>
            <ShopDetailTabRail>
              <ShopDetailTabButton
                onClick={() => setActiveTab("description")}
                type="button"
                $active={activeTab === "description"}
              >
                Description
              </ShopDetailTabButton>
              <ShopDetailTabButton
                onClick={() => setActiveTab("reviews")}
                type="button"
                $active={activeTab === "reviews"}
              >
                Reviews
              </ShopDetailTabButton>
              <ShopDetailTabButton
                onClick={() => setActiveTab("shipping")}
                type="button"
                $active={activeTab === "shipping"}
              >
                Shipping
              </ShopDetailTabButton>
            </ShopDetailTabRail>

            <ShopDetailContent>
              {activeTab === "description" ? (
                <>
                  <ShopDetailSection>
                    <ShopDetailSectionTitle>Description</ShopDetailSectionTitle>
                    {product.details.map((paragraph) => (
                      <ShopDetailParagraph key={paragraph}>{paragraph}</ShopDetailParagraph>
                    ))}
                  </ShopDetailSection>

                  <ShopDetailSection>
                    <ShopDetailSectionTitle>Highlights</ShopDetailSectionTitle>
                    <ShopDetailHighlightList>
                      {product.highlights.map((highlight) => (
                        <ShopDetailHighlight key={highlight}>{highlight}</ShopDetailHighlight>
                      ))}
                    </ShopDetailHighlightList>
                  </ShopDetailSection>

                  <ShopDetailSection>
                    <ShopDetailSectionTitle>Details</ShopDetailSectionTitle>
                    <ShopSpecGrid>
                      {product.specifications.map((specification) => (
                        <ShopSpecCard key={specification.label}>
                          <ShopSpecLabel>{specification.label}</ShopSpecLabel>
                          <ShopSpecValue>{specification.value}</ShopSpecValue>
                        </ShopSpecCard>
                      ))}
                    </ShopSpecGrid>
                  </ShopDetailSection>
                </>
              ) : null}

              {activeTab === "reviews" ? (
                <>
                  <ShopDetailSection>
                    <ShopDetailSectionTitle>Customer Reviews</ShopDetailSectionTitle>
                    <ShopReviewList>
                      {reviews.map((review) => (
                        <ShopReviewCard key={review.id}>
                          <ShopReviewHeader>
                            <div>
                              <ShopReviewAuthor>{review.author}</ShopReviewAuthor>
                              <ShopReviewMeta>
                                {review.role} - {review.date}
                              </ShopReviewMeta>
                            </div>
                            <ShopDetailRatingRow>
                              <ShopStars>
                                {Array.from({ length: 5 }, (_, index) => (
                                  <StarRoundedIcon
                                    fontSize="inherit"
                                    key={`${review.id}-star-${index}`}
                                    sx={{
                                      opacity: index < review.rating ? 1 : 0.25,
                                      fontSize: "15px",
                                    }}
                                  />
                                ))}
                              </ShopStars>
                            </ShopDetailRatingRow>
                          </ShopReviewHeader>
                          <ShopReviewTitle>{review.title}</ShopReviewTitle>
                          <ShopReviewBody>{review.body}</ShopReviewBody>
                        </ShopReviewCard>
                      ))}
                    </ShopReviewList>
                  </ShopDetailSection>

                  <ShopDetailSection>
                    <ShopDetailSectionTitle>Leave a Reply</ShopDetailSectionTitle>
                    <ShopReviewForm onSubmit={handleSubmitReview}>
                      <ShopReviewFieldGrid>
                        <ShopReviewInput
                          onChange={handleReviewChange("name")}
                          placeholder="Your name"
                          type="text"
                          value={reviewForm.name}
                        />
                        <ShopReviewInput
                          onChange={handleReviewChange("email")}
                          placeholder="Email address"
                          type="email"
                          value={reviewForm.email}
                        />
                        <ShopReviewSelect
                          onChange={handleReviewChange("rating")}
                          value={reviewForm.rating}
                        >
                          {[5, 4, 3, 2, 1].map((ratingValue) => (
                            <option key={ratingValue} value={ratingValue}>
                              {ratingValue} stars
                            </option>
                          ))}
                        </ShopReviewSelect>
                      </ShopReviewFieldGrid>
                      <ShopReviewTextarea
                        onChange={handleReviewChange("comment")}
                        placeholder="Write your review"
                        value={reviewForm.comment}
                      />
                      <ShopReviewSubmit type="submit">Post Comment</ShopReviewSubmit>
                    </ShopReviewForm>
                  </ShopDetailSection>
                </>
              ) : null}

              {activeTab === "shipping" ? (
                <ShopDetailSection>
                  <ShopDetailSectionTitle>Shipping & Returns</ShopDetailSectionTitle>
                  <ShopDetailParagraph>
                    {product.shipping}. Orders are packed with dealer-grade labeling so
                    fitment and order tracing remain clear after dispatch.
                  </ShopDetailParagraph>
                  <ShopDetailParagraph>
                    Returns are accepted on unused items within 14 days of delivery.
                    Electrical parts and special-order fitment items are checked against
                    SKU and condition before approval.
                  </ShopDetailParagraph>
                  <ShopDetailParagraph>
                    If you are unsure about compatibility, use the product SKU and brand
                    notes above before placing the order. That keeps the shop flow fast
                    and avoids preventable returns.
                  </ShopDetailParagraph>
                </ShopDetailSection>
              ) : null}
            </ShopDetailContent>
          </ShopDetailBodyGrid>

          <ShopRelatedSection>
            <ShopRelatedHeader>
              <div>
                <ShopDetailSectionTitle>Related Products</ShopDetailSectionTitle>
                <ShopResultsCopy>
                  Same-category and top-rated parts that fit the current catalog flow.
                </ShopResultsCopy>
              </div>
              <ShopBreadcrumbLink as={Link} style={linkStyle} to="/shop">
                Back to shop <ArrowForwardRoundedIcon fontSize="small" />
              </ShopBreadcrumbLink>
            </ShopRelatedHeader>

            <ShopProductGrid>
              {relatedProducts.map((relatedProduct) => (
                <ShopProductCardView
                  key={relatedProduct.id}
                  onAddToCart={(item) => addToCart(item.id, 1)}
                  product={relatedProduct}
                />
              ))}
            </ShopProductGrid>
          </ShopRelatedSection>
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

export default ShopDetailPage;
