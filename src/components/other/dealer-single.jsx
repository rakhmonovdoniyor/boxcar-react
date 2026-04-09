import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
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
  getDealerBySlug,
  teamMembers,
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
  OtherList,
  OtherListItem,
  OtherMain,
  OtherPageShell,
  OtherPrimaryAction,
  OtherSection,
  OtherSectionCopy,
  OtherSecondaryAction,
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
  ProfileStack,
  ProfileTag,
  ProfileTagGrid,
} from "../../style/other/otherStyle";

const DealerSinglePage = () => {
  const { slug } = useParams();
  const dealer = getDealerBySlug(slug);

  if (!dealer) {
    return <Navigate replace to="/dealers" />;
  }

  const branchInventory = inventoryListings
    .filter((vehicle) => vehicle.brand === dealer.brand)
    .slice(0, 4);
  const assignedAdvisors = teamMembers.filter((member) =>
    dealer.advisorSlugs.includes(member.slug)
  );
  const otherBranches = dealerPartners.filter((branch) => branch.slug !== dealer.slug).slice(0, 2);

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
            <OtherBreadcrumbLink to="/dealers">Dealers</OtherBreadcrumbLink>
            <span>/</span>
            <OtherBreadcrumbCurrent>{dealer.name}</OtherBreadcrumbCurrent>
          </OtherBreadcrumbs>

          <ProfileHeroCard>
            <ProfileHeroGrid>
              <ProfileStack>
                <DirectoryAvatar $accent={dealer.accent}>
                  {dealer.logo ? <img alt={dealer.brand} src={dealer.logo} /> : dealer.initials}
                </DirectoryAvatar>
              </ProfileStack>

              <ProfileStack>
                <DirectoryBadge>{dealer.badge}</DirectoryBadge>
                <OtherHeroTitle>{dealer.name}</OtherHeroTitle>
                <OtherHeroCopy>{dealer.description}</OtherHeroCopy>
                <OtherSectionCopy>{dealer.location}</OtherSectionCopy>

                <OtherActionRow>
                  <OtherPrimaryAction to="/inventory">
                    Explore {dealer.brand} Cars
                    <ArrowForwardRoundedIcon fontSize="small" />
                  </OtherPrimaryAction>
                  <OtherSecondaryAction to="/contact">Contact Dealer</OtherSecondaryAction>
                </OtherActionRow>
              </ProfileStack>
            </ProfileHeroGrid>

            <ProfileMetricGrid>
              {dealer.metrics.map((metric) => (
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
                  <ProfileCardTitle>Branch Overview</ProfileCardTitle>
                  <ProfileCardCopy>
                    {dealer.name} is represented as a branch-level page so users can judge
                    the operating context before opening a lead form. The focus is on stock
                    depth, service capability, and who is responsible for the next step.
                  </ProfileCardCopy>
                  <ProfileCardCopy>
                    This branch currently handles {dealer.brand} inventory and keeps public
                    expectations clear around availability, follow-up, and showroom response
                    time.
                  </ProfileCardCopy>
                </ProfileCard>

                <ProfileCard>
                  <ProfileCardTitle>Key Services</ProfileCardTitle>
                  <ProfileTagGrid>
                    {dealer.services.map((service) => (
                      <ProfileTag key={service}>{service}</ProfileTag>
                    ))}
                  </ProfileTagGrid>
                </ProfileCard>

                <ProfileCard>
                  <ProfileCardTitle>Branch Highlights</ProfileCardTitle>
                  <OtherList>
                    {dealer.highlights.map((highlight) => (
                      <OtherListItem key={highlight}>
                        <CheckRoundedIcon fontSize="small" />
                        <span>{highlight}</span>
                      </OtherListItem>
                    ))}
                  </OtherList>
                </ProfileCard>

                <ProfileCard>
                  <ProfileCardTitle>Available Inventory</ProfileCardTitle>
                  <ListingPreviewGrid>
                    {branchInventory.map((vehicle) => (
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
                        <LocationOnOutlinedIcon fontSize="inherit" /> Address
                      </span>
                      <strong>{dealer.location}</strong>
                    </ProfileContactItem>
                    <ProfileContactItem>
                      <span>
                        <EmailOutlinedIcon fontSize="inherit" /> Email
                      </span>
                      <strong>{dealer.email}</strong>
                    </ProfileContactItem>
                    <ProfileContactItem>
                      <span>
                        <CallOutlinedIcon fontSize="inherit" /> Phone
                      </span>
                      <strong>{dealer.phone}</strong>
                    </ProfileContactItem>
                    <ProfileContactItem>
                      <span>
                        <ScheduleOutlinedIcon fontSize="inherit" /> Hours
                      </span>
                      <strong>{dealer.hours}</strong>
                    </ProfileContactItem>
                    <ProfileContactItem>
                      <span>
                        <ScheduleOutlinedIcon fontSize="inherit" /> Response
                      </span>
                      <strong>{dealer.responseTime}</strong>
                    </ProfileContactItem>
                  </ProfileContactList>
                </ProfileCard>

                <ProfileCard>
                  <ProfileCardTitle>Assigned Advisors</ProfileCardTitle>
                  <CompactProfileGrid>
                    {assignedAdvisors.map((advisor) => (
                      <CompactProfileCard key={advisor.slug}>
                        <DirectoryAvatar $accent={advisor.accent}>
                          {advisor.initials}
                        </DirectoryAvatar>
                        <div>
                          <CompactProfileName>{advisor.name}</CompactProfileName>
                          <CompactProfileRole>{advisor.role}</CompactProfileRole>
                        </div>
                        <CompactProfileLink to={`/team/${advisor.slug}`}>
                          View Profile
                          <ArrowForwardRoundedIcon fontSize="small" />
                        </CompactProfileLink>
                      </CompactProfileCard>
                    ))}
                  </CompactProfileGrid>
                </ProfileCard>

                <ProfileCard>
                  <ProfileCardTitle>Other Branches</ProfileCardTitle>
                  <CompactProfileGrid>
                    {otherBranches.map((branch) => (
                      <CompactProfileCard key={branch.slug}>
                        <DirectoryAvatar $accent={branch.accent}>
                          {branch.logo ? <img alt={branch.brand} src={branch.logo} /> : branch.initials}
                        </DirectoryAvatar>
                        <div>
                          <CompactProfileName>{branch.name}</CompactProfileName>
                          <CompactProfileRole>{branch.brand}</CompactProfileRole>
                        </div>
                        <CompactProfileLink to={`/dealers/${branch.slug}`}>
                          Open Branch
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

export default DealerSinglePage;
