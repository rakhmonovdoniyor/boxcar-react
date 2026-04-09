import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
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
  shopCategories,
  shopPriceBounds,
  shopProducts,
  shopSortOptions,
  type ShopCategoryId,
  type ShopProduct,
  type ShopSortValue,
} from "../../data/shopData";
import {
  ShopBreadcrumbCurrent,
  ShopBreadcrumbLink,
  ShopBreadcrumbs,
  ShopCartBadge,
  ShopCatalog,
  ShopContentGrid,
  ShopEmptyState,
  ShopFilterGroup,
  ShopFilterTitle,
  ShopHeader,
  ShopHeroShell,
  ShopMain,
  ShopOptionButton,
  ShopOptionCount,
  ShopOptionList,
  ShopPageButton,
  ShopPageInfo,
  ShopPageShell,
  ShopPagination,
  ShopPriceHeader,
  ShopPriceInput,
  ShopPriceInputs,
  ShopPriceValue,
  ShopProductGrid,
  ShopRangeInput,
  ShopRangeProgress,
  ShopRangeSlider,
  ShopRangeTrack,
  ShopResultsCopy,
  ShopSidebar,
  ShopSortLabel,
  ShopSortSelect,
  ShopSurface,
  ShopTitle,
  ShopTitleGroup,
  ShopToolbar,
} from "../../style/shop/shopStyle";
import ShopProductCardView from "./product-card";
import { useShopCart } from "./shop-context";

