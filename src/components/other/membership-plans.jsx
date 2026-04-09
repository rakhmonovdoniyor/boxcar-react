import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import {
  membershipPage,
  membershipPlans,
  membershipSignals,
} from "../../data/otherData";
import {
  OtherActionRow,
  OtherBreadcrumbCurrent,
  OtherBreadcrumbLink,
  OtherBreadcrumbs,
  OtherHeroCopy,
  OtherHeroShell,
  OtherHeroTitle,
  OtherMain,
  OtherPageShell,
  OtherPrimaryAction,
  OtherSecondaryAction,
  OtherSection,
  OtherSectionCopy,
  OtherSectionKicker,
  OtherSplitGrid,
  OtherSurface,
  PricingBadge,
  PricingCard,
  PricingFeatureItem,
  PricingFeatureList,
  PricingGrid,
  PricingName,
  PricingPeriod,
  PricingPrice,
  PricingPriceRow,
  PricingTop,
  ProfileCard,
  ProfileCardTitle,
} from "../../style/other/otherStyle";

const MembershipPlansPage = () => {
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
            <OtherBreadcrumbCurrent>{membershipPage.breadcrumb}</OtherBreadcrumbCurrent>
            <span>/</span>
            <OtherBreadcrumbCurrent>Membership Plans</OtherBreadcrumbCurrent>
          </OtherBreadcrumbs>

          <div style={{ display: "grid", gap: "14px", marginBottom: "24px" }}>
            <OtherSectionKicker>Membership</OtherSectionKicker>
            <OtherHeroTitle>{membershipPage.title}</OtherHeroTitle>
            <OtherHeroCopy>{membershipPage.intro}</OtherHeroCopy>
          </div>

          <OtherSection>
            <PricingGrid>
              {membershipPlans.map((plan) => (
                <PricingCard key={plan.name} $featured={plan.featured}>
                  <PricingTop>
                    <PricingBadge>{plan.badge}</PricingBadge>
                    <PricingName>{plan.name}</PricingName>
                    <OtherSectionCopy>{plan.description}</OtherSectionCopy>
                  </PricingTop>

                  <PricingPriceRow>
                    <PricingPrice>{plan.price}</PricingPrice>
                    <PricingPeriod>{plan.period}</PricingPeriod>
                  </PricingPriceRow>

                  <PricingFeatureList>
                    {plan.features.map((feature) => (
                      <PricingFeatureItem key={feature}>
                        <CheckRoundedIcon fontSize="small" />
                        <span>{feature}</span>
                      </PricingFeatureItem>
                    ))}
                  </PricingFeatureList>

                  <OtherPrimaryAction to="/contact">
                    Start With {plan.name}
                    <ArrowForwardRoundedIcon fontSize="small" />
                  </OtherPrimaryAction>
                </PricingCard>
              ))}
            </PricingGrid>
          </OtherSection>

          <OtherSection>
            <OtherSplitGrid>
              <ProfileCard>
                <ProfileCardTitle>What membership changes</ProfileCardTitle>
                <PricingFeatureList>
                  {membershipSignals.map((signal) => (
                    <PricingFeatureItem key={signal}>
                      <WorkspacePremiumRoundedIcon fontSize="small" />
                      <span>{signal}</span>
                    </PricingFeatureItem>
                  ))}
                </PricingFeatureList>
              </ProfileCard>

              <ProfileCard>
                <ProfileCardTitle>Need a custom branch setup?</ProfileCardTitle>
                <OtherSectionCopy>
                  If the branch or dealer group needs a different onboarding shape, the next
                  action should be a direct conversation instead of forcing the user through a
                  generic self-serve flow.
                </OtherSectionCopy>
                <OtherActionRow>
                  <OtherPrimaryAction to="/contact">
                    Talk To Sales
                    <ArrowForwardRoundedIcon fontSize="small" />
                  </OtherPrimaryAction>
                  <OtherSecondaryAction to="/dealers">See Dealer Pages</OtherSecondaryAction>
                </OtherActionRow>
              </ProfileCard>
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

export default MembershipPlansPage;
