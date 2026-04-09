import React from "react";
import AirportShuttleRoundedIcon from "@mui/icons-material/AirportShuttleRounded";
import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import DriveEtaRoundedIcon from "@mui/icons-material/DriveEtaRounded";
import ElectricCarRoundedIcon from "@mui/icons-material/ElectricCarRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TimeToLeaveRoundedIcon from "@mui/icons-material/TimeToLeaveRounded";

import {
  CategoryChip,
  CategoryChips,
  Eyebrow,
  FilterBar,
  FilterField,
  FilterSelect,
  HeroPanel,
  HeroSubtitle,
  HeroTitle,
  QuickToggleButton,
  QuickToggleRow,
  ResultsMeta,
  SearchAction,
  SubtleAction,
} from "../../style/homepagestyle/homestyle";

const categoryIcons = {
  SUV: <AirportShuttleRoundedIcon fontSize="small" />,
  Sedan: <DirectionsCarFilledRoundedIcon fontSize="small" />,
  Hatchback: <TimeToLeaveRoundedIcon fontSize="small" />,
  Coupe: <DriveEtaRoundedIcon fontSize="small" />,
  Hybrid: <ElectricCarRoundedIcon fontSize="small" />,
};

const HeroSection = ({
  conditionOptions,
  filterOptions,
  filters,
  onCategorySelect,
  onConditionChange,
  onFilterChange,
  onResetFilters,
  onSearch,
  resultsCount,
  selectedCondition,
}) => {
  const filterFields = [
    {
      id: "make",
      label: "Make",
      options: filterOptions.make,
    },
    {
      id: "model",
      label: "Model",
      options: filterOptions.model,
    },
    {
      id: "priceRange",
      label: "Budget",
      options: filterOptions.priceRange,
    },
  ];

  return (
    <HeroPanel>
      <Eyebrow>Curated listings for city drives and road trips</Eyebrow>
      <HeroTitle>Find Your Perfect Car</HeroTitle>
      <HeroSubtitle>
        Browse a cleaner inventory, tune the filters in real time, and jump
        straight to the cars that match your budget and body style.
      </HeroSubtitle>

      <QuickToggleRow>
        {conditionOptions.map((condition) => (
          <QuickToggleButton
            key={condition}
            $active={selectedCondition === condition}
            onClick={() => onConditionChange(condition)}
            type="button"
          >
            {condition}
          </QuickToggleButton>
        ))}
      </QuickToggleRow>

      <FilterBar>
        {filterFields.map((field) => (
          <FilterField key={field.id}>
            <span>{field.label}</span>
            <FilterSelect
              onChange={(event) =>
                onFilterChange(field.id, event.target.value)
              }
              value={filters[field.id]}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </FilterSelect>
          </FilterField>
        ))}

        <SearchAction onClick={onSearch} type="button">
          <SearchOutlinedIcon fontSize="small" />
          {resultsCount > 0 ? `Show ${resultsCount} Matches` : "View Results"}
        </SearchAction>
      </FilterBar>

      <ResultsMeta>
        <span>
          {resultsCount > 0
            ? `${resultsCount} vehicles match your current filters`
            : "No vehicles match the current filter set"}
        </span>
        <SubtleAction onClick={onResetFilters} type="button">
          Reset filters
        </SubtleAction>
      </ResultsMeta>

      <CategoryChips>
        {filterOptions.category
          .filter((option) => option !== "Any Category")
          .map((category) => (
            <CategoryChip
              key={category}
              $active={filters.category === category}
              onClick={() => onCategorySelect(category)}
              type="button"
            >
              {categoryIcons[category]}
              {category}
            </CategoryChip>
          ))}
      </CategoryChips>
    </HeroPanel>
  );
};

export default HeroSection;
