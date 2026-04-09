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
  defaultInventoryFilters,
  filterInventoryListings,
  getInventoryModelOptions,
  sortInventoryListings,
} from "./catalog";
import InventoryListingGridSection from "./listing-grid";
import InventorySidebarFilters from "./sidebar-filters";
import {
  InventoryBreadcrumbCurrent,
  InventoryBreadcrumbLink,
  InventoryBreadcrumbs,
  InventoryHeading,
  InventoryHeadingGroup,
  InventoryHeroShell,
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
  SidebarContent,
  SidebarLayout,
  SidebarMain,
  SidebarSurface,
} from "../../style/inventory/sidebarStyle";

const PAGE_SIZE = 12;
const sidebarDefaultFilters = {
  ...defaultInventoryFilters,
  condition: "All Cars",
};

const InventorySidebarPage = () => {
  const [filters, setFilters] = useState(sidebarDefaultFilters);
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
    setFilters(sidebarDefaultFilters);
    setSortBy(inventorySortOptions[0]);
  };

  return (
    <InventoryPageShell>
      <InventoryHeroShell>
        <SiteHeader navLinks={navLinks} />
      </InventoryHeroShell>

      <SidebarMain>
        <SidebarSurface>
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

          <SidebarLayout>
            <InventorySidebarFilters
              conditionOptions={inventoryConditionOptions}
              filters={filters}
              fuelOptions={inventoryFilterOptions.fuel}
              makeOptions={inventoryFilterOptions.make}
              modelOptions={modelOptions}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
              priceOptions={inventoryFilterOptions.priceRange}
              totalResults={filteredListings.length}
              typeOptions={inventoryFilterOptions.category}
            />

            <SidebarContent>
              <InventoryListingGridSection
                columns={3}
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
            </SidebarContent>
          </SidebarLayout>
        </SidebarSurface>
      </SidebarMain>

      <FooterSection
        columns={footerColumns}
        footerMeta={footerMeta}
        socialLinks={socialLinks}
      />
    </InventoryPageShell>
  );
};

export default InventorySidebarPage;
