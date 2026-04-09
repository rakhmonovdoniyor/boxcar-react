import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

import { useAppSession } from "../auth/app-session";
import {
  DashboardBadge,
  DashboardFavoriteBody,
  DashboardFavoriteCard,
  DashboardFavoriteBadgeWrap,
  DashboardFavoriteImage,
  DashboardFavoriteLink,
  DashboardFavoriteMedia,
  DashboardFavoriteMeta,
  DashboardFavoriteMonthly,
  DashboardFavoritePrice,
  DashboardFavoritePriceRow,
  DashboardFavoriteSpecs,
  DashboardFavoriteTitle,
  DashboardFavoritesGrid,
  DashboardFavoritesShell,
  DashboardIconButton,
  DashboardPageCopy,
  DashboardPageIntro,
  DashboardPageTitle,
  DashboardPager,
  DashboardPagerButton,
  DashboardSurface,
  DashboardTableSummary,
} from "../../style/dashboard/dashboardStyle";

const DashboardFavoritesPage = () => {
  const { favoriteListings, removeFavorite } = useAppSession();

  return (
    <DashboardSurface>
      <DashboardPageIntro>
        <DashboardPageTitle>My Favorites</DashboardPageTitle>
        <DashboardPageCopy>Lorem ipsum dolor sit amet, consectetur.</DashboardPageCopy>
      </DashboardPageIntro>

      <DashboardFavoritesShell>
        {favoriteListings.length ? (
          <DashboardFavoritesGrid>
            {favoriteListings.map((item) => (
              <DashboardFavoriteCard key={item.id}>
                <DashboardFavoriteMedia>
                  <DashboardFavoriteImage alt={item.title} src={item.image} />
                  <DashboardFavoriteBadgeWrap>
                    <DashboardBadge>{item.badge}</DashboardBadge>
                  </DashboardFavoriteBadgeWrap>
                  <div style={{ position: "absolute", right: "14px", top: "14px" }}>
                    <DashboardIconButton
                      type="button"
                      onClick={() => {
                        if (window.confirm(`Remove ${item.title} from favorites?`)) {
                          removeFavorite(item.id);
                        }
                      }}
                    >
                      <DeleteOutlineRoundedIcon fontSize="small" />
                    </DashboardIconButton>
                  </div>
                </DashboardFavoriteMedia>
                <DashboardFavoriteBody>
                  <div>
                    <DashboardFavoriteTitle>{item.title}</DashboardFavoriteTitle>
                    <DashboardFavoriteMeta>{item.summary}</DashboardFavoriteMeta>
                  </div>
                  <DashboardFavoriteSpecs>
                    <span>{item.mileage}</span>
                    <span>{item.fuel}</span>
                    <span>{item.transmission}</span>
                  </DashboardFavoriteSpecs>
                  <DashboardFavoritePriceRow>
                    <div>
                      <DashboardFavoritePrice>{item.price}</DashboardFavoritePrice>
                      <DashboardFavoriteMonthly>{item.monthlyPrice}</DashboardFavoriteMonthly>
                    </div>
                    <DashboardFavoriteLink to={`/inventory/${item.id}`}>
                      View Details
                      <ArrowForwardRoundedIcon fontSize="small" />
                    </DashboardFavoriteLink>
                  </DashboardFavoritePriceRow>
                </DashboardFavoriteBody>
              </DashboardFavoriteCard>
            ))}
          </DashboardFavoritesGrid>
        ) : (
          <DashboardPageCopy>
            Favorites list is empty. Browse inventory and save a few listings to build this
            section back up.
          </DashboardPageCopy>
        )}

        {favoriteListings.length ? (
          <DashboardPager>
            <DashboardPagerButton type="button">{"<"}</DashboardPagerButton>
            <DashboardPagerButton $active type="button">
              1
            </DashboardPagerButton>
            <DashboardPagerButton type="button">{">"}</DashboardPagerButton>
          </DashboardPager>
        ) : null}

        <DashboardTableSummary>
          Showing results {favoriteListings.length ? 1 : 0}-{favoriteListings.length} of {favoriteListings.length}
        </DashboardTableSummary>
      </DashboardFavoritesShell>
    </DashboardSurface>
  );
};

export default DashboardFavoritesPage;
