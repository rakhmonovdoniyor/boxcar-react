import React, { useEffect, useMemo, useState } from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
  DetailChip,
  DetailChipRow,
  DetailCopy,
  DetailDealerCard,
  DetailDealerHeading,
  DetailDealerName,
  DetailDealerText,
  DetailField,
  DetailFinanceNote,
  DetailForm,
  DetailFormFeedback,
  DetailFormGrid,
  DetailHeroShell,
  DetailLocationBody,
  DetailLocationCard,
  DetailMain,
  DetailMapVisual,
  DetailMediaActions,
  DetailMediaButton,
  DetailMediaToolbar,
  DetailMetricCard,
  DetailMetricLabel,
  DetailMetricsRow,
  DetailMetricValue,
  DetailOverviewGrid,
  DetailOverviewItem,
  DetailOverviewLabel,
  DetailOverviewValue,
  DetailPrimaryButton,
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
  DetailSurface,
  DetailTextarea,
  DetailUtilityButton,
  DetailUtilityCard,
  DetailUtilityTitle,
  DetailWideGallery,
  DetailWideGalleryTile,
  DetailWideMain,
  DetailWideTopRow,
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

const InventoryDetailGalleryPage = () => {
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

  const metricItems = [
    { label: "Mileage", value: vehicle.mileage },
    { label: "Fuel Type", value: vehicle.fuel },
    { label: "Transmission", value: vehicle.transmission },
    { label: "Year", value: vehicle.year },
    { label: "Body Style", value: vehicle.category },
  ];
  const visibleGallery = [
    { image: vehicle.gallery[activeImage], sourceIndex: activeImage },
    ...vehicle.gallery
      .map((image, index) => ({ image, sourceIndex: index }))
      .filter((item) => item.sourceIndex !== activeImage)
      .slice(0, 2),
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

          <DetailMediaToolbar>
            <DetailMediaActions>
              <DetailMediaButton type="button" $active>
                <VideocamOutlinedIcon fontSize="small" />
                Video
              </DetailMediaButton>
              <DetailMediaButton type="button">360</DetailMediaButton>
              <DetailMediaButton type="button" $active>
                View All Photos
              </DetailMediaButton>
            </DetailMediaActions>

            <DetailMediaActions>
              <DetailMediaButton type="button" onClick={scrollToMessageForm}>
                <DirectionsCarOutlinedIcon fontSize="small" />
                Schedule Test Drive
              </DetailMediaButton>
              <DetailMediaButton
                as="a"
                href={vinReportUrl}
                rel="noreferrer"
                target="_blank"
              >
                <StickyNote2OutlinedIcon fontSize="small" />
                View VIN Report
              </DetailMediaButton>
              <DetailMediaButton type="button" onClick={handleShare}>
                <IosShareOutlinedIcon fontSize="small" />
                {shareCopied ? "Copied" : "Share"}
              </DetailMediaButton>
            </DetailMediaActions>
          </DetailMediaToolbar>

          <DetailWideGallery>
            {visibleGallery.map((item, index) => (
              <DetailWideGalleryTile
                key={`${item.image}-${item.sourceIndex}`}
                onClick={() => setActiveImage(item.sourceIndex)}
                type="button"
                $active={index === 0}
              >
                <img alt={`${vehicle.brand} ${vehicle.model}`} src={item.image} />
              </DetailWideGalleryTile>
            ))}
          </DetailWideGallery>

          <DetailWideTopRow>
            <DetailWideMain>
              <div>
                <DetailSectionTitle>
                  {vehicle.brand} {vehicle.model}
                </DetailSectionTitle>
                <DetailCopy>{vehicle.trim}</DetailCopy>
              </div>

              <DetailChipRow>
                <DetailChip>{vehicle.condition.replace(" Cars", "")}</DetailChip>
                <DetailChip>{vehicle.inStock ? "In Stock" : "On Request"}</DetailChip>
                <DetailChip>{vehicle.badge}</DetailChip>
              </DetailChipRow>

              <DetailMetricsRow>
                {metricItems.map((item) => (
                  <DetailMetricCard key={item.label}>
                    <DetailMetricValue>{item.value}</DetailMetricValue>
                    <DetailMetricLabel>{item.label}</DetailMetricLabel>
                  </DetailMetricCard>
                ))}
              </DetailMetricsRow>

              <DetailSection>
                <DetailSectionTitle>Description</DetailSectionTitle>
                <DetailCopy>{vehicle.description}</DetailCopy>
              </DetailSection>
            </DetailWideMain>

            <div>
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
            </div>
          </DetailWideTopRow>

          <DetailSection>
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

          <DetailWideTopRow>
            <DetailWideMain>
              <DetailSection>
                <DetailSectionTitle>Location</DetailSectionTitle>
                <DetailLocationCard>
                  <DetailMapVisual />
                  <DetailLocationBody>
                    <DetailDealerText>{vehicle.locationNote}</DetailDealerText>
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
                    placeholder="I want to know more about this vehicle, current availability, and the next test-drive slot."
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
            </DetailWideMain>

            <div style={{ display: "grid", gap: "18px" }}>
              <DetailDealerCard>
                <DetailDealerHeading>
                  <DetailDealerName>{vehicle.dealer.name}</DetailDealerName>
                  <DetailDealerText>{vehicle.dealer.responseTime}</DetailDealerText>
                </DetailDealerHeading>

                <DetailDealerText>{vehicle.dealer.address}</DetailDealerText>
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
              </DetailDealerCard>

              <DetailUtilityCard>
                <DetailUtilityTitle>Useful Actions</DetailUtilityTitle>
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
                  as="a"
                  href={vinReportUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <StickyNote2OutlinedIcon fontSize="small" />
                  View VIN Report
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
            </div>
          </DetailWideTopRow>

          <DetailRelatedSection>
            <DetailSectionTitle>Related Listings</DetailSectionTitle>
            <InventoryListingGridSection listings={relatedListings} />
          </DetailRelatedSection>
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

export default InventoryDetailGalleryPage;
