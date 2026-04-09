import React, { useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { Link } from "react-router-dom";

import { useAppSession } from "../auth/app-session";
import {
  DarkCarCard,
  DarkCarCardBody,
  DarkCarCardFooter,
  DarkCarFavoriteButton,
  DarkCarCardHeader,
  DarkCarCardsGrid,
  DarkCarImage,
  DarkCarMeta,
  DarkCarPrice,
  DarkCarTitle,
  DarkSection,
  DarkSectionAction,
  DarkSectionHeader,
  DarkTabButton,
  DarkTabsRow,
  SectionCopy,
  SectionTitle,
} from "../../style/homepagestyle/homestyle";

const PopularMakesSection = ({ sections }) => {
  const brandNames = Object.keys(sections);
  const [activeBrand, setActiveBrand] = useState(brandNames[0]);
  const { isFavorite, toggleFavorite } = useAppSession();
  const activeCards = sections[activeBrand];

  return (
    <DarkSection>
      <DarkSectionHeader>
        <div>
          <SectionTitle>Popular Makes</SectionTitle>
          <SectionCopy>
            A darker featured strip, matching the lower carousel-style section
            from page 1.
          </SectionCopy>
        </div>

        <DarkSectionAction as={Link} to="/inventory">
          View All
          <ArrowForwardRoundedIcon fontSize="small" />
        </DarkSectionAction>
      </DarkSectionHeader>

      <DarkTabsRow>
        {brandNames.map((brandName) => (
          <DarkTabButton
            key={brandName}
            $active={activeBrand === brandName}
            onClick={() => setActiveBrand(brandName)}
            type="button"
          >
            {brandName}
          </DarkTabButton>
        ))}
      </DarkTabsRow>

      <DarkCarCardsGrid>
        {activeCards.map((car) => (
          <DarkCarCard key={car.id}>
            <DarkCarCardHeader>
              <span>{car.badge}</span>
              <DarkCarFavoriteButton
                aria-label={
                  isFavorite(car.listingId)
                    ? "Remove from favorites"
                    : "Save to favorites"
                }
                onClick={() => toggleFavorite(car.listingId)}
                type="button"
              >
                {isFavorite(car.listingId) ? (
                  <FavoriteRoundedIcon
                    fontSize="small"
                    style={{ color: "#ff4d6d" }}
                  />
                ) : (
                  <FavoriteBorderRoundedIcon fontSize="small" />
                )}
              </DarkCarFavoriteButton>
            </DarkCarCardHeader>

            <DarkCarImage alt={car.title} src={car.image} />

            <DarkCarCardBody>
              <DarkCarTitle>{car.title}</DarkCarTitle>
              <DarkCarMeta>{car.subtitle}</DarkCarMeta>
              <DarkCarMeta>
                {car.mileage} / {car.fuel} / {car.transmission}
              </DarkCarMeta>
            </DarkCarCardBody>

            <DarkCarCardFooter>
              <DarkCarPrice>{car.price}</DarkCarPrice>
              <DarkSectionAction
                as={Link}
                to={`/inventory/${car.listingId}`}
                type="button"
              >
                View Details
                <ArrowForwardRoundedIcon fontSize="small" />
              </DarkSectionAction>
            </DarkCarCardFooter>
          </DarkCarCard>
        ))}
      </DarkCarCardsGrid>
    </DarkSection>
  );
};

export default PopularMakesSection;
