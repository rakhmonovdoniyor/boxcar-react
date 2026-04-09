import React, { useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import { inventoryListings } from "../../data/inventoryData";
import { compareHighlights, comparePage } from "../../data/otherData";
import {
  CompareSelectorGrid,
  CompareTable,
  CompareTableLabel,
  CompareTableRow,
  CompareTableValue,
  CompareVehicleCard,
  CompareVehicleImage,
  CompareVehicleMeta,
  CompareVehicleName,
  CompareVehiclePrice,
  ContactField,
  OtherActionRow,
  OtherBreadcrumbCurrent,
  OtherBreadcrumbLink,
  OtherBreadcrumbs,
  OtherHeroCopy,
  OtherHeroShell,
  OtherHeroTitle,
  OtherList,
  OtherListItem,
  OtherMain,
  OtherPageShell,
  OtherPrimaryAction,
  OtherSecondaryAction,
  OtherSection,
  OtherSectionCopy,
  OtherSectionKicker,
  OtherSurface,
  ProfileCard,
  ProfileCardTitle,
  ProfileTag,
  ProfileTagGrid,
  UtilityCard,
  UtilityCardTitle,
} from "../../style/other/otherStyle";

const formatPrice = (value) => `$${value.toLocaleString("en-US")}`;

const compareRows = [
  { label: "Brand", getValue: (vehicle) => vehicle.brand },
  { label: "Model", getValue: (vehicle) => vehicle.model },
  { label: "Price", getValue: (vehicle) => formatPrice(vehicle.price) },
  { label: "Monthly", getValue: (vehicle) => vehicle.monthlyPrice },
  { label: "Condition", getValue: (vehicle) => vehicle.condition },
  { label: "Year", getValue: (vehicle) => String(vehicle.year) },
  { label: "Mileage", getValue: (vehicle) => vehicle.mileage },
  { label: "Fuel", getValue: (vehicle) => vehicle.fuel },
  { label: "Transmission", getValue: (vehicle) => vehicle.transmission },
  { label: "Seats", getValue: (vehicle) => `${vehicle.seats} seats` },
  { label: "Body Type", getValue: (vehicle) => vehicle.category },
];

const CompareVehiclePage = () => {
  const [leftId, setLeftId] = useState(inventoryListings[0].id);
  const [rightId, setRightId] = useState(inventoryListings[1].id);

  const leftVehicle =
    inventoryListings.find((vehicle) => vehicle.id === leftId) ?? inventoryListings[0];
  const rightVehicle =
    inventoryListings.find((vehicle) => vehicle.id === rightId) ?? inventoryListings[1];

  return (
    <OtherPageShell>
      <OtherHeroShell>
        <SiteHeader navLinks={navLinks} />
      </OtherHeroShell>

      <OtherMain>
        <OtherSurface>
          <OtherBreadcrumbs>
            <OtherBreadcrumbLink to="/">Home</OtherBreadcrumbLink>
            <span>/</span>
            <OtherBreadcrumbCurrent>{comparePage.breadcrumb}</OtherBreadcrumbCurrent>
            <span>/</span>
            <OtherBreadcrumbCurrent>Compare Vehicle</OtherBreadcrumbCurrent>
          </OtherBreadcrumbs>

          <div style={{ display: "grid", gap: "14px", marginBottom: "24px" }}>
            <OtherSectionKicker>Comparison Tool</OtherSectionKicker>
            <OtherHeroTitle>{comparePage.title}</OtherHeroTitle>
            <OtherHeroCopy>{comparePage.intro}</OtherHeroCopy>
          </div>

          <OtherSection>
            <CompareSelectorGrid>
              {[leftVehicle, rightVehicle].map((vehicle, index) => (
                <CompareVehicleCard key={`${vehicle.id}-${index}`}>
                  <ContactField>
                    <span>{index === 0 ? "Vehicle A" : "Vehicle B"}</span>
                    <select
                      value={vehicle.id}
                      onChange={(event) =>
                        index === 0
                          ? setLeftId(event.target.value)
                          : setRightId(event.target.value)
                      }
                    >
                      {inventoryListings.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.brand} {item.model}
                        </option>
                      ))}
                    </select>
                  </ContactField>

                  <CompareVehicleImage alt={vehicle.model} src={vehicle.image} />

                  <CompareVehicleMeta>
                    <CompareVehicleName>
                      {vehicle.brand} {vehicle.model}
                    </CompareVehicleName>
                    <OtherSectionCopy>{vehicle.trim}</OtherSectionCopy>
                    <CompareVehiclePrice>{formatPrice(vehicle.price)}</CompareVehiclePrice>
                    <ProfileTagGrid>
                      <ProfileTag>{vehicle.category}</ProfileTag>
                      <ProfileTag>{vehicle.fuel}</ProfileTag>
                      <ProfileTag>{vehicle.mileage}</ProfileTag>
                    </ProfileTagGrid>
                  </CompareVehicleMeta>

                  <OtherActionRow>
                    <OtherPrimaryAction to={`/inventory/${vehicle.id}`}>
                      View Details
                      <ArrowForwardRoundedIcon fontSize="small" />
                    </OtherPrimaryAction>
                  </OtherActionRow>
                </CompareVehicleCard>
              ))}
            </CompareSelectorGrid>
          </OtherSection>

          <OtherSection>
            <CompareTable>
              {compareRows.map((row, index) => (
                <CompareTableRow key={row.label} $alt={index % 2 === 1}>
                  <CompareTableLabel>{row.label}</CompareTableLabel>
                  <CompareTableValue>{row.getValue(leftVehicle)}</CompareTableValue>
                  <CompareTableValue>{row.getValue(rightVehicle)}</CompareTableValue>
                </CompareTableRow>
              ))}
            </CompareTable>
          </OtherSection>

          <OtherSection>
            <CompareSelectorGrid>
              <ProfileCard>
                <ProfileCardTitle>What this comparison improves</ProfileCardTitle>
                <OtherList>
                  {compareHighlights.map((highlight) => (
                    <OtherListItem key={highlight}>
                      <CheckRoundedIcon fontSize="small" />
                      <span>{highlight}</span>
                    </OtherListItem>
                  ))}
                </OtherList>
              </ProfileCard>

              <UtilityCard>
                <UtilityCardTitle>Next best route</UtilityCardTitle>
                <OtherSectionCopy>
                  Once one option clearly wins on price, mileage, or drivetrain, the right
                  continuation is to open the inventory detail page and move into contact or
                  finance planning.
                </OtherSectionCopy>
                <OtherActionRow>
                  <OtherPrimaryAction to={`/inventory/${leftVehicle.id}`}>
                    Open {leftVehicle.model}
                    <ArrowForwardRoundedIcon fontSize="small" />
                  </OtherPrimaryAction>
                  <OtherSecondaryAction to={`/inventory/${rightVehicle.id}`}>
                    Open {rightVehicle.model}
                  </OtherSecondaryAction>
                </OtherActionRow>
              </UtilityCard>
            </CompareSelectorGrid>
          </OtherSection>
        </OtherSurface>
      </OtherMain>

      <FooterSection
        columns={footerColumns}
        footerMeta={footerMeta}
        socialLinks={socialLinks}
      />
    </OtherPageShell>
  );
};

export default CompareVehiclePage;
