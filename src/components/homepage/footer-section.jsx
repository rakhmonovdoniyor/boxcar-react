import React, { useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Link } from "react-router-dom";

import {
  FooterAppButton,
  FooterBottom,
  FooterBottomLinks,
  FooterColumn,
  FooterColumnTitle,
  FooterColumns,
  FooterHelperText,
  FooterLink,
  FooterNewsletter,
  FooterShell,
  FooterSocialButton,
  FooterSocialRow,
  FooterTop,
  FooterTopText,
  NewsletterButton,
  NewsletterInput,
} from "../../style/homepagestyle/homestyle";

const socialIconMap = {
  facebook: <FacebookRoundedIcon fontSize="small" />,
  instagram: <InstagramIcon fontSize="small" />,
  linkedin: <LinkedInIcon fontSize="small" />,
  x: <XIcon fontSize="small" />,
};

const appButtons = [
  {
    label: "Download on the App Store",
    icon: <AppleIcon fontSize="small" />,
    href: "https://www.apple.com/app-store/",
  },
  {
    label: "Get it on Google Play",
    icon: <PlayArrowRoundedIcon fontSize="small" />,
    href: "https://play.google.com/store",
  },
];

const footerRouteMap = {
  "About Us": "/about",
  Careers: "/team",
  Blog: "/blog",
  FAQs: "/faq",
  Finance: "/loan-calculator",
  "Contact Us": "/contact",
  "Get In Touch": "/contact",
  "Help Center": "/faq",
  "Live Chat": "/contact",
  "How it works": "/about",
  "Aston Martin": "/inventory",
  Audi: "/inventory",
  Bentley: "/inventory",
  BMW: "/inventory",
  Bugatti: "/inventory",
  Ferrari: "/inventory",
  Pickup: "/inventory/sidebar",
  Coupe: "/inventory/sidebar",
  "Family MPV": "/inventory/sidebar",
  Sedan: "/inventory/sidebar",
  SUV: "/inventory/sidebar",
  Wagon: "/inventory/sidebar",
  "Terms & Conditions": "/faq",
  "Privacy Notice": "/contact",
};

const FooterSection = ({ columns, footerMeta, socialLinks }) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterJoined, setNewsletterJoined] = useState(false);

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      return;
    }

    setNewsletterJoined(true);
    setNewsletterEmail("");
  };

  return (
    <FooterShell>
      <FooterTop>
        <FooterTopText>
          <h3>Join BoxCar</h3>
          <p>
            Receive pricing updates, shopping tips and new stock notifications.
          </p>
        </FooterTopText>

        <div style={{ display: "grid", gap: "10px" }}>
          <FooterNewsletter as="form" onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              onChange={(event) => setNewsletterEmail(event.target.value)}
              placeholder="Your email address"
              type="email"
              value={newsletterEmail}
            />
            <NewsletterButton type="submit">
              {newsletterJoined ? "Joined" : "Sign Up"}
            </NewsletterButton>
          </FooterNewsletter>
          <FooterHelperText>
            {newsletterJoined
              ? "You are in. The next BoxCar update will land in your inbox."
              : "Use a real address format to keep the footer flow feeling complete."}
          </FooterHelperText>
        </div>
      </FooterTop>

      <FooterColumns>
        {columns.map((column) => (
          <FooterColumn key={column.title}>
            <FooterColumnTitle>{column.title}</FooterColumnTitle>
            {column.links.map((linkLabel) => (
              <FooterLink
                as={Link}
                key={linkLabel}
                to={footerRouteMap[linkLabel] ?? "/inventory"}
              >
                {linkLabel}
              </FooterLink>
            ))}
          </FooterColumn>
        ))}

        <FooterColumn>
          <FooterColumnTitle>Our Mobile App</FooterColumnTitle>
          {appButtons.map((button) => (
            <FooterAppButton
              href={button.href}
              key={button.label}
              rel="noreferrer"
              target="_blank"
            >
              {button.icon}
              {button.label}
            </FooterAppButton>
          ))}

          <FooterColumnTitle>Connect With Us</FooterColumnTitle>
          <FooterSocialRow>
            {socialLinks.map((social) => (
              <FooterSocialButton
                aria-label={social.label}
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
              >
                {socialIconMap[social.icon]}
              </FooterSocialButton>
            ))}
          </FooterSocialRow>
        </FooterColumn>
      </FooterColumns>

      <FooterBottom>
        <span>{footerMeta.copyright}</span>
        <FooterBottomLinks>
          {footerMeta.links.map((linkLabel) => (
            <FooterLink
              as={Link}
              key={linkLabel}
              to={footerRouteMap[linkLabel] ?? "/faq"}
            >
              {linkLabel}
            </FooterLink>
          ))}
        </FooterBottomLinks>
      </FooterBottom>
    </FooterShell>
  );
};

export default FooterSection;
