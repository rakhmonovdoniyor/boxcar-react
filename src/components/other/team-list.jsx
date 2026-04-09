import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import { teamMembers, teamPage, teamStats } from "../../data/otherData";
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
  OtherHeroBody,
  OtherHeroGrid,
  OtherHeroShell,
  OtherHeroStack,
  OtherHeroTitle,
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

const TeamListPage = () => {
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
            <OtherBreadcrumbCurrent>{teamPage.breadcrumb}</OtherBreadcrumbCurrent>
            <span>/</span>
            <OtherBreadcrumbCurrent>Team</OtherBreadcrumbCurrent>
          </OtherBreadcrumbs>

          <OtherHeroGrid>
            <OtherHeroBody>
              <OtherSectionKicker>Team Directory</OtherSectionKicker>
              <OtherHeroTitle>{teamPage.title}</OtherHeroTitle>
              <OtherSectionCopy>{teamPage.intro}</OtherSectionCopy>

              <OtherActionRow>
                <OtherPrimaryAction to="/dealers">
                  View Dealers
                  <ArrowForwardRoundedIcon fontSize="small" />
                </OtherPrimaryAction>
                <OtherSecondaryAction to="/contact">Talk To Us</OtherSecondaryAction>
              </OtherActionRow>
            </OtherHeroBody>

            <OtherHeroStack>
              {teamStats.map((statItem) => (
                <OtherStatCard key={statItem.label}>
                  <OtherStatValue>{statItem.value}</OtherStatValue>
                  <OtherStatLabel>{statItem.label}</OtherStatLabel>
                </OtherStatCard>
              ))}
            </OtherHeroStack>
          </OtherHeroGrid>

          <OtherSection>
            <OtherSectionHeader>
              <OtherSectionKicker>Core Leads</OtherSectionKicker>
              <OtherSectionTitle>People attached to the trust layer of the product</OtherSectionTitle>
              <OtherSectionCopy>
                The team cards stay practical: role, operating area, and the most likely
                next route if a user needs follow-up beyond the catalog itself.
              </OtherSectionCopy>
            </OtherSectionHeader>

            <DirectoryGrid>
              {teamMembers.map((member) => (
                <DirectoryCard key={member.slug}>
                  <DirectoryCardTop>
                    <DirectoryAvatar $accent={member.accent}>
                      {member.initials}
                    </DirectoryAvatar>

                    <DirectoryTitleGroup>
                      <DirectoryBadge>{member.role}</DirectoryBadge>
                      <DirectoryTitle>{member.name}</DirectoryTitle>
                      <DirectorySubtitle>{member.focus}</DirectorySubtitle>
                    </DirectoryTitleGroup>
                  </DirectoryCardTop>

                  <DirectoryCopy>{member.shortBio}</DirectoryCopy>

                  <DirectoryMetaGrid>
                    <DirectoryMetaItem>
                      <LocationOnOutlinedIcon fontSize="small" />
                      <span>
                        <strong>Office:</strong> {member.office}
                      </span>
                    </DirectoryMetaItem>
                    <DirectoryMetaItem>
                      <EmailOutlinedIcon fontSize="small" />
                      <span>
                        <strong>Email:</strong> {member.email}
                      </span>
                    </DirectoryMetaItem>
                    <DirectoryMetaItem>
                      <CallOutlinedIcon fontSize="small" />
                      <span>
                        <strong>Phone:</strong> {member.phone}
                      </span>
                    </DirectoryMetaItem>
                    <DirectoryMetaItem>
                      <TuneRoundedIcon fontSize="small" />
                      <span>
                        <strong>Focus:</strong> {member.specialties.join(", ")}
                      </span>
                    </DirectoryMetaItem>
                  </DirectoryMetaGrid>

                  <DirectoryActionRow>
                    <OtherPrimaryAction to={`/team/${member.slug}`}>
                      View Profile
                      <ArrowForwardRoundedIcon fontSize="small" />
                    </OtherPrimaryAction>
                    <OtherSecondaryAction to="/contact">Contact</OtherSecondaryAction>
                  </DirectoryActionRow>
                </DirectoryCard>
              ))}
            </DirectoryGrid>
          </OtherSection>

          <OtherSection>
            <OtherSplitGrid>
              <OtherPanel>
                <OtherPanelTitle>What these pages are for</OtherPanelTitle>
                <OtherSectionCopy>
                  Public profiles should reduce ambiguity. Users need to know who is
                  responsible for inventory quality, dealer response, finance guidance, or
                  support follow-through before they commit to the next step.
                </OtherSectionCopy>
              </OtherPanel>

              <OtherPanel>
                <OtherPanelTitle>Next best route</OtherPanelTitle>
                <OtherSectionCopy>
                  If the user wants operational context at the branch level, dealer pages
                  are the stronger continuation because they connect the team to live
                  inventory and response expectations.
                </OtherSectionCopy>
                <OtherActionRow>
                  <OtherPrimaryAction to="/dealers">
                    Open Dealer Pages
                    <ArrowForwardRoundedIcon fontSize="small" />
                  </OtherPrimaryAction>
                  <OtherSecondaryAction to="/inventory">Browse Inventory</OtherSecondaryAction>
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

export default TeamListPage;
