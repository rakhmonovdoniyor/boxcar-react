import React, { useMemo, useState } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppSession } from "../auth/app-session";
import {
  DashboardIconButton,
  DashboardListingBody,
  DashboardListingCell,
  DashboardListingMeta,
  DashboardListingPrice,
  DashboardListingThumb,
  DashboardListingTitle,
  DashboardMiniSearch,
  DashboardPageCopy,
  DashboardPageIntro,
  DashboardPageTitle,
  DashboardPager,
  DashboardPagerButton,
  DashboardSelect,
  DashboardStatusPill,
  DashboardSurface,
  DashboardTableActions,
  DashboardTableBody,
  DashboardTableCard,
  DashboardTableHeader,
  DashboardTableRow,
  DashboardTableSummary,
  DashboardTableValue,
  DashboardToolbar,
  DashboardToolbarGroup,
} from "../../style/dashboard/dashboardStyle";

const parseCurrency = (value: string) => Number(value.replace(/[^0-9.]/g, "")) || 0;

const DashboardListingsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { dashboardListings, removeListing } = useAppSession();
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("Newest");

  const statePayload = (location.state as { notice?: string; createdId?: string } | null) ?? {};

  const visibleListings = useMemo(() => {
    const filteredListings = dashboardListings.filter((listing) =>
      [listing.title, listing.make, listing.model, listing.summary]
        .join(" ")
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase())
    );

    const sortedListings = [...filteredListings];

    switch (sortValue) {
      case "Oldest":
        sortedListings.reverse();
        break;
      case "Highest Price":
        sortedListings.sort((leftItem, rightItem) => parseCurrency(rightItem.price) - parseCurrency(leftItem.price));
        break;
      case "Lowest Price":
        sortedListings.sort((leftItem, rightItem) => parseCurrency(leftItem.price) - parseCurrency(rightItem.price));
        break;
      default:
        break;
    }

    return sortedListings;
  }, [dashboardListings, searchValue, sortValue]);

  return (
    <DashboardSurface>
      <DashboardPageIntro>
        <DashboardPageTitle>My Listings</DashboardPageTitle>
        <DashboardPageCopy>Lorem ipsum dolor sit amet, consectetur.</DashboardPageCopy>
        {statePayload.notice ? (
          <DashboardPageCopy
            style={{
              marginTop: "4px",
              padding: "12px 14px",
              borderRadius: "14px",
              background: "rgba(64, 95, 242, 0.08)",
              color: "#405ff2",
            }}
          >
            {statePayload.notice}
          </DashboardPageCopy>
        ) : null}
      </DashboardPageIntro>

      <DashboardTableCard>
        <DashboardToolbar>
          <DashboardToolbarGroup>
            <DashboardMiniSearch>
              <SearchRoundedIcon fontSize="small" />
              <input
                placeholder="Search Cars eg. Audi Q7"
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </DashboardMiniSearch>
          </DashboardToolbarGroup>

          <DashboardToolbarGroup>
            <span style={{ color: "#72809b", fontSize: "13px", fontWeight: 600 }}>
              Sort By
            </span>
            <DashboardSelect value={sortValue} onChange={(event) => setSortValue(event.target.value)}>
              <option>Newest</option>
              <option>Oldest</option>
              <option>Highest Price</option>
              <option>Lowest Price</option>
            </DashboardSelect>
          </DashboardToolbarGroup>
        </DashboardToolbar>

        <DashboardTableHeader>
          <div>Make</div>
          <div>Model</div>
          <div>Year</div>
          <div>Transmission</div>
          <div>Fuel Type</div>
          <div>Action</div>
        </DashboardTableHeader>

        <DashboardTableBody>
          {visibleListings.map((listing) => (
            <DashboardTableRow
              key={listing.id}
              $highlight={listing.id === statePayload.createdId}
            >
              <DashboardListingCell>
                <DashboardListingThumb alt={listing.title} src={listing.image} />
                <DashboardListingBody>
                  <DashboardListingTitle>{listing.title}</DashboardListingTitle>
                  <DashboardListingMeta>{listing.summary}</DashboardListingMeta>
                  <DashboardListingPrice>
                    {listing.price}
                    <span>{listing.originalPrice}</span>
                  </DashboardListingPrice>
                </DashboardListingBody>
              </DashboardListingCell>

              <DashboardTableValue>{listing.model}</DashboardTableValue>
              <DashboardTableValue>{listing.year}</DashboardTableValue>
              <DashboardTableValue>{listing.transmission}</DashboardTableValue>
              <DashboardTableValue>{listing.fuel}</DashboardTableValue>
              <DashboardTableActions>
                <DashboardStatusPill $tone={listing.status === "Pending" ? "amber" : "green"}>
                  {listing.status}
                </DashboardStatusPill>
                <DashboardIconButton
                  type="button"
                  onClick={() => navigate(`/dashboard/edit-listing/${listing.id}`)}
                >
                  <DriveFileRenameOutlineRoundedIcon fontSize="small" />
                </DashboardIconButton>
                <DashboardIconButton
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm(
                        `Delete ${listing.title} from My Listings?`
                      )
                    ) {
                      removeListing(listing.id);
                    }
                  }}
                >
                  <DeleteOutlineRoundedIcon fontSize="small" />
                </DashboardIconButton>
              </DashboardTableActions>
            </DashboardTableRow>
          ))}
        </DashboardTableBody>

        <DashboardPager>
          <DashboardPagerButton type="button">{"<"}</DashboardPagerButton>
          <DashboardPagerButton $active type="button">
            1
          </DashboardPagerButton>
          <DashboardPagerButton type="button">2</DashboardPagerButton>
          <DashboardPagerButton type="button">3</DashboardPagerButton>
          <DashboardPagerButton type="button">4</DashboardPagerButton>
          <DashboardPagerButton type="button">{">"}</DashboardPagerButton>
        </DashboardPager>
        <DashboardTableSummary>
          Showing results 1-{visibleListings.length} of {dashboardListings.length}
        </DashboardTableSummary>
      </DashboardTableCard>
    </DashboardSurface>
  );
};

export default DashboardListingsPage;
