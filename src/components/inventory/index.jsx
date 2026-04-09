import React, { useEffect, useMemo, useState } from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import {
  inventoryConditionOptions,
  inventoryFilterOptions,
  inventorySortOptions,
} from "../../data/inventoryData";
import {
  InventoryBreadcrumbCurrent,
  InventoryBreadcrumbLink,
  InventoryBreadcrumbs,
  InventoryHeading,
  InventoryHeadingGroup,
  InventoryHeroShell,
  InventoryMain,
  InventoryMainInner,
  InventoryPageButton,
  InventoryPageShell,
  InventoryPaginationControls,
  InventoryPaginationInfo,
  InventoryPaginationRow,
  InventorySortSelect,
  InventorySortWrap,
  InventorySubMeta,
  InventoryTitleRow,
} from "../../style/inventory/inventoryStyle";
import {
  defaultInventoryFilters,
  filterInventoryListings,
  getInventoryModelOptions,
  sortInventoryListings,
} from "./catalog";
import InventoryFilterToolbar from "./filter-toolbar";
import InventoryListingGridSection from "./listing-grid";

const PAGE_SIZE = 12;

const InventoryPage = () => {
  const [filters, setFilters] = useState(defaultInventoryFilters);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [sortBy, setSortBy] = useState(inventorySortOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const modelOptions = useMemo(
    () => getInventoryModelOptions(filters.make),
    [filters.make]
  );

  const filteredListings = useMemo(
    () => filterInventoryListings(filters),
    [filters]
  );

  const sortedListings = useMemo(
    () => sortInventoryListings(filteredListings, sortBy),
    [filteredListings, sortBy]
  );

  const totalPages = Math.max(1, Math.ceil(sortedListings.length / PAGE_SIZE));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedListings = sortedListings.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const rangeStart = sortedListings.length ? (currentPage - 1) * PAGE_SIZE + 1 : 0;
  const rangeEnd = Math.min(currentPage * PAGE_SIZE, sortedListings.length);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleFilterChange = (field, value) => {
    setCurrentPage(1);
    setFilters((currentFilters) => ({
      ...currentFilters,
      model:
        field === "make" ? defaultInventoryFilters.model : currentFilters.model,
      [field]: value,
    }));
  };

  const handleResetFilters = () => {
    setCurrentPage(1);
    setFilters(defaultInventoryFilters);
    setSortBy(inventorySortOptions[0]);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    document
      .getElementById("inventory-results")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <InventoryPageShell>
      <InventoryHeroShell>
        <SiteHeader navLinks={navLinks} />
        <InventoryFilterToolbar
          categoryOptions={inventoryFilterOptions.category}
          conditionOptions={inventoryConditionOptions}
          filters={filters}
          fuelOptions={inventoryFilterOptions.fuel}
          makeOptions={inventoryFilterOptions.make}
          modelOptions={modelOptions}
          onCategorySelect={(value) => handleFilterChange("category", value)}
          onFilterChange={handleFilterChange}
          onSearch={handleSearch}
          onToggleMoreFilters={() => setShowMoreFilters((current) => !current)}
          priceOptions={inventoryFilterOptions.priceRange}
          resultsCount={filteredListings.length}
          showMoreFilters={showMoreFilters}
        />
      </InventoryHeroShell>

      <InventoryMain>
        <InventoryMainInner id="inventory-results">
          <InventoryBreadcrumbs>
            <InventoryBreadcrumbLink to="/">Home</InventoryBreadcrumbLink>
            <span>/</span>
            <InventoryBreadcrumbCurrent>Cars For Sale</InventoryBreadcrumbCurrent>
          </InventoryBreadcrumbs>

          <InventoryTitleRow>
            <InventoryHeadingGroup>
              <InventoryHeading>New and Used Cars For Sale</InventoryHeading>
              <InventorySubMeta>
                Showing {rangeStart} to {rangeEnd} of {sortedListings.length} vehicles
              </InventorySubMeta>
            </InventoryHeadingGroup>

            <InventorySortWrap>
              Sort by
              <InventorySortSelect
                onChange={(event) => setSortBy(event.target.value)}
                value={sortBy}
              >
                {inventorySortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </InventorySortSelect>
            </InventorySortWrap>
          </InventoryTitleRow>

          <InventoryListingGridSection
            listings={paginatedListings}
            onResetFilters={handleResetFilters}
          />

          <InventoryPaginationRow>
            <InventoryPaginationInfo>
              {sortedListings.length
                ? `Showing results ${rangeStart}-${rangeEnd} of ${sortedListings.length}`
                : "No matching vehicles"}
            </InventoryPaginationInfo>

            <InventoryPaginationControls>
              <InventoryPageButton
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                type="button"
              >
                <KeyboardArrowLeftRoundedIcon fontSize="small" />
              </InventoryPageButton>

              {pageNumbers.map((pageNumber) => (
                <InventoryPageButton
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  type="button"
                  $active={pageNumber === currentPage}
                >
                  {pageNumber}
                </InventoryPageButton>
              ))}

              <InventoryPageButton
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages, page + 1))
                }
                type="button"
              >
                <KeyboardArrowRightRoundedIcon fontSize="small" />
              </InventoryPageButton>
            </InventoryPaginationControls>
          </InventoryPaginationRow>
        </InventoryMainInner>
      </InventoryMain>

      <FooterSection
        columns={footerColumns}
        footerMeta={footerMeta}
        socialLinks={socialLinks}
      />
    </InventoryPageShell>
  );
};

export default InventoryPage;
