import React from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

import FooterSection from "../homepage/footer-section";
import SiteHeader from "../shared/site-header";
import {
  footerColumns,
  footerMeta,
  navLinks,
  socialLinks,
} from "../../data/homeData";
import { notFoundPage } from "../../data/otherData";
import {
  NotFoundCode,
  NotFoundShell,
  OtherActionRow,
  OtherHeroCopy,
  OtherHeroShell,
  OtherHeroTitle,
  OtherMain,
  OtherPageShell,
  OtherPrimaryAction,
  OtherSecondaryAction,
  OtherSectionCopy,
  OtherSectionKicker,
  OtherSurface,
} from "../../style/other/otherStyle";

const NotFoundPage = () => {
  return (
    <OtherPageShell>
      <OtherHeroShell>
        <SiteHeader navLinks={navLinks} />
      </OtherHeroShell>

      <OtherMain>
        <OtherSurface>
          <NotFoundShell>
            <OtherSectionKicker>Page Not Found</OtherSectionKicker>
            <NotFoundCode>{notFoundPage.code}</NotFoundCode>
            <OtherHeroTitle>{notFoundPage.title}</OtherHeroTitle>
            <OtherHeroCopy>{notFoundPage.intro}</OtherHeroCopy>
            <OtherSectionCopy>
              The cleanest recovery path is to return to the public landing page, browse
              inventory, or continue into a supported section that already exists in the
              current build.
            </OtherSectionCopy>

            <OtherActionRow>
              <OtherPrimaryAction to="/">
                Back To Home
                <HomeRoundedIcon fontSize="small" />
              </OtherPrimaryAction>
              <OtherSecondaryAction to="/inventory">
                Browse Inventory
                <ArrowForwardRoundedIcon fontSize="small" />
              </OtherSecondaryAction>
            </OtherActionRow>
          </NotFoundShell>
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

export default NotFoundPage;
