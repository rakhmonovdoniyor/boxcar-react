import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PriceCheckOutlinedIcon from "@mui/icons-material/PriceCheckOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import {
  aboutBenefits,
  aboutHero,
  aboutPrinciples,
  aboutStats,
} from "../../data/otherData";
import {
  OtherActionRow,
  OtherBreadcrumbCurrent,
  OtherBreadcrumbLink,
  OtherBreadcrumbs,
  OtherCardGrid,
  OtherFeatureCard,
  OtherFeatureCopy,
  OtherFeatureIcon,
  OtherFeatureTitle,
  OtherHeroArtwork,
  OtherHeroBody,
  OtherHeroCopy,
  OtherHeroGrid,
  OtherHeroShell,
  OtherHeroStack,
  OtherHeroTitle,
  OtherList,
  OtherListItem,
  OtherMain,
  OtherPageShell,
  OtherPanel,
  OtherPanelTitle,
  OtherPrimaryAction,
  OtherSecondaryAction,
  OtherSection,
  OtherSectionCopy,
  OtherSectionHeader,
  OtherSectionKicker,
  OtherSectionTitle,
  OtherSplitGrid,
  OtherStatCard,
  OtherStatLabel,
  OtherStatValue,
  OtherSurface,
} from "../../style/other/otherStyle";

const iconMap = [
  <PaymentsOutlinedIcon fontSize="small" />,
  <VerifiedOutlinedIcon fontSize="small" />,
  <PriceCheckOutlinedIcon fontSize="small" />,
  <BuildOutlinedIcon fontSize="small" />,
];

const AboutPage = () => {
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
            <OtherBreadcrumbCurrent>{aboutHero.breadcrumb}</OtherBreadcrumbCurrent>
          </OtherBreadcrumbs>

          <OtherHeroGrid>
            <OtherHeroBody>
              <OtherHeroTitle>{aboutHero.title}</OtherHeroTitle>
              <OtherHeroCopy>{aboutHero.intro}</OtherHeroCopy>

              <OtherHeroStack>
                {aboutHero.body.map((copyItem) => (
                  <OtherHeroCopy key={copyItem}>{copyItem}</OtherHeroCopy>
                ))}
              </OtherHeroStack>

              <OtherActionRow>
                <OtherPrimaryAction to="/inventory">
                  Explore Inventory
                  <ArrowForwardRoundedIcon fontSize="small" />
                </OtherPrimaryAction>
                <OtherSecondaryAction to="/contact">Contact Us</OtherSecondaryAction>
              </OtherActionRow>
            </OtherHeroBody>

            <OtherHeroStack>
              <OtherHeroArtwork />
              {aboutStats.map((statItem) => (
                <OtherStatCard key={statItem.label}>
                  <OtherStatValue>{statItem.value}</OtherStatValue>
                  <OtherStatLabel>{statItem.label}</OtherStatLabel>
                </OtherStatCard>
              ))}
            </OtherHeroStack>
          </OtherHeroGrid>

          <OtherSection>
            <OtherSectionHeader>
              <OtherSectionKicker>Why Choose Us</OtherSectionKicker>
              <OtherSectionTitle>Service signals that support buyer confidence</OtherSectionTitle>
              <OtherSectionCopy>
                The public pages stay useful only if they reinforce what the catalog is
                already trying to do: make the next decision easier.
              </OtherSectionCopy>
            </OtherSectionHeader>

            <OtherCardGrid>
              {aboutBenefits.map((benefitItem, index) => (
                <OtherFeatureCard key={benefitItem.title}>
                  <OtherFeatureIcon>{iconMap[index]}</OtherFeatureIcon>
                  <OtherFeatureTitle>{benefitItem.title}</OtherFeatureTitle>
                  <OtherFeatureCopy>{benefitItem.copy}</OtherFeatureCopy>
                </OtherFeatureCard>
              ))}
            </OtherCardGrid>
          </OtherSection>

          <OtherSection>
            <OtherSplitGrid>
              <OtherPanel>
                <OtherPanelTitle>What drives the product</OtherPanelTitle>
                <OtherSectionCopy>
                  A cleaner marketplace does not come from one visual trick. It comes from
                  keeping important actions visible and reducing the number of weak decisions
                  the user has to make before trust is formed.
                </OtherSectionCopy>
                <OtherList>
                  {aboutPrinciples.map((principle) => (
                    <OtherListItem key={principle}>
                      <CheckRoundedIcon fontSize="small" />
                      <span>{principle}</span>
                    </OtherListItem>
                  ))}
                </OtherList>
              </OtherPanel>

              <OtherPanel>
                <OtherPanelTitle>Next best routes</OtherPanelTitle>
                <OtherSectionCopy>
                  From here the strongest continuation is either into live inventory or into
                  a direct contact path for dealer and partnership questions.
                </OtherSectionCopy>
                <OtherActionRow>
                  <OtherPrimaryAction to="/inventory">
                    Browse Cars
                    <ArrowForwardRoundedIcon fontSize="small" />
                  </OtherPrimaryAction>
                  <OtherSecondaryAction to="/blog">Read Blog</OtherSecondaryAction>
                </OtherActionRow>
              </OtherPanel>
            </OtherSplitGrid>
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

export default AboutPage;
