import React, { useMemo } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";

import { useAppSession } from "../auth/app-session";
import {
  dashboardActivity,
  dashboardMonthlyViews,
  dashboardStatCards,
} from "../../data/dashboardData";
import {
  DashboardActivityBody,
  DashboardActivityIcon,
  DashboardActivityItem,
  DashboardActivityList,
  DashboardActivityTime,
  DashboardActivityTitle,
  DashboardCard,
  DashboardCardHeader,
  DashboardCardMeta,
  DashboardCardTitle,
  DashboardChartFrame,
  DashboardMetaPill,
  DashboardMonthRow,
  DashboardOutlinedLink,
  DashboardOverviewGrid,
  DashboardPageCopy,
  DashboardPageIntro,
  DashboardPageTitle,
  DashboardStatBody,
  DashboardStatCard,
  DashboardStatGrid,
  DashboardStatIcon,
  DashboardStatLabel,
  DashboardStatValue,
  DashboardSurface,
} from "../../style/dashboard/dashboardStyle";

const statIconMap = {
  listings: <ViewListOutlinedIcon fontSize="small" />,
  search: <SearchRoundedIcon fontSize="small" />,
  messages: <MailOutlineRoundedIcon fontSize="small" />,
  favorites: <FavoriteBorderRoundedIcon fontSize="small" />,
};

const activityIconMap = {
  blue: <ViewListOutlinedIcon fontSize="small" />,
  pink: <MailOutlineRoundedIcon fontSize="small" />,
  violet: <BookmarkBorderRoundedIcon fontSize="small" />,
};

const DashboardOverviewPage = () => {
  const { dashboardListings, favoriteListings, messageThreads, savedSearches } = useAppSession();
  const chartPoints = useMemo(() => {
    const width = 760;
    const height = 260;
    const maxValue = Math.max(...dashboardMonthlyViews.map((item) => item.value));
    const minValue = Math.min(...dashboardMonthlyViews.map((item) => item.value));

    return dashboardMonthlyViews
      .map((item, index) => {
        const x = 28 + (index * (width - 56)) / (dashboardMonthlyViews.length - 1);
        const y =
          height -
          28 -
          ((item.value - minValue) / Math.max(maxValue - minValue, 1)) * (height - 56);
        return `${x},${y}`;
      })
      .join(" ");
  }, []);

  const chartArea = useMemo(() => {
    return `M ${chartPoints} L 732 232 L 28 232 Z`;
  }, [chartPoints]);
  const statCards = useMemo(
    () =>
      dashboardStatCards.map((card) =>
        card.id === "listings"
          ? {
              ...card,
              value: dashboardListings.length.toLocaleString("en-US"),
            }
          : card.id === "favorites"
            ? {
                ...card,
                value: favoriteListings.length.toLocaleString("en-US"),
              }
            : card.id === "messages"
              ? {
                  ...card,
                  value: messageThreads.length.toLocaleString("en-US"),
                }
              : card.id === "saved"
                ? {
                    ...card,
                    value: savedSearches.length.toLocaleString("en-US"),
                  }
                : card
      ),
    [
      dashboardListings.length,
      favoriteListings.length,
      messageThreads.length,
      savedSearches.length,
    ]
  );

  return (
    <DashboardSurface>
      <DashboardPageIntro>
        <DashboardPageTitle>Dashboard</DashboardPageTitle>
        <DashboardPageCopy>Lorem ipsum dolor sit amet, consectetur.</DashboardPageCopy>
      </DashboardPageIntro>

      <DashboardStatGrid>
        {statCards.map((card) => (
          <DashboardStatCard key={card.id}>
            <DashboardStatBody>
              <DashboardStatLabel>{card.label}</DashboardStatLabel>
              <DashboardStatValue>{card.value}</DashboardStatValue>
            </DashboardStatBody>
            <DashboardStatIcon $tone={card.tone}>{statIconMap[card.icon]}</DashboardStatIcon>
          </DashboardStatCard>
        ))}
      </DashboardStatGrid>

      <DashboardOverviewGrid>
        <DashboardCard>
          <DashboardCardHeader>
            <DashboardCardTitle>Car Page Views</DashboardCardTitle>
            <DashboardCardMeta>
              <DashboardMetaPill>Select Cars: Audi A3</DashboardMetaPill>
              <DashboardMetaPill>Date: 15 days</DashboardMetaPill>
            </DashboardCardMeta>
          </DashboardCardHeader>

          <DashboardChartFrame>
            <svg
              fill="none"
              viewBox="0 0 760 260"
              width="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={chartArea} fill="url(#dashboardArea)" opacity="0.9" />
              <defs>
                <linearGradient id="dashboardArea" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#405FF2" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#405FF2" stopOpacity="0" />
                </linearGradient>
              </defs>

              {[60, 110, 160, 210].map((lineY) => (
                <line
                  key={lineY}
                  stroke="#e6ecf8"
                  strokeDasharray="4 6"
                  x1="52"
                  x2="740"
                  y1={lineY}
                  y2={lineY}
                />
              ))}

              {[
                { label: "300", y: 34 },
                { label: "250", y: 84 },
                { label: "200", y: 134 },
                { label: "150", y: 184 },
                { label: "100", y: 234 },
              ].map((tick) => (
                <text
                  key={tick.label}
                  fill="#94A0BB"
                  fontFamily="sans-serif"
                  fontSize="11"
                  x="14"
                  y={tick.y}
                >
                  {tick.label}
                </text>
              ))}

              <polyline
                points={chartPoints}
                stroke="#405ff2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
              />
              <line
                stroke="#9cb0ff"
                strokeDasharray="5 5"
                x1="394"
                x2="394"
                y1="30"
                y2="232"
              />
              <circle cx="394" cy="132" fill="#ffffff" r="8" stroke="#405ff2" strokeWidth="4" />
              <rect
                fill="#ffffff"
                height="34"
                rx="8"
                stroke="#e3eaf8"
                width="52"
                x="368"
                y="104"
              />
              <text fill="#405ff2" fontFamily="sans-serif" fontSize="12" fontWeight="700" x="383" y="126">
                180
              </text>
            </svg>
          </DashboardChartFrame>

          <DashboardMonthRow>
            {dashboardMonthlyViews.map((item) => (
              <span key={item.month}>{item.month}</span>
            ))}
          </DashboardMonthRow>
        </DashboardCard>

        <DashboardCard>
          <DashboardCardHeader>
            <DashboardCardTitle>Recent Activities</DashboardCardTitle>
          </DashboardCardHeader>

          <DashboardActivityList>
            {dashboardActivity.map((item) => (
              <DashboardActivityItem key={item.id}>
                <DashboardActivityIcon $tone={item.tone}>
                  {activityIconMap[item.tone]}
                </DashboardActivityIcon>
                <DashboardActivityBody>
                  <DashboardActivityTitle>{item.title}</DashboardActivityTitle>
                  <DashboardActivityTime>{item.time}</DashboardActivityTime>
                </DashboardActivityBody>
              </DashboardActivityItem>
            ))}
          </DashboardActivityList>

          <DashboardOutlinedLink to="/dashboard/messages">
            View More
            <ArrowForwardRoundedIcon fontSize="small" />
          </DashboardOutlinedLink>
        </DashboardCard>
      </DashboardOverviewGrid>
    </DashboardSurface>
  );
};

export default DashboardOverviewPage;
