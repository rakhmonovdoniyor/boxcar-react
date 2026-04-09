import React, { useMemo, useState } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useNavigate } from "react-router-dom";

import { useAppSession } from "../auth/app-session";
import {
  DashboardIconButton,
  DashboardMiniSearch,
  DashboardPageCopy,
  DashboardPageIntro,
  DashboardPageTitle,
  DashboardSavedMeta,
  DashboardSavedRow,
  DashboardSavedTitle,
  DashboardSelect,
  DashboardSurface,
  DashboardTableCard,
  DashboardTableHeader,
  DashboardTableSummary,
  DashboardTableValue,
  DashboardToolbar,
  DashboardToolbarGroup,
} from "../../style/dashboard/dashboardStyle";

const DashboardSavedSearchPage = () => {
  const navigate = useNavigate();
  const { removeSavedSearch, savedSearches } = useAppSession();
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("Newest");

  const visibleSearches = useMemo(() => {
    const filteredSearches = savedSearches.filter((item) =>
      [item.title, item.query].join(" ").toLowerCase().includes(searchValue.trim().toLowerCase())
    );

    if (sortValue === "Oldest") {
      return [...filteredSearches].reverse();
    }

    return filteredSearches;
  }, [savedSearches, searchValue, sortValue]);

  return (
    <DashboardSurface>
      <DashboardPageIntro>
        <DashboardPageTitle>Saved Search</DashboardPageTitle>
        <DashboardPageCopy>Lorem ipsum dolor sit amet, consectetur.</DashboardPageCopy>
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
            </DashboardSelect>
          </DashboardToolbarGroup>
        </DashboardToolbar>

        <DashboardTableHeader>
          <div>Title</div>
          <div>Saved Search Query</div>
          <div>Number Listings</div>
          <div>Times</div>
          <div>Action</div>
        </DashboardTableHeader>

        {visibleSearches.map((item) => (
          <DashboardSavedRow key={item.id}>
            <div>
              <DashboardSavedTitle>{item.title}</DashboardSavedTitle>
            </div>
            <DashboardSavedMeta>{item.query}</DashboardSavedMeta>
            <DashboardTableValue>Listings found {item.listingsFound}</DashboardTableValue>
            <DashboardTableValue>{item.cadence}</DashboardTableValue>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
              <DashboardIconButton
                type="button"
                onClick={() => navigate("/inventory/sidebar")}
                title="Run saved search"
              >
                <SearchRoundedIcon fontSize="small" />
              </DashboardIconButton>
              <DashboardIconButton
                type="button"
                onClick={() => {
                  if (window.confirm(`Delete the saved search "${item.title}"?`)) {
                    removeSavedSearch(item.id);
                  }
                }}
                title="Delete saved search"
              >
                <DeleteOutlineRoundedIcon fontSize="small" />
              </DashboardIconButton>
            </div>
          </DashboardSavedRow>
        ))}

        {!visibleSearches.length ? (
          <DashboardTableSummary>No saved searches match the current filter.</DashboardTableSummary>
        ) : (
          <DashboardTableSummary>
            Showing results 1-{visibleSearches.length} of {savedSearches.length} saved searches
          </DashboardTableSummary>
        )}
      </DashboardTableCard>
    </DashboardSurface>
  );
};

export default DashboardSavedSearchPage;
