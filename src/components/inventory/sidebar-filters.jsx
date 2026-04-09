import React from "react";

import {
  SidebarFiltersHeader,
  SidebarFiltersPanel,
  SidebarFiltersTitle,
  SidebarHint,
  SidebarOptionLabel,
  SidebarOptionList,
  SidebarResetButton,
  SidebarSection,
  SidebarSectionTitle,
} from "../../style/inventory/sidebarStyle";

const SidebarRadioSection = ({
  currentValue,
  label,
  name,
  onChange,
  options,
}) => (
  <SidebarSection>
    <SidebarSectionTitle>{label}</SidebarSectionTitle>
    <SidebarOptionList>
      {options.map((option) => (
        <SidebarOptionLabel key={option}>
          <input
            checked={currentValue === option}
            name={name}
            onChange={() => onChange(option)}
            type="radio"
          />
          {option}
        </SidebarOptionLabel>
      ))}
    </SidebarOptionList>
  </SidebarSection>
);

const InventorySidebarFilters = ({
  conditionOptions,
  filters,
  fuelOptions,
  makeOptions,
  modelOptions,
  onFilterChange,
  onResetFilters,
  priceOptions,
  totalResults,
  typeOptions,
}) => {
  return (
    <SidebarFiltersPanel>
      <SidebarFiltersHeader>
        <div>
          <SidebarFiltersTitle>Filters</SidebarFiltersTitle>
          <SidebarHint>{totalResults} vehicles match the current selection</SidebarHint>
        </div>
        <SidebarResetButton onClick={onResetFilters} type="button">
          Reset
        </SidebarResetButton>
      </SidebarFiltersHeader>

      <SidebarRadioSection
        currentValue={filters.condition}
        label="Condition"
        name="condition"
        onChange={(value) => onFilterChange("condition", value)}
        options={conditionOptions}
      />

      <SidebarRadioSection
        currentValue={filters.category}
        label="Body Type"
        name="category"
        onChange={(value) => onFilterChange("category", value)}
        options={typeOptions}
      />

      <SidebarRadioSection
        currentValue={filters.make}
        label="Make"
        name="make"
        onChange={(value) => onFilterChange("make", value)}
        options={makeOptions}
      />

      <SidebarRadioSection
        currentValue={filters.model}
        label="Model"
        name="model"
        onChange={(value) => onFilterChange("model", value)}
        options={modelOptions}
      />

      <SidebarRadioSection
        currentValue={filters.fuel}
        label="Fuel Type"
        name="fuel"
        onChange={(value) => onFilterChange("fuel", value)}
        options={fuelOptions}
      />

      <SidebarRadioSection
        currentValue={filters.priceRange}
        label="Budget"
        name="priceRange"
        onChange={(value) => onFilterChange("priceRange", value)}
        options={priceOptions}
      />

      <SidebarSection>
        <SidebarSectionTitle>Availability</SidebarSectionTitle>
        <SidebarOptionList>
          <SidebarOptionLabel>
            <input
              checked={filters.inStockOnly}
              onChange={(event) =>
                onFilterChange("inStockOnly", event.target.checked)
              }
              type="checkbox"
            />
            Show only in-stock listings
          </SidebarOptionLabel>
        </SidebarOptionList>
      </SidebarSection>
    </SidebarFiltersPanel>
  );
};

export default InventorySidebarFilters;
