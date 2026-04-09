import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import {
  dealerBenefits,
  dealerPage,
  dealerPartners,
  dealerStats,
} from "../../data/otherData";
import {
  DirectoryActionRow,
  DirectoryAvatar,
  DirectoryBadge,
  DirectoryCard,
  DirectoryCardTop,
  DirectoryCopy,
  DirectoryGrid,
  DirectoryMetaGrid,
  DirectoryMetaItem,
  DirectorySubtitle,
  DirectoryTitle,
  DirectoryTitleGroup,
  OtherActionRow,
  OtherBreadcrumbCurrent,
  OtherBreadcrumbLink,
  OtherBreadcrumbs,
  OtherCardGrid,
  OtherFeatureCard,
  OtherFeatureCopy,
  OtherFeatureIcon,
  OtherFeatureTitle,
  OtherHeroBody,
  OtherHeroGrid,
  OtherHeroShell,
  OtherHeroStack,
  OtherHeroTitle,
  OtherMain,
  OtherPageShell,
  OtherPrimaryAction,
  OtherSecondaryAction,
  OtherSection,
  OtherSectionCopy,
  OtherSectionHeader,
  OtherSectionKicker,
  OtherSectionTitle,
  OtherStatCard,
  OtherStatLabel,
  OtherStatValue,
  OtherSurface,
  ProfileTag,
  ProfileTagGrid,
} from "../../style/other/otherStyle";

const DealerListPage = () => {
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
            <OtherBreadcrumbCurrent>{dealerPage.breadcrumb}</OtherBreadcrumbCurrent>
            <span>/</span>
            <OtherBreadcrumbCurrent>Dealers</OtherBreadcrumbCurrent>
          </OtherBreadcrumbs>

          <OtherHeroGrid>
            <OtherHeroBody>
              <OtherSectionKicker>Dealer Directory</OtherSectionKicker>
              <OtherHeroTitle>{dealerPage.title}</OtherHeroTitle>
              <OtherSectionCopy>{dealerPage.intro}</OtherSectionCopy>

              <OtherActionRow>
                <OtherPrimaryAction to="/inventory">
                  Browse Inventory
                  <ArrowForwardRoundedIcon fontSize="small" />
                </OtherPrimaryAction>
                <OtherSecondaryAction to="/team">Meet The Team</OtherSecondaryAction>
              </OtherActionRow>
            </OtherHeroBody>

            <OtherHeroStack>
              {dealerStats.map((statItem) => (
                <OtherStatCard key={statItem.label}>
                  <OtherStatValue>{statItem.value}</OtherStatValue>
                  <OtherStatLabel>{statItem.label}</OtherStatLabel>
                </OtherStatCard>
              ))}
            </OtherHeroStack>
          </OtherHeroGrid>

          <OtherSection>
            <OtherSectionHeader>
              <OtherSectionKicker>Featured Branches</OtherSectionKicker>
              <OtherSectionTitle>Public dealer pages tied to real inventory coverage</OtherSectionTitle>
              <OtherSectionCopy>
                Every branch card is kept concrete: where it operates, how fast it tends to
                answer, and what level of stock depth it brings into the marketplace.
              </OtherSectionCopy>
            </OtherSectionHeader>

            <DirectoryGrid>
              {dealerPartners.map((dealer) => (
                <DirectoryCard key={dealer.slug}>
                  <DirectoryCardTop>
                    <DirectoryAvatar $accent={dealer.accent}>
                      {dealer.logo ? <img alt={dealer.brand} src={dealer.logo} /> : dealer.initials}
                    </DirectoryAvatar>

                    <DirectoryTitleGroup>
                      <DirectoryBadge>{dealer.badge}</DirectoryBadge>
                      <DirectoryTitle>{dealer.name}</DirectoryTitle>
                      <DirectorySubtitle>{dealer.brand}</DirectorySubtitle>
                    </DirectoryTitleGroup>
                  </DirectoryCardTop>

                  <DirectoryCopy>{dealer.description}</DirectoryCopy>

                  <ProfileTagGrid>
                    <ProfileTag>{dealer.inventoryCount} cars</ProfileTag>
                    <ProfileTag>{dealer.rating}</ProfileTag>
                    <ProfileTag>{dealer.reviewCount}</ProfileTag>
                  </ProfileTagGrid>

                  <DirectoryMetaGrid>
                    <DirectoryMetaItem>
                      <LocationOnOutlinedIcon fontSize="small" />
                      <span>
                        <strong>Location:</strong> {dealer.location}
                      </span>
                    </DirectoryMetaItem>
                    <DirectoryMetaItem>
                      <CallOutlinedIcon fontSize="small" />
                      <span>
                        <strong>Phone:</strong> {dealer.phone}
                      </span>
                    </DirectoryMetaItem>
                    <DirectoryMetaItem>
                      <ScheduleOutlinedIcon fontSize="small" />
                      <span>
                        <strong>Response:</strong> {dealer.responseTime}
                      </span>
                    </DirectoryMetaItem>
                  </DirectoryMetaGrid>

                  <DirectoryActionRow>
                    <OtherPrimaryAction to={`/dealers/${dealer.slug}`}>
                      View Dealer
                      <ArrowForwardRoundedIcon fontSize="small" />
                    </OtherPrimaryAction>
                    <OtherSecondaryAction to="/inventory">See Cars</OtherSecondaryAction>
                  </DirectoryActionRow>
                </DirectoryCard>
              ))}
            </DirectoryGrid>
          </OtherSection>

          <OtherSection>
            <OtherSectionHeader>
              <OtherSectionKicker>Buyer Benefits</OtherSectionKicker>
              <OtherSectionTitle>Why expose the branch before the lead form</OtherSectionTitle>
            </OtherSectionHeader>

            <OtherCardGrid>
              {dealerBenefits.map((benefitItem) => (
                <OtherFeatureCard key={benefitItem.title}>
                  <OtherFeatureIcon>
                    <StorefrontOutlinedIcon fontSize="small" />
                  </OtherFeatureIcon>
                  <OtherFeatureTitle>{benefitItem.title}</OtherFeatureTitle>
                  <OtherFeatureCopy>{benefitItem.copy}</OtherFeatureCopy>
                </OtherFeatureCard>
              ))}
            </OtherCardGrid>
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

export default DealerListPage;
