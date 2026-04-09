import React, { useEffect, useMemo, useState } from "react";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
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
import {
  InventoryHeroShell,
  InventoryPageButton,
  InventoryPageShell,
  InventoryPaginationControls,
  InventoryPaginationInfo,
  InventoryPaginationRow,
  InventorySortSelect,
  InventorySortWrap,
} from "../../style/inventory/inventoryStyle";
import {
  InventoryMapLabel,
  InventoryMapPopup,
  InventoryMapPopupBody,
  InventoryMapPopupImage,
  InventoryMapPopupMeta,
  InventoryMapPopupPrice,
  InventoryMapPopupTitle,
  InventorySplitCount,
  InventorySplitField,
  InventorySplitHeaderRow,
  InventorySplitLayout,
  InventorySplitLeft,
  InventorySplitMain,
  InventorySplitMap,
  InventorySplitMoreButton,
  InventorySplitSelect,
  InventorySplitSurface,
  InventorySplitToolbar,
} from "../../style/inventory/mapStyle";

const PAGE_SIZE = 4;

const InventoryMapViewPage = () => {
  const [filters, setFilters] = useState(defaultInventoryFilters);
  const [sortBy, setSortBy] = useState(inventorySortOptions[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showExtraFuel, setShowExtraFuel] = useState(false);

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
  const highlightedVehicle = paginatedListings[1] ?? paginatedListings[0];
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

  return (
    <InventoryPageShell>
      <InventoryHeroShell>
        <SiteHeader navLinks={navLinks} />
      </InventoryHeroShell>

      <InventorySplitMain>
        <InventorySplitSurface>
          <InventorySplitLayout>
            <InventorySplitLeft>
              <InventorySplitToolbar>
                <InventorySplitField>
                  <span>Condition</span>
                  <InventorySplitSelect
                    onChange={(event) =>
                      handleFilterChange("condition", event.target.value)
                    }
                    value={filters.condition}
                  >
                    {inventoryConditionOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </InventorySplitSelect>
                </InventorySplitField>

                <InventorySplitField>
                  <span>Make</span>
                  <InventorySplitSelect
                    onChange={(event) => handleFilterChange("make", event.target.value)}
                    value={filters.make}
                  >
                    {inventoryFilterOptions.make.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </InventorySplitSelect>
                </InventorySplitField>

                <InventorySplitField>
                  <span>Model</span>
                  <InventorySplitSelect
                    onChange={(event) => handleFilterChange("model", event.target.value)}
                    value={filters.model}
                  >
                    {modelOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </InventorySplitSelect>
                </InventorySplitField>

                <InventorySplitField>
                  <span>Price</span>
                  <InventorySplitSelect
                    onChange={(event) =>
                      handleFilterChange("priceRange", event.target.value)
                    }
                    value={filters.priceRange}
                  >
                    {inventoryFilterOptions.priceRange.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </InventorySplitSelect>
                </InventorySplitField>

                <InventorySplitMoreButton
                  onClick={() => setShowExtraFuel((current) => !current)}
                  type="button"
                >
                  <TuneRoundedIcon fontSize="small" />{" "}
                  {showExtraFuel ? filters.fuel : "More Filters"}
                </InventorySplitMoreButton>
              </InventorySplitToolbar>

              {showExtraFuel ? (
                <InventorySplitToolbar>
                  <InventorySplitField>
                    <span>Fuel</span>
                    <InventorySplitSelect
                      onChange={(event) => handleFilterChange("fuel", event.target.value)}
                      value={filters.fuel}
                    >
                      {inventoryFilterOptions.fuel.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </InventorySplitSelect>
                  </InventorySplitField>
                </InventorySplitToolbar>
              ) : null}

              <InventorySplitHeaderRow>
                <InventorySplitCount>
                  Showing 1 to {paginatedListings.length} of {sortedListings.length}{" "}
                  vehicles
                </InventorySplitCount>

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
              </InventorySplitHeaderRow>

              <InventoryListingGridSection
                columns={2}
                listings={paginatedListings}
              />

              <InventoryPaginationRow>
                <InventoryPaginationInfo>
                  Showing results 1-{paginatedListings.length} of {sortedListings.length}
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
            </InventorySplitLeft>

            <InventorySplitMap>
              <InventoryMapLabel $left="12%" $top="32%">
                $28,000
              </InventoryMapLabel>
              <InventoryMapLabel $left="28%" $top="76%">
                $32,900
              </InventoryMapLabel>
              <InventoryMapLabel $left="46%" $top="46%" $active>
                $41,750
              </InventoryMapLabel>
              <InventoryMapLabel $left="72%" $top="66%">
                $56,100
              </InventoryMapLabel>

              {highlightedVehicle ? (
                <InventoryMapPopup>
                  <InventoryMapPopupImage
                    alt={`${highlightedVehicle.brand} ${highlightedVehicle.model}`}
                    src={highlightedVehicle.image}
                  />
                  <InventoryMapPopupBody>
                    <InventoryMapPopupTitle>
                      {highlightedVehicle.brand}, {highlightedVehicle.model}
                    </InventoryMapPopupTitle>
                    <InventoryMapPopupMeta>
                      {highlightedVehicle.mileage} • {highlightedVehicle.fuel} •{" "}
                      {highlightedVehicle.transmission}
                    </InventoryMapPopupMeta>
                    <InventoryMapPopupPrice>
                      ${highlightedVehicle.price.toLocaleString("en-US")}
                    </InventoryMapPopupPrice>
                  </InventoryMapPopupBody>
                </InventoryMapPopup>
              ) : null}
            </InventorySplitMap>
          </InventorySplitLayout>
        </InventorySplitSurface>
      </InventorySplitMain>

      <FooterSection
        columns={footerColumns}
        footerMeta={footerMeta}
        socialLinks={socialLinks}
      />
    </InventoryPageShell>
  );
};

export default InventoryMapViewPage;