const PAGE_SIZE = 9;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<ShopCategoryId>("all");
  const [minPrice, setMinPrice] = useState<number>(shopPriceBounds.min);
  const [maxPrice, setMaxPrice] = useState<number>(shopPriceBounds.max);
  const [sortBy, setSortBy] = useState<ShopSortValue>("featured");
  const [currentPage, setCurrentPage] = useState(1);
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

  const categoryCounts = useMemo(() => {
    return shopCategories.map((category) => ({
      ...category,
      count:
        category.id === "all"
          ? shopProducts.length
          : shopProducts.filter((product) => product.category === category.id).length,
    }));
  }, []);

  const filteredProducts = useMemo(() => {
    return shopProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      return matchesCategory && matchesPrice;
    });
  }, [maxPrice, minPrice, selectedCategory]);

  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];

    if (sortBy === "lowest-price") {
      products.sort((left, right) => left.price - right.price);
    } else if (sortBy === "highest-price") {
      products.sort((left, right) => right.price - left.price);
    } else if (sortBy === "name") {
      products.sort((left, right) => left.name.localeCompare(right.name));
    }

    return products;
  }, [filteredProducts, sortBy]);

  const pageCount = Math.max(1, Math.ceil(sortedProducts.length / PAGE_SIZE));

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, minPrice, maxPrice, sortBy]);

  useEffect(() => {
    if (currentPage > pageCount) {
      setCurrentPage(pageCount);
    }
  }, [currentPage, pageCount]);

  const pagedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;

    return sortedProducts.slice(startIndex, startIndex + PAGE_SIZE);
  }, [currentPage, sortedProducts]);

  const rangeMinPercent =
    ((minPrice - shopPriceBounds.min) /
      (shopPriceBounds.max - shopPriceBounds.min)) *
    100;
  const rangeMaxPercent =
    ((maxPrice - shopPriceBounds.min) /
      (shopPriceBounds.max - shopPriceBounds.min)) *
    100;

  const resultsStart = sortedProducts.length
    ? (currentPage - 1) * PAGE_SIZE + 1
    : 0;
  const resultsEnd = Math.min(currentPage * PAGE_SIZE, sortedProducts.length);

  const handleMinRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = clamp(Number(event.target.value), shopPriceBounds.min, maxPrice);
    setMinPrice(nextValue);
  };

  const handleMaxRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = clamp(Number(event.target.value), minPrice, shopPriceBounds.max);
    setMaxPrice(nextValue);
  };

  const handleMinInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = Number(event.target.value);

    if (Number.isNaN(parsedValue)) {
      return;
    }

    setMinPrice(clamp(parsedValue, shopPriceBounds.min, maxPrice));
  };

  const handleMaxInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const parsedValue = Number(event.target.value);

    if (Number.isNaN(parsedValue)) {
      return;
    }

    setMaxPrice(clamp(parsedValue, minPrice, shopPriceBounds.max));
  };

  const handleAddToCart = (product: ShopProduct) => {
    addToCart(product.id, 1);
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
            <ShopBreadcrumbCurrent>Shop List</ShopBreadcrumbCurrent>
          </ShopBreadcrumbs>

          <ShopHeader>
            <ShopTitleGroup>
              <ShopTitle>Shop List</ShopTitle>
              <ShopResultsCopy>
                Showing {resultsStart} to {resultsEnd} of {sortedProducts.length} results
              </ShopResultsCopy>
            </ShopTitleGroup>

            <ShopToolbar>
              <ShopCartBadge as={Link} to="/shop/cart">
                <ShoppingCartOutlinedIcon fontSize="small" />
                {cartCount} items
              </ShopCartBadge>
              <ShopSortLabel>
                Sort by
                <ShopSortSelect
                  onChange={(event) => setSortBy(event.target.value as ShopSortValue)}
                  value={sortBy}
                >
                  {shopSortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </ShopSortSelect>
              </ShopSortLabel>
            </ShopToolbar>
          </ShopHeader>

          <ShopContentGrid>
            <ShopSidebar>
              <ShopFilterGroup>
                <ShopFilterTitle>Categories</ShopFilterTitle>
                <ShopOptionList>
                  {categoryCounts.map((category) => (
                    <ShopOptionButton
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      type="button"
                      $active={selectedCategory === category.id}
                    >
                      <span>{category.label}</span>
                      <ShopOptionCount>{category.count}</ShopOptionCount>
                    </ShopOptionButton>
                  ))}
                </ShopOptionList>
              </ShopFilterGroup>

              <ShopFilterGroup>
                <ShopPriceHeader>
                  <span>Price</span>
                  <ShopPriceValue>
                    {formatPrice(minPrice)} - {formatPrice(maxPrice)}
                  </ShopPriceValue>
                </ShopPriceHeader>

                <ShopPriceInputs>
                  <ShopPriceInput
                    min={shopPriceBounds.min}
                    max={maxPrice}
                    onChange={handleMinInputChange}
                    type="number"
                    value={minPrice}
                  />
                  <ShopPriceInput
                    min={minPrice}
                    max={shopPriceBounds.max}
                    onChange={handleMaxInputChange}
                    type="number"
                    value={maxPrice}
                  />
                </ShopPriceInputs>

                <ShopRangeSlider>
                  <ShopRangeTrack />
                  <ShopRangeProgress
                    style={{
                      left: `${rangeMinPercent}%`,
                      right: `${100 - rangeMaxPercent}%`,
                    }}
                  />
                  <ShopRangeInput
                    min={shopPriceBounds.min}
                    max={shopPriceBounds.max}
                    onChange={handleMinRangeChange}
                    value={minPrice}
                  />
                  <ShopRangeInput
                    min={shopPriceBounds.min}
                    max={shopPriceBounds.max}
                    onChange={handleMaxRangeChange}
                    value={maxPrice}
                  />
                </ShopRangeSlider>
              </ShopFilterGroup>
            </ShopSidebar>

            <ShopCatalog>
              {pagedProducts.length ? (
                <ShopProductGrid>
                  {pagedProducts.map((product) => (
                    <ShopProductCardView
                      key={product.id}
                      onAddToCart={handleAddToCart}
                      product={product}
                    />
                  ))}
                </ShopProductGrid>
              ) : (
                <ShopEmptyState>
                  <h3>No products matched the current filters</h3>
                  <p>Broaden the price range or switch the category on the left.</p>
                </ShopEmptyState>
              )}

              <ShopPagination>
                <ShopPageButton
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  type="button"
                >
                  <ArrowBackRoundedIcon fontSize="small" />
                </ShopPageButton>
                {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
                  <ShopPageButton
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    type="button"
                    $active={currentPage === page}
                  >
                    {page}
                  </ShopPageButton>
                ))}
                <ShopPageButton
                  disabled={currentPage === pageCount}
                  onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))}
                  type="button"
                >
                  <ArrowForwardRoundedIcon fontSize="small" />
                </ShopPageButton>
              </ShopPagination>

              <ShopPageInfo>
                Showing results {resultsStart}-{resultsEnd} out of {sortedProducts.length}
              </ShopPageInfo>
            </ShopCatalog>
          </ShopContentGrid>
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

export default ShopPage;
