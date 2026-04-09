import React, { useState } from "react";

import BrandsSection from "./brands-section";
import CtaGridSection from "./cta-grid-section";
import FooterSection from "./footer-section";
import HeroSection from "./hero-section";
import HomeHeader from "./header";
import InventorySection from "./inventory-section";
import LatestBlogPostsSection from "./latest-blog-posts-section";
import PopularMakesSection from "./popular-makes-section";
import SellSection from "./sell-section";
import ShopWaySection from "./shop-way-section";
import TestimonialsSection from "./testimonials-section";
import WhyChooseUsSection from "./why-choose-us-section";
import {
  BodyCenter,
  BodyContent,
  BigCon,
  Container,
} from "../../style/homepagestyle/homestyle";
import {
  brands,
  ctaPanels,
  conditionOptions,
  footerColumns,
  footerMeta,
  featuredVehicles,
  filterOptions,
  inventoryTabs,
  latestBlogPosts,
  navLinks,
  popularMakesByBrand,
  sellOffer,
  sellStats,
  shopByColumns,
  socialLinks,
  testimonial,
  whyChooseUs,
} from "../../data/homeData";

const defaultFilters = {
  make: "Any Make",
  model: "Any Model",
  category: "Any Category",
  priceRange: "Any Price",
};

const matchesPriceRange = (price, priceRange) => {
  switch (priceRange) {
    case "Under $25k":
      return price < 25000;
    case "$25k - $40k":
      return price >= 25000 && price <= 40000;
    case "$40k+":
      return price > 40000;
    default:
      return true;
  }
};

const HomePage = () => {
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [filters, setFilters] = useState(defaultFilters);
  const [selectedInventoryView, setSelectedInventoryView] = useState(
    inventoryTabs[0]
  );

  const modelOptions = [
    defaultFilters.model,
    ...new Set(
      featuredVehicles
        .filter(
          (vehicle) =>
            filters.make === defaultFilters.make || vehicle.brand === filters.make
        )
        .map((vehicle) => vehicle.model)
    ),
  ];

  const heroFilterOptions = {
    ...filterOptions,
    model: modelOptions,
  };

  const visibleVehicles = featuredVehicles.filter((vehicle) => {
    const matchesCondition =
      selectedCondition === "All" || vehicle.condition === selectedCondition;
    const matchesMake =
      filters.make === defaultFilters.make || vehicle.brand === filters.make;
    const matchesModel =
      filters.model === defaultFilters.model || vehicle.model === filters.model;
    const matchesCategory =
      filters.category === defaultFilters.category ||
      vehicle.category === filters.category;
    const matchesBudget = matchesPriceRange(vehicle.price, filters.priceRange);

    return (
      matchesCondition &&
      matchesMake &&
      matchesModel &&
      matchesCategory &&
      matchesBudget
    );
  });

  const inventoryVehicles = visibleVehicles.filter((vehicle) => {
    switch (selectedInventoryView) {
      case "New Cars":
        return vehicle.condition === "New";
      case "Used Cars":
        return vehicle.condition === "Used";
      case "In Stock":
        return vehicle.inStock;
      default:
        return true;
    }
  });

  const displayedVehicles = inventoryVehicles.slice(0, 5);

  const hasActiveFilters =
    selectedCondition !== "All" ||
    filters.make !== defaultFilters.make ||
    filters.model !== defaultFilters.model ||
    filters.category !== defaultFilters.category ||
    filters.priceRange !== defaultFilters.priceRange;

  const handleFilterChange = (field, value) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      model:
        field === "make" ? defaultFilters.model : currentFilters.model,
      [field]: value,
    }));
  };

  const handleBrandSelect = (brandName) => {
    if (brandName === defaultFilters.make) {
      handleFilterChange("make", defaultFilters.make);
      return;
    }

    handleFilterChange(
      "make",
      filters.make === brandName ? defaultFilters.make : brandName
    );
  };

  const handleCategorySelect = (categoryName) => {
    handleFilterChange(
      "category",
      filters.category === categoryName ? defaultFilters.category : categoryName
    );
  };

  const handleResetFilters = () => {
    setSelectedCondition("All");
    setFilters(defaultFilters);
    setSelectedInventoryView(inventoryTabs[0]);
  };

  const handleSearch = () => {
    document
      .getElementById("inventory")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <BigCon>
      <Container>
        <HomeHeader navLinks={navLinks} />
        <HeroSection
          conditionOptions={conditionOptions}
          filterOptions={heroFilterOptions}
          filters={filters}
          onCategorySelect={handleCategorySelect}
          onConditionChange={setSelectedCondition}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          onSearch={handleSearch}
          resultsCount={visibleVehicles.length}
          selectedCondition={selectedCondition}
        />
      </Container>

      <BodyCenter>
        <BodyContent>
          <BrandsSection
            brands={brands}
            onSelectBrand={handleBrandSelect}
            selectedMake={filters.make}
          />
          <InventorySection
            hasActiveFilters={hasActiveFilters}
            onResetFilters={handleResetFilters}
            onViewChange={setSelectedInventoryView}
            selectedView={selectedInventoryView}
            totalCount={inventoryVehicles.length}
            vehicles={displayedVehicles}
            viewOptions={inventoryTabs}
          />
          <SellSection offer={sellOffer} stats={sellStats} />
          <WhyChooseUsSection items={whyChooseUs} />
          <PopularMakesSection sections={popularMakesByBrand} />
          <ShopWaySection columns={shopByColumns} />
          <TestimonialsSection testimonial={testimonial} />
          <LatestBlogPostsSection posts={latestBlogPosts} />
          <CtaGridSection panels={ctaPanels} />
        </BodyContent>
      </BodyCenter>
      <FooterSection
        columns={footerColumns}
        footerMeta={footerMeta}
        socialLinks={socialLinks}
      />
    </BigCon>
  );
};

export default HomePage;
