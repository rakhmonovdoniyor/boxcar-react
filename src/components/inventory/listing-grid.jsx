import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import { Link } from "react-router-dom";

import { useAppSession } from "../auth/app-session";
import {
  InventoryEmptyState,
  InventoryListingBadge,
  InventoryListingBody,
  InventoryListingCard,
  InventoryListingFavorite,
  InventoryListingGrid,
  InventoryListingImage,
  InventoryListingLink,
  InventoryListingMedia,
  InventoryListingMeta,
  InventoryListingMetaItem,
  InventoryListingNote,
  InventoryListingPrice,
  InventoryListingPriceBlock,
  InventoryListingPriceRow,
  InventoryListingSubtitle,
  InventoryListingTitle,
} from "../../style/inventory/inventoryStyle";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const badgeToneMap = {
  Electric: "green",
};

const InventoryListingGridSection = ({
  listings,
  onResetFilters = () => {},
  columns = 4,
}) => {
  const { isFavorite, toggleFavorite } = useAppSession();

  if (!listings.length) {
    return (
      <InventoryEmptyState>
        <h3>No vehicles matched the current filters</h3>
        <p>
          Broaden the price range, switch the condition, or clear the extra
          filters to bring more inventory back into the list.
        </p>
        <InventoryListingLink onClick={onResetFilters} type="button">
          Clear filters
        </InventoryListingLink>
      </InventoryEmptyState>
    );
  }

  return (
    <InventoryListingGrid $columns={columns}>
      {listings.map((vehicle) => (
        <InventoryListingCard key={vehicle.id}>
          <InventoryListingMedia>
            <InventoryListingImage
              alt={`${vehicle.brand} ${vehicle.model}`}
              src={vehicle.image}
            />
            <InventoryListingBadge $tone={badgeToneMap[vehicle.badge]}>
              {vehicle.badge}
            </InventoryListingBadge>
            <InventoryListingFavorite
              aria-label={isFavorite(vehicle.id) ? "Remove from favorites" : "Save to favorites"}
              type="button"
              onClick={() => toggleFavorite(vehicle.id)}
            >
              {isFavorite(vehicle.id) ? (
                <FavoriteRoundedIcon fontSize="small" style={{ color: "#ff4d6d" }} />
              ) : (
                <FavoriteBorderOutlinedIcon fontSize="small" />
              )}
            </InventoryListingFavorite>
          </InventoryListingMedia>

          <InventoryListingBody>
            <div>
              <InventoryListingTitle>
                {vehicle.brand} {vehicle.model}
              </InventoryListingTitle>
              <InventoryListingSubtitle>{vehicle.trim}</InventoryListingSubtitle>
            </div>

            <InventoryListingMeta>
              <InventoryListingMetaItem>
                <CalendarMonthOutlinedIcon fontSize="small" />
                {vehicle.year}
              </InventoryListingMetaItem>
              <InventoryListingMetaItem>
                <SpeedOutlinedIcon fontSize="small" />
                {vehicle.mileage}
              </InventoryListingMetaItem>
              <InventoryListingMetaItem>
                <LocalGasStationOutlinedIcon fontSize="small" />
                {vehicle.fuel}
              </InventoryListingMetaItem>
              <InventoryListingMetaItem>
                <PeopleAltOutlinedIcon fontSize="small" />
                {vehicle.seats} seats
              </InventoryListingMetaItem>
            </InventoryListingMeta>

            <InventoryListingPriceRow>
              <InventoryListingPriceBlock>
                <InventoryListingPrice>
                  {priceFormatter.format(vehicle.price)}
                </InventoryListingPrice>
                <InventoryListingNote>{vehicle.monthlyPrice}</InventoryListingNote>
              </InventoryListingPriceBlock>
              <InventoryListingLink
                as={Link}
                to={`/inventory/${vehicle.id}`}
                type="button"
              >
                View Details
                <ArrowForwardRoundedIcon fontSize="small" />
              </InventoryListingLink>
            </InventoryListingPriceRow>
          </InventoryListingBody>
        </InventoryListingCard>
      ))}
    </InventoryListingGrid>
  );
};

export default InventoryListingGridSection;
