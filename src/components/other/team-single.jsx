import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import { Navigate, useParams } from "react-router-dom";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import {
  dealerPartners,
  getTeamMemberBySlug,
} from "../../data/otherData";
import { inventoryListings } from "../../data/inventoryData";
import {
  CompactProfileCard,
  CompactProfileGrid,
  CompactProfileLink,
  CompactProfileName,
  CompactProfileRole,
  DirectoryAvatar,
  DirectoryBadge,
  ListingPreviewBody,
  ListingPreviewCard,
  ListingPreviewGrid,
  ListingPreviewImage,
  ListingPreviewLink,
  ListingPreviewMeta,
  ListingPreviewPrice,
  ListingPreviewTitle,
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
  OtherSurface,
  ProfileCard,
  ProfileCardCopy,
  ProfileCardTitle,
  ProfileContactItem,
  ProfileContactList,
  ProfileContentGrid,
  ProfileHeroCard,
  ProfileHeroGrid,
  ProfileMetricCard,
  ProfileMetricGrid,
  ProfileMetricLabel,
  ProfileMetricValue,
  ProfileQuote,
  ProfileStack,
  ProfileTag,
  ProfileTagGrid,
} from "../../style/other/otherStyle";

const TeamSinglePage = () => {
  const { slug } = useParams();
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return <Navigate replace to="/team" />;
  }

  const featuredListings = member.featuredVehicleIds
    .map((vehicleId) => inventoryListings.find((vehicle) => vehicle.id === vehicleId))
    .filter(Boolean);
  const relatedDealers = dealerPartners.filter((dealer) =>
    member.relatedDealerSlugs.includes(dealer.slug)
  );

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
            <OtherBreadcrumbLink to="/team">Team</OtherBreadcrumbLink>
            <span>/</span>
            <OtherBreadcrumbCurrent>{member.name}</OtherBreadcrumbCurrent>
          </OtherBreadcrumbs>

          <ProfileHeroCard>
            <ProfileHeroGrid>
              <ProfileStack>
                <DirectoryAvatar $accent={member.accent}>{member.initials}</DirectoryAvatar>
              </ProfileStack>

              <ProfileStack>
                <DirectoryBadge>{member.role}</DirectoryBadge>
                <OtherHeroTitle>{member.name}</OtherHeroTitle>
                <OtherHeroCopy>{member.shortBio}</OtherHeroCopy>
                <OtherSectionCopy>{member.focus}</OtherSectionCopy>

                <OtherActionRow>
                  <OtherPrimaryAction to="/contact">
                    Contact This Team
                    <ArrowForwardRoundedIcon fontSize="small" />
                  </OtherPrimaryAction>
                  <OtherSecondaryAction to="/dealers">View Dealer Network</OtherSecondaryAction>
                </OtherActionRow>
              </ProfileStack>
            </ProfileHeroGrid>

            <ProfileMetricGrid>
              {member.metrics.map((metric) => (
                <ProfileMetricCard key={metric.label}>
                  <ProfileMetricValue>{metric.value}</ProfileMetricValue>
                  <ProfileMetricLabel>{metric.label}</ProfileMetricLabel>
                </ProfileMetricCard>
              ))}
            </ProfileMetricGrid>
          </ProfileHeroCard>

          <OtherSection>
            <ProfileContentGrid>
              <ProfileStack>
                <ProfileCard>
                  <ProfileCardTitle>About {member.name}</ProfileCardTitle>
                  {member.bio.map((paragraph) => (
                    <ProfileCardCopy key={paragraph}>{paragraph}</ProfileCardCopy>
                  ))}
                  <ProfileQuote>{member.quote}</ProfileQuote>
                </ProfileCard>

                <ProfileCard>
                  <ProfileCardTitle>Specialties</ProfileCardTitle>
                  <ProfileTagGrid>
                    {member.specialties.map((specialty) => (
                      <ProfileTag key={specialty}>{specialty}</ProfileTag>
                    ))}
                  </ProfileTagGrid>
                </ProfileCard>

                <ProfileCard>
                  <ProfileCardTitle>Featured Inventory</ProfileCardTitle>
                  <ListingPreviewGrid>
                    {featuredListings.map((vehicle) => (
                      <ListingPreviewCard key={vehicle.id}>
                        <ListingPreviewImage alt={vehicle.model} src={vehicle.image} />
                        <ListingPreviewBody>
                          <div>
                            <ListingPreviewTitle>
                              {vehicle.brand} {vehicle.model}
                            </ListingPreviewTitle>
                            <ListingPreviewMeta>{vehicle.trim}</ListingPreviewMeta>
                          </div>
                          <div>
                            <ListingPreviewPrice>
                              ${vehicle.price.toLocaleString("en-US")}
                            </ListingPreviewPrice>
                            <ListingPreviewMeta>{vehicle.monthlyPrice}</ListingPreviewMeta>
                          </div>
                          <ListingPreviewLink to={`/inventory/${vehicle.id}`}>
                            View Listing
                            <ArrowForwardRoundedIcon fontSize="small" />
                          </ListingPreviewLink>
                        </ListingPreviewBody>
                      </ListingPreviewCard>
                    ))}
                  </ListingPreviewGrid>
                </ProfileCard>
              </ProfileStack>

              <ProfileStack>
                <ProfileCard>
                  <ProfileCardTitle>Contact Details</ProfileCardTitle>
                  <ProfileContactList>
                    <ProfileContactItem>
                      <span>
                        <LocationOnOutlinedIcon fontSize="inherit" /> Office
                      </span>
                      <strong>{member.office}</strong>
                    </ProfileContactItem>
                    <ProfileContactItem>
                      <span>
                        <EmailOutlinedIcon fontSize="inherit" /> Email
                      </span>
                      <strong>{member.email}</strong>
                    </ProfileContactItem>
                    <ProfileContactItem>
                      <span>
                        <CallOutlinedIcon fontSize="inherit" /> Phone
                      </span>
                      <strong>{member.phone}</strong>
                    </ProfileContactItem>
                    <ProfileContactItem>
                      <span>
                        <ScheduleOutlinedIcon fontSize="inherit" /> Availability
                      </span>
                      <strong>{member.availability}</strong>
                    </ProfileContactItem>
                    <ProfileContactItem>
                      <span>
                        <LanguageOutlinedIcon fontSize="inherit" /> Languages
                      </span>
                      <strong>{member.languages.join(", ")}</strong>
                    </ProfileContactItem>
                  </ProfileContactList>
                </ProfileCard>

                <ProfileCard>
                  <ProfileCardTitle>Dealer Coverage</ProfileCardTitle>
                  <CompactProfileGrid>
                    {relatedDealers.map((dealer) => (
                      <CompactProfileCard key={dealer.slug}>
                        <DirectoryAvatar $accent={dealer.accent}>
                          {dealer.logo ? <img alt={dealer.brand} src={dealer.logo} /> : dealer.initials}
                        </DirectoryAvatar>
                        <div>
                          <CompactProfileName>{dealer.name}</CompactProfileName>
                          <CompactProfileRole>{dealer.location}</CompactProfileRole>
                        </div>
                        <CompactProfileLink to={`/dealers/${dealer.slug}`}>
                          Open Dealer Page
                          <ArrowForwardRoundedIcon fontSize="small" />
                        </CompactProfileLink>
                      </CompactProfileCard>
                    ))}
                  </CompactProfileGrid>
                </ProfileCard>
              </ProfileStack>
            </ProfileContentGrid>
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

export default TeamSinglePage;
