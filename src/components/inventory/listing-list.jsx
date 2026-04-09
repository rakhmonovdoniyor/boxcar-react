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
  InventoryListingFavorite,
  InventoryListingLink,
} from "../../style/inventory/inventoryStyle";
import {
  InventoryListAction,
  InventoryListBody,
  InventoryListCard,
  InventoryListCompactFooter,
  InventoryListDescription,
  InventoryListHeading,
  InventoryListImage,
  InventoryListMedia,
  InventoryListMetaGrid,
  InventoryListMetaItem,
  InventoryListPrice,
  InventoryListPriceNote,
  InventoryListSide,
  InventoryListStack,
  InventoryListSubtitle,
  InventoryListTitle,
  InventoryListTopRow,
} from "../../style/inventory/listStyle";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const badgeToneMap = {
  Electric: "green",
};

const InventoryListingListSection = ({
  listings,
  onResetFilters = () => {},
  compact = false,
}) => {
  const { isFavorite, toggleFavorite } = useAppSession();

  if (!listings.length) {
    return (
      <InventoryEmptyState>
        <h3>No vehicles matched the current filters</h3>
        <p>
          Broaden the price range or switch the filters on the left to bring
          more cars into this list view.
        </p>
        <InventoryListingLink onClick={onResetFilters} type="button">
          Clear filters
        </InventoryListingLink>
      </InventoryEmptyState>
    );
  }

  return (
    <InventoryListStack>
      {listings.map((vehicle) => (
        <InventoryListCard key={vehicle.id} $compact={compact}>
          <InventoryListMedia>
            <InventoryListImage
              alt={`${vehicle.brand} ${vehicle.model}`}
              $compact={compact}
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
          </InventoryListMedia>

          <InventoryListBody>
            <InventoryListTopRow>
              <InventoryListHeading>
                <InventoryListTitle $compact={compact}>
                  {vehicle.brand} {vehicle.model}
                </InventoryListTitle>
                <InventoryListSubtitle>{vehicle.trim}</InventoryListSubtitle>
              </InventoryListHeading>
              {!compact ? (
                <InventoryListPrice $compact={compact}>
                  {priceFormatter.format(vehicle.price)}
                </InventoryListPrice>
              ) : null}
            </InventoryListTopRow>

            <InventoryListMetaGrid $compact={compact}>
              <InventoryListMetaItem>
                <CalendarMonthOutlinedIcon fontSize="small" />
                {vehicle.year}
              </InventoryListMetaItem>
              <InventoryListMetaItem>
                <SpeedOutlinedIcon fontSize="small" />
                {vehicle.mileage}
              </InventoryListMetaItem>
              <InventoryListMetaItem>
                <LocalGasStationOutlinedIcon fontSize="small" />
                {vehicle.fuel}
              </InventoryListMetaItem>
              <InventoryListMetaItem>
                <PeopleAltOutlinedIcon fontSize="small" />
                {vehicle.seats} seats
              </InventoryListMetaItem>
            </InventoryListMetaGrid>

            {compact ? (
              <InventoryListCompactFooter>
                <div>
                  <InventoryListPrice $compact={compact}>
                    {priceFormatter.format(vehicle.price)}
                  </InventoryListPrice>
                  <InventoryListPriceNote>{vehicle.monthlyPrice}</InventoryListPriceNote>
                </div>
                <InventoryListAction
                  as={Link}
                  to={`/inventory/${vehicle.id}`}
                  $primary
                >
                  View Details
                  <ArrowForwardRoundedIcon fontSize="small" />
                </InventoryListAction>
              </InventoryListCompactFooter>
            ) : (
              <InventoryListDescription>
                {vehicle.brand} {vehicle.model} keeps the essentials visible first:
                clear pricing, clean specs, and a trim summary that is useful before
                you open the full detail page.
              </InventoryListDescription>
            )}
          </InventoryListBody>

          {!compact ? (
            <InventoryListSide>
              <div>
                <InventoryListPriceNote>{vehicle.monthlyPrice}</InventoryListPriceNote>
              </div>
              <InventoryListAction
                as={Link}
                to={`/inventory/${vehicle.id}`}
                $primary
              >
                View Details
                <ArrowForwardRoundedIcon fontSize="small" />
              </InventoryListAction>
              <InventoryListAction
                as={Link}
                to={`/inventory/${vehicle.id}`}
              >
                Make Offer
              </InventoryListAction>
            </InventoryListSide>
          ) : null}
        </InventoryListCard>
      ))}
    </InventoryListStack>
  );
};

export default InventoryListingListSection;
