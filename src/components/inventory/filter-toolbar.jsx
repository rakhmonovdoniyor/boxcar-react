import React from "react";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import {
  InventoryCheckboxRow,
  InventoryChip,
  InventoryChipRow,
  InventoryExtraFilters,
  InventoryFilterGroup,
  InventoryFilterGroupTitle,
  InventoryMoreFiltersButton,
  InventoryResultsButton,
  InventoryToolbar,
  InventoryToolbarDock,
  InventoryToolbarField,
  InventoryToolbarLabel,
  InventoryToolbarSelect,
} from "../../style/inventory/inventoryStyle";

const InventoryFilterToolbar = ({
  categoryOptions,
  conditionOptions,
  filters,
  fuelOptions,
  makeOptions,
  modelOptions,
  onCategorySelect,
  onFilterChange,
  onSearch,
  onToggleMoreFilters,
  priceOptions,
  resultsCount,
  showMoreFilters,
}) => {
  return (
    <InventoryToolbarDock>
      <InventoryToolbar>
        <InventoryToolbarField>
          <InventoryToolbarLabel>Condition</InventoryToolbarLabel>
          <InventoryToolbarSelect
            onChange={(event) => onFilterChange("condition", event.target.value)}
            value={filters.condition}
          >
            {conditionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </InventoryToolbarSelect>
        </InventoryToolbarField>

        <InventoryToolbarField>
          <InventoryToolbarLabel>Make</InventoryToolbarLabel>
          <InventoryToolbarSelect
            onChange={(event) => onFilterChange("make", event.target.value)}
            value={filters.make}
          >
            {makeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </InventoryToolbarSelect>
        </InventoryToolbarField>

        <InventoryToolbarField>
          <InventoryToolbarLabel>Model</InventoryToolbarLabel>
          <InventoryToolbarSelect
            onChange={(event) => onFilterChange("model", event.target.value)}
            value={filters.model}
          >
            {modelOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </InventoryToolbarSelect>
        </InventoryToolbarField>

        <InventoryToolbarField>
          <InventoryToolbarLabel>Price</InventoryToolbarLabel>
          <InventoryToolbarSelect
            onChange={(event) => onFilterChange("priceRange", event.target.value)}
            value={filters.priceRange}
          >
            {priceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </InventoryToolbarSelect>
        </InventoryToolbarField>

        <InventoryMoreFiltersButton onClick={onToggleMoreFilters} type="button">
          <FilterListRoundedIcon fontSize="small" />
          More Filters
        </InventoryMoreFiltersButton>

        <InventoryResultsButton onClick={onSearch} type="button">
          <SearchRoundedIcon fontSize="small" />
          Search {resultsCount} Cars
        </InventoryResultsButton>
      </InventoryToolbar>

      {showMoreFilters ? (
        <InventoryExtraFilters>
          <InventoryFilterGroup>
            <InventoryFilterGroupTitle>Body Type</InventoryFilterGroupTitle>
            <InventoryChipRow>
              {categoryOptions.map((option) => (
                <InventoryChip
                  key={option}
                  onClick={() => onCategorySelect(option)}
                  type="button"
                  $active={filters.category === option}
                >
                  {option}
                </InventoryChip>
              ))}
            </InventoryChipRow>
          </InventoryFilterGroup>

          <InventoryFilterGroup>
            <InventoryFilterGroupTitle>Fuel Type</InventoryFilterGroupTitle>
            <InventoryChipRow>
              {fuelOptions.map((option) => (
                <InventoryChip
                  key={option}
                  onClick={() => onFilterChange("fuel", option)}
                  type="button"
                  $active={filters.fuel === option}
                >
                  {option}
                </InventoryChip>
              ))}
            </InventoryChipRow>
          </InventoryFilterGroup>

          <InventoryFilterGroup>
            <InventoryFilterGroupTitle>Availability</InventoryFilterGroupTitle>
            <InventoryCheckboxRow>
              <input
                checked={filters.inStockOnly}
                onChange={(event) =>
                  onFilterChange("inStockOnly", event.target.checked)
                }
                type="checkbox"
              />
              Show only in-stock listings
            </InventoryCheckboxRow>
          </InventoryFilterGroup>
        </InventoryExtraFilters>
      ) : null}
    </InventoryToolbarDock>
  );
};

export default InventoryFilterToolbar;
