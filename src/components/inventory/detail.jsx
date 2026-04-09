import React, { useEffect, useMemo, useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Rotate90DegreesCcwOutlinedIcon from "@mui/icons-material/Rotate90DegreesCcwOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link, Navigate, useParams } from "react-router-dom";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import { useAppSession } from "../auth/app-session";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import {
  getInventoryVehicleById,
  getRelatedInventoryListings,
} from "../../data/inventoryData";
import {
  InventoryBreadcrumbCurrent,
  InventoryBreadcrumbLink,
  InventoryBreadcrumbs,
  InventoryPageShell,
} from "../../style/inventory/inventoryStyle";
import {
  DetailActionRow,
  DetailAnchorLink,
  DetailAnchorTabs,
  DetailChip,
  DetailChipRow,
  DetailCopy,
  DetailDealerCard,
  DetailDealerHeading,
  DetailDealerName,
  DetailDealerText,
  DetailFactPill,
  DetailFactRow,
  DetailFeatureGrid,
  DetailFeatureItem,
  DetailField,
  DetailFinanceNote,
  DetailForm,
  DetailFormFeedback,
  DetailFormGrid,
  DetailGhostButton,
  DetailGallery,
  DetailHeader,
  DetailHeaderMain,
  DetailHeroShell,
  DetailIntroCard,
  DetailLocationBody,
  DetailLocationCard,
  DetailMain,
  DetailMainColumn,
  DetailMapVisual,
  DetailMediaActions,
  DetailMediaButton,
  DetailMediaToolbar,
  DetailOverviewGrid,
  DetailOverviewItem,
  DetailOverviewLabel,
  DetailOverviewValue,
  DetailPrimaryButton,
  DetailPrimaryImage,
  DetailPrimaryMedia,
  DetailPriceCard,
  DetailPriceLabel,
  DetailPriceMeta,
  DetailPriceMetaLabel,
  DetailPriceMetaValue,
  DetailPriceValue,
  DetailRelatedSection,
  DetailSecondaryButton,
  DetailSection,
  DetailSectionTitle,
  DetailSidebar,
  DetailSpecCard,
  DetailSpecIcon,
  DetailSpecLabel,
  DetailSpecsGrid,
  DetailSpecValue,
  DetailSurface,
  DetailTextarea,
  DetailThumb,
  DetailThumbGrid,
  DetailTitle,
  DetailTopGrid,
  DetailUtilityButton,
  DetailUtilityCard,
  DetailUtilityTitle,
} from "../../style/inventory/detailStyle";
import InventoryListingGridSection from "./listing-grid";
import {
  buildBrochureUrl,
  buildDirectionsUrl,
  buildVinReportUrl,
  buildWhatsAppUrl,
  copyCurrentPageUrl,
  scrollToMessageForm,
} from "./detail-utils";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const InventoryDetailPage = () => {
  const { isFavorite, toggleFavorite } = useAppSession();
  const { vehicleId } = useParams();
  const vehicle = useMemo(() => getInventoryVehicleById(vehicleId), [vehicleId]);
  const relatedListings = useMemo(
    () => getRelatedInventoryListings(vehicleId, 4),
    [vehicleId]
  );
  const [activeImage, setActiveImage] = useState(0);
  const [messageSent, setMessageSent] = useState(false);
  const [shareCopied, setShareCopied] = useState(false);

  useEffect(() => {
    setActiveImage(0);
    setMessageSent(false);
    setShareCopied(false);
  }, [vehicleId]);

  if (!vehicle) {
    return <Navigate replace to="/inventory" />;
  }

  const vehicleLabel = `${vehicle.brand} ${vehicle.model}`;
  const directionsUrl = buildDirectionsUrl(vehicle.dealer.address);
  const whatsAppUrl = buildWhatsAppUrl(vehicle.dealer.phone, vehicleLabel);
  const vinReportUrl = buildVinReportUrl(vehicle);
  const brochureUrl = buildBrochureUrl(vehicle);

  const handleShare = async () => {
    const copied = await copyCurrentPageUrl();
    setShareCopied(copied);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setMessageSent(true);
  };

  const topSpecs = [
    {
      label: "Mileage",
      value: vehicle.mileage,
      icon: <SpeedOutlinedIcon fontSize="small" />,
    },
    {
      label: "Fuel Type",
      value: vehicle.fuel,
      icon: <LocalGasStationOutlinedIcon fontSize="small" />,
    },
    {
      label: "Transmission",
      value: vehicle.transmission,
      icon: <SettingsOutlinedIcon fontSize="small" />,
    },
    {
      label: "Body",
      value: vehicle.category,
      icon: <CalendarMonthOutlinedIcon fontSize="small" />,
    },
  ];

  return (
    <InventoryPageShell>
      <DetailHeroShell>
        <SiteHeader navLinks={navLinks} />
      </DetailHeroShell>

      <DetailMain>
        <DetailSurface>
          <InventoryBreadcrumbs>
            <InventoryBreadcrumbLink to="/">Home</InventoryBreadcrumbLink>
            <span>/</span>
            <InventoryBreadcrumbLink to="/inventory">Cars For Sale</InventoryBreadcrumbLink>
            <span>/</span>
            <InventoryBreadcrumbCurrent>
              {vehicle.brand} {vehicle.model}
            </InventoryBreadcrumbCurrent>
          </InventoryBreadcrumbs>

          <DetailHeader>
            <DetailHeaderMain>
              <DetailTitle>
                {vehicle.brand} {vehicle.model}
              </DetailTitle>

              <DetailFactRow>
                <DetailFactPill>
                  <CalendarMonthOutlinedIcon fontSize="small" />
                  {vehicle.year}
                </DetailFactPill>
                <DetailFactPill>
                  <SpeedOutlinedIcon fontSize="small" />
                  {vehicle.mileage}
                </DetailFactPill>
                <DetailFactPill>
                  <SettingsOutlinedIcon fontSize="small" />
                  {vehicle.transmission}
                </DetailFactPill>
                <DetailFactPill>
                  <LocalGasStationOutlinedIcon fontSize="small" />
                  {vehicle.fuel}
                </DetailFactPill>
              </DetailFactRow>
            </DetailHeaderMain>

            <DetailActionRow>
              <DetailGhostButton type="button" onClick={handleShare}>
                <IosShareOutlinedIcon fontSize="small" />
                {shareCopied ? "Copied" : "Share"}
              </DetailGhostButton>
              <DetailGhostButton type="button" onClick={() => toggleFavorite(vehicle.id)}>
                {isFavorite(vehicle.id) ? (
                  <FavoriteRoundedIcon fontSize="small" style={{ color: "#ff4d6d" }} />
                ) : (
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                )}
                {isFavorite(vehicle.id) ? "Saved" : "Save"}
              </DetailGhostButton>
            </DetailActionRow>
          </DetailHeader>

          <DetailTopGrid>
            <DetailMainColumn>
              <DetailMediaToolbar>
                <DetailMediaActions>
                  <DetailMediaButton type="button" $active>
                    <VideocamOutlinedIcon fontSize="small" />
                    Video
                  </DetailMediaButton>
                  <DetailMediaButton type="button">
                    <Rotate90DegreesCcwOutlinedIcon fontSize="small" />
                    360
                  </DetailMediaButton>
                  <DetailMediaButton
                    as={Link}
                    to={`/inventory/${vehicleId}/gallery`}
                    type="button"
                  >
                    View All Photos
                  </DetailMediaButton>
                </DetailMediaActions>
              </DetailMediaToolbar>

              <DetailGallery>
                <DetailPrimaryMedia>
                  <DetailPrimaryImage
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    src={vehicle.gallery[activeImage]}
                  />
                </DetailPrimaryMedia>

                <DetailThumbGrid>
                  {vehicle.gallery.slice(0, 4).map((image, index) => (
                    <DetailThumb
                      $active={activeImage === index}
                      key={`${image}-${index}`}
                      onClick={() => setActiveImage(index)}
                      type="button"
                    >
                      <img alt={`${vehicle.brand} ${vehicle.model}`} src={image} />
                    </DetailThumb>
                  ))}
                </DetailThumbGrid>
              </DetailGallery>

              <DetailSpecsGrid>
                {topSpecs.map((spec) => (
                  <DetailSpecCard key={spec.label}>
                    <DetailSpecIcon>{spec.icon}</DetailSpecIcon>
                    <DetailSpecValue>{spec.value}</DetailSpecValue>
                    <DetailSpecLabel>{spec.label}</DetailSpecLabel>
                  </DetailSpecCard>
                ))}
              </DetailSpecsGrid>

              <DetailAnchorTabs>
                <DetailAnchorLink href="#overview">Overview</DetailAnchorLink>
                <DetailAnchorLink href="#features">Features</DetailAnchorLink>
                <DetailAnchorLink href="#location">Location</DetailAnchorLink>
                <DetailAnchorLink href="#message">Message Dealer</DetailAnchorLink>
              </DetailAnchorTabs>

              <DetailIntroCard>
                <DetailSectionTitle>Dealer Description</DetailSectionTitle>
                <DetailCopy>{vehicle.description}</DetailCopy>
                <DetailChipRow>
                  <DetailChip>{vehicle.condition.replace(" Cars", "")}</DetailChip>
                  <DetailChip>{vehicle.inStock ? "In Stock" : "On Request"}</DetailChip>
                  <DetailChip $tone="soft">{vehicle.dealer.responseTime}</DetailChip>
                </DetailChipRow>
              </DetailIntroCard>

              <DetailSection id="overview">
                <DetailSectionTitle>Car Overview</DetailSectionTitle>
                <DetailOverviewGrid>
                  {vehicle.overview.map((item) => (
                    <DetailOverviewItem key={item.label}>
                      <DetailOverviewLabel>{item.label}</DetailOverviewLabel>
                      <DetailOverviewValue>{item.value}</DetailOverviewValue>
                    </DetailOverviewItem>
                  ))}
                </DetailOverviewGrid>
              </DetailSection>

              <DetailSection id="features">
                <DetailSectionTitle>Features</DetailSectionTitle>
                <DetailFeatureGrid>
                  {vehicle.features.map((feature) => (
                    <DetailFeatureItem key={feature}>{feature}</DetailFeatureItem>
                  ))}
                </DetailFeatureGrid>
              </DetailSection>

              <DetailSection id="location">
                <DetailSectionTitle>Location</DetailSectionTitle>
                <DetailLocationCard>
                  <DetailMapVisual />
                  <DetailLocationBody>
                    <DetailDealerText>{vehicle.locationNote}</DetailDealerText>
                    <DetailDealerText>
                      <LocationOnOutlinedIcon fontSize="small" /> {vehicle.dealer.address}
                    </DetailDealerText>
                  </DetailLocationBody>
                </DetailLocationCard>
              </DetailSection>

              <DetailSection id="message">
                <DetailSectionTitle>Message Dealer</DetailSectionTitle>
                <DetailForm onSubmit={handleMessageSubmit}>
                  <DetailFormGrid>
                    <DetailField placeholder="First name" type="text" />
                    <DetailField placeholder="Last name" type="text" />
                    <DetailField placeholder="Email address" type="email" />
                    <DetailField placeholder="Phone number" type="tel" />
                  </DetailFormGrid>
                  <DetailTextarea
                    placeholder="I want to know more about this vehicle, available finance plans, and the next test-drive slot."
                  />
                  {messageSent ? (
                    <DetailFormFeedback>
                      Your message was sent to {vehicle.dealer.name}. Expect a reply within{" "}
                      {vehicle.dealer.responseTime.toLowerCase()}.
                    </DetailFormFeedback>
                  ) : null}
                  <DetailPrimaryButton type="submit">Send Message</DetailPrimaryButton>
                </DetailForm>
              </DetailSection>

              <DetailRelatedSection>
                <DetailSectionTitle>Related Listings</DetailSectionTitle>
                <InventoryListingGridSection listings={relatedListings} />
              </DetailRelatedSection>
            </DetailMainColumn>

            <DetailSidebar>
              <DetailPriceCard>
                <div>
                  <DetailPriceLabel>Our Price</DetailPriceLabel>
                  <DetailPriceValue>
                    {priceFormatter.format(vehicle.price)}
                  </DetailPriceValue>
                </div>

                <DetailPriceMeta>
                  <DetailPriceMetaLabel>Instant Savings</DetailPriceMetaLabel>
                  <DetailPriceMetaValue>{vehicle.instantSavings}</DetailPriceMetaValue>
                </DetailPriceMeta>

                <DetailFinanceNote>{vehicle.financeNote}</DetailFinanceNote>

                <DetailPrimaryButton type="button" onClick={scrollToMessageForm}>
                  <PaymentsOutlinedIcon fontSize="small" />
                  Make An Offer
                </DetailPrimaryButton>
                <DetailSecondaryButton type="button" onClick={scrollToMessageForm}>
                  <DirectionsCarOutlinedIcon fontSize="small" />
                  Schedule Test Drive
                </DetailSecondaryButton>
              </DetailPriceCard>

              <DetailDealerCard>
                <DetailDealerHeading>
                  <DetailDealerName>{vehicle.dealer.name}</DetailDealerName>
                  <DetailDealerText>{vehicle.dealer.responseTime}</DetailDealerText>
                </DetailDealerHeading>

                <DetailDealerText>
                  <LocationOnOutlinedIcon fontSize="small" /> {vehicle.dealer.address}
                </DetailDealerText>
                <DetailDealerText>
                  <PhoneOutlinedIcon fontSize="small" /> {vehicle.dealer.phone}
                </DetailDealerText>

                <DetailSecondaryButton
                  as="a"
                  href={directionsUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Get Directions
                </DetailSecondaryButton>
                <DetailPrimaryButton type="button" onClick={scrollToMessageForm}>
                  Message Dealer
                </DetailPrimaryButton>
              </DetailDealerCard>

              <DetailUtilityCard>
                <DetailUtilityTitle>Useful Actions</DetailUtilityTitle>
                <DetailUtilityButton
                  as="a"
                  href={vinReportUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <StickyNote2OutlinedIcon fontSize="small" />
                  View VIN Report
                </DetailUtilityButton>
                <DetailUtilityButton
                  as="a"
                  href={brochureUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <DescriptionOutlinedIcon fontSize="small" />
                  Car Brochure
                </DetailUtilityButton>
                <DetailUtilityButton
                  $primary
                  as="a"
                  href={whatsAppUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon fontSize="small" />
                  Chat via WhatsApp
                </DetailUtilityButton>
              </DetailUtilityCard>
            </DetailSidebar>
          </DetailTopGrid>
        </DetailSurface>
      </DetailMain>

      <FooterSection
        columns={footerColumns}
        footerMeta={footerMeta}
        socialLinks={socialLinks}
      />
    </InventoryPageShell>
  );
};

export default InventoryDetailPage;
