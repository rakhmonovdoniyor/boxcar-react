import React, { useMemo, useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import { faqPage, faqSections } from "../../data/otherData";
import {
  AccordionButton,
  AccordionCard,
  AccordionContent,
  AccordionGroup,
  OtherActionRow,
  OtherBreadcrumbCurrent,
  OtherBreadcrumbLink,
  OtherBreadcrumbs,
  OtherCardGrid,
  OtherFeatureCard,
  OtherFeatureIcon,
  OtherFeatureTitle,
  OtherHeroCopy,
  OtherHeroShell,
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
  OtherSurface,
} from "../../style/other/otherStyle";

const FaqPage = () => {
  const firstOpenKey = useMemo(
    () => `${faqSections[0].title}-0`,
    []
  );
  const [openKey, setOpenKey] = useState(firstOpenKey);

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
            <OtherBreadcrumbCurrent>{faqPage.breadcrumb}</OtherBreadcrumbCurrent>
            <span>/</span>
            <OtherBreadcrumbCurrent>FAQ</OtherBreadcrumbCurrent>
          </OtherBreadcrumbs>

          <div style={{ display: "grid", gap: "14px", marginBottom: "24px" }}>
            <OtherSectionKicker>FAQ</OtherSectionKicker>
            <OtherHeroTitle>{faqPage.title}</OtherHeroTitle>
            <OtherHeroCopy>{faqPage.intro}</OtherHeroCopy>
          </div>

          <OtherSection>
            <OtherCardGrid>
              {faqSections.map((section) => (
                <OtherFeatureCard key={section.title}>
                  <OtherFeatureIcon>
                    <HelpOutlineRoundedIcon fontSize="small" />
                  </OtherFeatureIcon>
                  <OtherFeatureTitle>{section.title}</OtherFeatureTitle>
                  <OtherSectionCopy>
                    {section.items.length} common questions collected into one block.
                  </OtherSectionCopy>
                </OtherFeatureCard>
              ))}
            </OtherCardGrid>
          </OtherSection>

          <OtherSection>
            <OtherSectionHeader>
              <OtherSectionKicker>Answers</OtherSectionKicker>
              <OtherSectionTitle>Questions grouped around the real marketplace flow</OtherSectionTitle>
            </OtherSectionHeader>

            <AccordionGroup>
              {faqSections.map((section) =>
                section.items.map((item, index) => {
                  const itemKey = `${section.title}-${index}`;
                  const isOpen = openKey === itemKey;

                  return (
                    <AccordionCard key={itemKey} $open={isOpen}>
                      <AccordionButton
                        type="button"
                        $open={isOpen}
                        onClick={() => setOpenKey(isOpen ? "" : itemKey)}
                      >
                        <span>
                          {section.title}: {item.question}
                        </span>
                        <ExpandMoreRoundedIcon fontSize="small" />
                      </AccordionButton>
                      {isOpen ? <AccordionContent>{item.answer}</AccordionContent> : null}
                    </AccordionCard>
                  );
                })
              )}
            </AccordionGroup>
          </OtherSection>

          <OtherSection>
            <OtherSectionHeader>
              <OtherSectionKicker>Still Need Help</OtherSectionKicker>
              <OtherSectionTitle>Continue into a clearer next action</OtherSectionTitle>
              <OtherSectionCopy>
                If the answer depends on inventory, branch operations, or financing, the
                cleaner continuation is to move into the matching public route rather than
                stop on a generic support screen.
              </OtherSectionCopy>
            </OtherSectionHeader>

            <OtherActionRow>
              <OtherPrimaryAction to="/contact">
                Contact Support
                <ArrowForwardRoundedIcon fontSize="small" />
              </OtherPrimaryAction>
              <OtherSecondaryAction to="/dealers">Browse Dealers</OtherSecondaryAction>
            </OtherActionRow>
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

export default FaqPage;
