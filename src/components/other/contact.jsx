import React, { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import {
  contactDetails,
  contactHours,
  contactPage,
} from "../../data/otherData";
import {
  ContactField,
  ContactFieldGrid,
  ContactForm,
  ContactFormCard,
  ContactHoursList,
  ContactHoursRow,
  ContactInfoCard,
  ContactInfoLabel,
  ContactInfoRow,
  ContactInfoStack,
  ContactInfoTitle,
  ContactInfoValue,
  ContactGrid,
  ContactMapVisual,
  ContactSubmitButton,
  ContactSuccess,
  OtherBreadcrumbCurrent,
  OtherBreadcrumbLink,
  OtherBreadcrumbs,
  OtherHeroCopy,
  OtherHeroShell,
  OtherHeroTitle,
  OtherMain,
  OtherPageShell,
  OtherSectionCopy,
  OtherSurface,
} from "../../style/other/otherStyle";

const detailIconMap = {
  Address: <LocationOnOutlinedIcon fontSize="small" />,
  Email: <EmailOutlinedIcon fontSize="small" />,
  Phone: <PhoneOutlinedIcon fontSize="small" />,
  Support: <ScheduleOutlinedIcon fontSize="small" />,
};

const ContactPage = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageSent(true);
  };

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
            <OtherBreadcrumbCurrent>{contactPage.breadcrumb}</OtherBreadcrumbCurrent>
          </OtherBreadcrumbs>

          <div style={{ display: "grid", gap: "14px", marginBottom: "30px" }}>
            <OtherHeroTitle>{contactPage.title}</OtherHeroTitle>
            <OtherHeroCopy>{contactPage.intro}</OtherHeroCopy>
          </div>

          <ContactGrid>
            <ContactFormCard>
              <div style={{ display: "grid", gap: "10px" }}>
                <ContactInfoTitle>Get In Touch</ContactInfoTitle>
                <OtherSectionCopy>{contactPage.note}</OtherSectionCopy>
              </div>

              <ContactForm onSubmit={handleSubmit}>
                <ContactFieldGrid>
                  <ContactField>
                    <span>First Name</span>
                    <input defaultValue="Ali" type="text" />
                  </ContactField>

                  <ContactField>
                    <span>Last Name</span>
                    <input defaultValue="Tufan" type="text" />
                  </ContactField>
                </ContactFieldGrid>

                <ContactFieldGrid>
                  <ContactField>
                    <span>Email</span>
                    <input defaultValue="creativelayers088@gmail.com" type="email" />
                  </ContactField>

                  <ContactField>
                    <span>Phone</span>
                    <input defaultValue="+90 47458 27 3287 12" type="tel" />
                  </ContactField>
                </ContactFieldGrid>

                <ContactField>
                  <span>Comment</span>
                  <textarea defaultValue="Lorem Ipsum Dolar Sit Amet" />
                </ContactField>

                <div style={{ display: "grid", gap: "12px", justifyItems: "start" }}>
                  <ContactSubmitButton type="submit">
                    Send Message
                    <SendRoundedIcon fontSize="small" />
                  </ContactSubmitButton>

                  {messageSent ? (
                    <ContactSuccess>
                      Your message has been captured locally for this demo state.
                    </ContactSuccess>
                  ) : null}
                </div>
              </ContactForm>
            </ContactFormCard>

            <ContactInfoStack>
              <ContactInfoCard>
                <ContactInfoTitle>Contact Details</ContactInfoTitle>
                <OtherSectionCopy>{contactPage.note}</OtherSectionCopy>

                {contactDetails.map((detailItem) => (
                  <ContactInfoRow key={detailItem.label}>
                    <ContactInfoLabel>
                      {detailIconMap[detailItem.label]} {detailItem.label}
                    </ContactInfoLabel>
                    <ContactInfoValue>{detailItem.value}</ContactInfoValue>
                  </ContactInfoRow>
                ))}
              </ContactInfoCard>

              <ContactInfoCard>
                <ContactInfoTitle>Location</ContactInfoTitle>
                <ContactMapVisual />
              </ContactInfoCard>

              <ContactInfoCard>
                <ContactInfoTitle>Opening Hours</ContactInfoTitle>
                <ContactHoursList>
                  {contactHours.map((hourItem) => (
                    <ContactHoursRow key={hourItem.day}>
                      <span>{hourItem.day}</span>
                      <strong>{hourItem.hours}</strong>
                    </ContactHoursRow>
                  ))}
                </ContactHoursList>
              </ContactInfoCard>
            </ContactInfoStack>
          </ContactGrid>
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

export default ContactPage;
