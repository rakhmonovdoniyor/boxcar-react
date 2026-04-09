import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import { Link } from "react-router-dom";

import {
  CardBadge,
  CardBadgeRow,
  CardFooter,
  CardImage,
  CardLinkButton,
  CardMetaGrid,
  CardPrice,
  CardPriceLine,
  CardPriceNote,
  CardSubtitle,
  CardTitle,
  EmptyState,
  InventoryCard,
  InventoryFooterRow,
  InventoryCardBody,
  InventoryGrid,
  InventoryPager,
  MetaItem,
  PagerButton,
  SectionAction,
  SectionCopy,
  SectionHeader,
  SectionKicker,
  SectionTitle,
  SectionTitleGroup,
  ViewToggleButton,
  ViewToggleRow,
} from "../../style/homepagestyle/homestyle";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const InventorySection = ({
  hasActiveFilters,
  onResetFilters,
  onViewChange,
  selectedView,
  totalCount,
  vehicles,
  viewOptions,
}) => {
  const visibleCount = vehicles.length;

  return (
    <section id="inventory">
      <SectionHeader>
        <SectionTitleGroup>
          <SectionKicker>Featured Inventory</SectionKicker>
          <SectionTitle>Explore All Vehicles</SectionTitle>
          <SectionCopy>
            The card grid follows your current filter set and now mirrors the
            tabbed inventory layout from the design.
          </SectionCopy>
        </SectionTitleGroup>

        {hasActiveFilters ? (
          <SectionAction onClick={onResetFilters} type="button">
            Reset all filters
            <ArrowForwardRoundedIcon fontSize="small" />
          </SectionAction>
        ) : null}
      </SectionHeader>

      <ViewToggleRow>
        {viewOptions.map((view) => (
          <ViewToggleButton
            key={view}
            $active={selectedView === view}
            onClick={() => onViewChange(view)}
            type="button"
          >
            {view}
          </ViewToggleButton>
        ))}
        <SectionCopy>
          {vehicles.length} of {totalCount} vehicles shown
        </SectionCopy>
      </ViewToggleRow>

      {vehicles.length > 0 ? (
        <InventoryGrid>
          {vehicles.map((vehicle) => (
            <InventoryCard key={vehicle.id}>
              <CardImage
                alt={`${vehicle.brand} ${vehicle.model}`}
                src={vehicle.image}
              />

              <InventoryCardBody>
                <CardBadgeRow>
                  {vehicle.highlights.map((highlight) => (
                    <CardBadge key={highlight}>{highlight}</CardBadge>
                  ))}
                  <CardBadge $tone="secondary">{vehicle.category}</CardBadge>
                </CardBadgeRow>

                <CardTitle>
                  {vehicle.brand} {vehicle.model}
                </CardTitle>
                <CardSubtitle>{vehicle.location}</CardSubtitle>
                <CardPriceLine>
                  <CardPrice>{priceFormatter.format(vehicle.price)}</CardPrice>
                  <CardPriceNote>{vehicle.monthlyPrice}</CardPriceNote>
                </CardPriceLine>

                <CardMetaGrid>
                  <MetaItem>
                    <CalendarMonthOutlinedIcon fontSize="small" />
                    {vehicle.year}
                  </MetaItem>
                  <MetaItem>
                    <SpeedOutlinedIcon fontSize="small" />
                    {vehicle.mileage}
                  </MetaItem>
                  <MetaItem>
                    <LocalGasStationOutlinedIcon fontSize="small" />
                    {vehicle.fuel}
                  </MetaItem>
                  <MetaItem>
                    <PeopleAltOutlinedIcon fontSize="small" />
                    {vehicle.seats} seats
                  </MetaItem>
                </CardMetaGrid>

                <CardFooter>
                  <span>{vehicle.transmission}</span>
                  <CardLinkButton
                    as={Link}
                    to={`/inventory/${vehicle.detailId ?? vehicle.id}`}
                    type="button"
                  >
                    View Details
                    <ArrowForwardRoundedIcon fontSize="small" />
                  </CardLinkButton>
                </CardFooter>
              </InventoryCardBody>
            </InventoryCard>
          ))}
        </InventoryGrid>
      ) : (
        <EmptyState>
          <h3>No cars matched the current filters</h3>
          <p>
            Broaden the price range or clear the brand/category filters to see
            the full featured inventory again.
          </p>
          <SectionAction onClick={onResetFilters} type="button">
            Clear filters
          </SectionAction>
        </EmptyState>
      )}

      {vehicles.length > 0 ? (
        <InventoryFooterRow>
          <SectionCopy>
            {visibleCount} of {totalCount} vehicles
          </SectionCopy>
          <InventoryPager>
            <PagerButton type="button">
              <KeyboardArrowLeftRoundedIcon fontSize="small" />
            </PagerButton>
            <PagerButton type="button">
              <KeyboardArrowRightRoundedIcon fontSize="small" />
            </PagerButton>
          </InventoryPager>
        </InventoryFooterRow>
      ) : null}
    </section>
  );
};

export default InventorySection;
