import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { Link } from "react-router-dom";

import {
  LinkColumn,
  LinkColumnTitle,
  LinkColumnsGrid,
  LinkListAnchor,
  SectionAction,
  SectionCopy,
  SectionHeader,
  SectionTitle,
  SectionTitleGroup,
} from "../../style/homepagestyle/homestyle";

const resolveShopRoute = (columnTitle, linkLabel) => {
  if (columnTitle === "Used Cars For Sale") {
    return "/inventory/list";
  }

  if (columnTitle === "Browse By Type") {
    return "/inventory/sidebar";
  }

  if (columnTitle === "Browse By Brand") {
    return "/inventory";
  }

  if (columnTitle === "Popular Searches") {
    return "/compare";
  }

  if (/BMW|Mercedes|Ford|Honda|Jaguar|Jeep|Kia|Mazda|Peugeot|Porsche/i.test(linkLabel)) {
    return "/inventory";
  }

  return "/inventory";
};

const ShopWaySection = ({ columns }) => {
  return (
    <section>
      <SectionHeader>
        <SectionTitleGroup>
          <SectionTitle>Shop BoxCar Your Way</SectionTitle>
          <SectionCopy>
            A fast-link index for common shopping paths, matching the design's
            link-heavy content block.
          </SectionCopy>
        </SectionTitleGroup>

        <SectionAction as={Link} to="/inventory">
          View More
          <ArrowForwardRoundedIcon fontSize="small" />
        </SectionAction>
      </SectionHeader>

      <LinkColumnsGrid>
        {columns.map((column) => (
          <LinkColumn key={column.title}>
            <LinkColumnTitle>{column.title}</LinkColumnTitle>
            {column.links.map((linkLabel) => (
              <LinkListAnchor
                as={Link}
                key={linkLabel}
                to={resolveShopRoute(column.title, linkLabel)}
              >
                {linkLabel}
              </LinkListAnchor>
            ))}
          </LinkColumn>
        ))}
      </LinkColumnsGrid>
    </section>
  );
};

export default ShopWaySection;
